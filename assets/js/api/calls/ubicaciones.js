$(document).ready(function(){

	$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

	var myHeaders = new Headers();
	myHeaders.append( "Authorization", "Bearer " + token );

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	fetch( api_host +  "/ubicaciones", requestOptions )
	.then( response => response.json() )
	.then( result => {

		if ( result.message ) {

			$( '#get_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
			$( '.page-preloader' ).remove();
			$( '.loading-bar' ).remove();

		} else {

			const ubicaciones = result;

  			var table = $( '#datatable-buttons' ).DataTable({
				paging: true,
				searching: true,
				info: false,
				dom: 'Bfrtip',
				data: ubicaciones,
				buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ],
				columns: [
					{ title: "ID", data: "id" },
				    { title: "Ubicación", data: "titulo" },
				    { title: "Encargado", data: "encargado" },
				    { title: "Direccion", data: "direccion" },
				    { title: "Color", data: "color" },
				    { title: "Acciones", data: "edit-page" }
				],
				 language: {
					"emptyTable":     "No hay datos disponibles",
					"info":           "Mostrando _START_ a _END_ de _TOTAL_ datos",
					"infoEmpty":      "Mostrando 0 a 0 de 0 datos",
					"infoFiltered":   "(filtrado de _MAX_ datos totales)",
					"lengthMenu":     "Show _MENU_ entries",
					"loadingRecords": "Cargando...",
					"processing":     "Procesando...",
					"search":         "Buscar:",
					"zeroRecords":    "No se encontraron resultados",
					"paginate": {
					    "first":      "Primero",
					    "last":       "Ultimo",
					    "next":       "Siguiente",
					    "previous":   "Anterior"
					},
					"aria": {
					    "sortAscending":  ": activar para ordenar la columna ascendente",
					    "sortDescending": ": activar para ordenar la columna descendente"
					}
				}
			});

			$( '.page-preloader' ).remove();
			$( '.loading-bar' ).remove();

		}

	})
  	.catch( error => {
  		
  		$( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );

  	});

  	// Create Ubicación

  	$( '#btn-save-ubication' ).click(function(){
  		event.preventDefault();

  		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );
  		jQuery( '#result' ).html( '' );

  		let titulo = jQuery( '#ubicacion-titulo' ).val();
		let encargado = jQuery( '#ubicacion-encargado' ).val();
		let direccion = jQuery( '#ubicacion-direccion' ).val();
		let color = jQuery( '#ubicacion-color' ).val();

		var myHeaders = new Headers();
		myHeaders.append( "Authorization", "Bearer " + token );

		var formdata = new FormData();
		formdata.append( "titulo", titulo );
		formdata.append( "encargado", encargado );
		formdata.append( "direccion", direccion );
		formdata.append( "color", color );

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: formdata,
			redirect: 'follow'
		};

		fetch( api_host + "/nueva-ubicacion", requestOptions )
		.then( response => response.json())
		.then( result => {
			
			if ( result.message ) {

				$( '#get_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
				$( '.loading-bar' ).remove();

			} else {

				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Ubicación guardada con éxito',
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

  	// Update

  	$('body').on('click', '.update-ubicacion', function() {
    	event.preventDefault();

    	let ubicacion_id = jQuery(this).attr( 'ubicacion-id' );
    	let color = jQuery(this).attr( 'color' );
    	let title = jQuery(this).attr( 'title' );
    	let encargado = jQuery(this).attr( 'encargado' );
    	let direccion = jQuery(this).attr( 'direccion' );

    	$( '#update-titulo' ).val( title );
    	$( '#update-encargado' ).val( encargado );
    	$( '#update-direccion' ).val( direccion );
    	$( '#update-color' ).val( color );
    	$( '#update-ubicacion' ).modal( 'show' );
    	$( '#btn-update-ubicacion' ).attr( 'ubicacion-id', ubicacion_id );

	});

	$( '#btn-update-ubicacion' ).click(function(){
		event.preventDefault();

		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

		let ubicacion_id = $(this).attr( 'ubicacion-id' );
		let color = $( '#update-color' ).val();
    	let title = $( '#update-titulo' ).val();
    	let encargado = $( '#update-encargado' ).val();
    	let direccion = $( '#update-direccion' ).val();

    	var myHeadersUpdate = new Headers();
		myHeadersUpdate.append( "Authorization", "Bearer " + token );

		var formdataUpdate = new FormData();
		formdataUpdate.append( "post_id", ubicacion_id );
		formdataUpdate.append( "color", color  );
		formdataUpdate.append( "title", title );
		formdataUpdate.append( "encargado", encargado );
		formdataUpdate.append( "direccion", direccion );

		var requestOptionsUpdate = {
			method: 'POST',
			headers: myHeadersUpdate,
			body: formdataUpdate,
			redirect: 'follow'
		};

		fetch( api_host +  "/actualizar-ubicacion", requestOptionsUpdate )
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
					title: 'Ubicación actualizada con éxito',
					showConfirmButton: false,
					timer: 1500,
					willClose: () => {
    					location.reload();	
  					}
				});

			}

		})
		.catch( error => {
			jQuery( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
		});

	});

});