$(document).ready(function(){

	// All orders button

	$( '.todos-los-pedidos' ).click(function(){
		event.preventDefault();
		document.querySelector( '#page_alumnos' ).click();
	});

	// Get Analitycs Homepage

	if ( localStorage.getItem( "analytics" ) === null ) {

		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

		var myHeaders = new Headers();
		myHeaders.append( "Authorization", "Bearer " + token );

		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};

		fetch( api_host +  "/analytics", requestOptions )
		.then( response => response.json() )
		.then( result => {

			if ( result.message ) {

				$( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );

			} else {

				$( '#get_1' ).html( result.alumnos );
				$( '#get_2' ).html( result.alumnos_mes );
				$( '#get_3' ).html( result.instructores );
				$( '#get_4' ).html( '$' + result.ventas_totales + '' );
				$( '#get_5' ).html( '$' + result.ventas_mes + '' );
				$( '#get_6' ).html( result.pedidos );
				$( '#get_7' ).html( result.pedidos_mes );

				localStorage.setItem( "alumnos", result.alumnos );
				localStorage.setItem( "alumnos_mes", result.alumnos_mes );
				localStorage.setItem( "instructores", result.instructores );
				localStorage.setItem( "ventas_totales", result.ventas_totales );
				localStorage.setItem( "ventas_mes", result.ventas_mes );
				localStorage.setItem( "pedidos", result.pedidos );
				localStorage.setItem( "pedidos_mes", result.pedidos_mes );
				localStorage.setItem( "analytics", 'ok' );

			}

			$( '.loading-bar' ).remove();

		})
		.catch( error => {

			$( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );

		});

	} else {

		$( '#get_1' ).html( localStorage.getItem( "alumnos" ) );
		$( '#get_2' ).html( localStorage.getItem( "alumnos_mes" ) );
		$( '#get_3' ).html( localStorage.getItem( "instructores" ) );
		$( '#get_4' ).html( localStorage.getItem( "ventas_totales" ) );
		$( '#get_5' ).html( localStorage.getItem( "ventas_mes" ) );
		$( '#get_6' ).html( localStorage.getItem( "pedidos" ) );
		$( '#get_7' ).html( localStorage.getItem( "pedidos_mes" ) );

	}

	// Get last users

	var myHeaders = new Headers();
    myHeaders.append( "Authorization", "Bearer " + token );

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch( api_host +  "/ultimos-alumnos", requestOptions )
    .then( response => response.json() )
    .then( result => {

    	if ( result.message ) {

    		$( '.table-responsive' ).attr( 'style', 'display: block;' );
    		$( '.page-preloader' ).remove();
    		jQuery( 'table.table tbody' ).html( '<tr style="width: 100%;"><td>' + result.message + '</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>' );

    	} else {

    		result.forEach( element => {

    			let user_val = '<tr><td>' + element.id + '</td><td>' + element.fecha + '</td><td>' + element.nombre + '</td><td>' + element.email + '</td><td>' + element.ubicacion + '</td><td>' + element.hora + '</td><td><a href="' + domain + '?page=editar-alumno&id=' + element.id + '" class="btn btn-outline-success btn-sm">Editar</a></td></tr>';
  				$( user_val ).appendTo( 'table.table tbody' );

  				$( '.table-responsive' ).attr( 'style', 'display: block;' );
    			$( '.page-preloader' ).remove();

  			});

    	}

    })
    .catch( error => {
        jQuery( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
    });

});