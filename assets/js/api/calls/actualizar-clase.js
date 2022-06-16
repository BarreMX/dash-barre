$(document).ready(function(){

	// Reservar Clase
	let class_id = getUrlParameter( 'id' );

	// Sending Request
	var myHeaders = new Headers();
	myHeaders.append( "Authorization", "Bearer " + token );

	var formdata = new FormData();
	formdata.append( "class_id", class_id );

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};

	fetch( api_host +  "/get-class-data", requestOptions )
	.then( response => response.json() )
	.then( result => {

		if ( result.message ) {

			$( '.loading-bar' ).remove();
			jQuery( '#get_error' ).html( '<p class="text-danger">' + result.message + '</p>' );

		} else {

			jQuery( '#tapetes' ).html( result.tapetes );
			jQuery( result.instructor ).appendTo( '#instructores' );
			jQuery( result.ubication ).appendTo( '#ubicaciones' );
			jQuery( '#class-date' ).val( result.fecha );
			jQuery( '#class-time' ).val( result.hora );
			jQuery( '#alumnos' ).html( result.alumnos );

			$( '.loading-bar' ).remove();
			$( '.page-preloader' ).remove();

		}

	})
	.catch( error => {
			
		$( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );

	});

	/* Reservado */
	$('body').on('click', '.is-reserver', function() {
    	event.preventDefault();
		Swal.fire({
			title: 'Error?',
			text: "Tapete ya reservado",
			icon: 'error',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'Aceptar'
		});
	});

	/* Reservar */
	$('body').on('click', '.available-rug', function() {
    	event.preventDefault();

		let rug_id = jQuery(this).attr( 'id' );
		let class_id = jQuery(this).attr( 'reserva' );
		let user_id = jQuery( '#alumnos option:selected' ).val();

		Swal.fire({
			title: 'Reservar?',
			text: "Quieres reservar esta clase",
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Reservar esta clase!'
		}).then((result) => {

			if (result.isConfirmed) {

			$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

				var myHeaders = new Headers();
				myHeaders.append( "Authorization", "Bearer " + token );

				var formdata = new FormData();
				formdata.append( "rug_id", rug_id );
				formdata.append( "class_id", class_id );
				formdata.append( "user_id", user_id );

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: formdata,
					redirect: 'follow'
				};

				fetch( api_host + "/reservar-tapete", requestOptions )
				.then( response => response.json() )
				.then( result => {

					if ( result.message ) {

						$( '#get_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
						$( '.loading-bar' ).remove();

					} else {

						$( '.loading-bar' ).remove();

						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Tapete resercado con éxito',
							showConfirmButton: false,
							timer: 1500,
							willClose: () => {
		    					location.reload();	
		  					}
						});

					}

				})
				.catch( error => {
				
					$( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
				
				});

			}

		});

	});

	// Actualizar
	$('body').on('click', '#btn-update-class-data', function() {

		event.preventDefault();
		let instructor = $( '#instructores option:selected' ).val();
		let ubication = $( '#ubicaciones option:selected' ).val();
		let fecha = $( '#class-date' ).val();
		let hora = $( '#class-time' ).val();
		let class_id = getUrlParameter( 'id' );

		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

		var myHeaders = new Headers();
		myHeaders.append( "Authorization", "Bearer " + token );

		var formdata = new FormData();
		formdata.append( "instructor", instructor );
		formdata.append( "ubication", ubication );
		formdata.append( "fecha", fecha );
		formdata.append( "hora", hora );
		formdata.append( "class_id", class_id );

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: formdata,
			redirect: 'follow'
		};

		fetch( api_host + "/bmx-update-class", requestOptions )
		.then( response => response.json() )
		.then( result => {

			if ( result.message ) {

				$( '#get_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
				$( '.loading-bar' ).remove();

			} else {

				$( '.loading-bar' ).remove();

				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Clase Actualizada con éxito',
					showConfirmButton: false,
					timer: 1500,
					willClose: () => {
				    	location.reload();	
				  	}
				});

			}

		})
		.catch( error => {
			$( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
		});

	});

});