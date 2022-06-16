$(document).ready(function(){

	// Obtener Usuarios
	$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

	var myHeaders = new Headers();
	myHeaders.append( "Authorization", "Bearer " + token );

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	fetch( api_host +  "/instructores", requestOptions )
	.then( response => response.json() )
	.then( result => {

		if ( result.message ) {

			jQuery( '#get_error' ).html( '<p class="text-danger">' + result.message + '</p>' );

		} else {

			const instructores = result;
			var table = $( '#datatable-buttons' ).DataTable({
				paging: true,
				searching: true,
				info: false,
				dom: 'Bfrtip',
				data: instructores,
				buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ],
				columns: [
					{ title: "ID", data: "id" },
				    { title: "Nombre", data: "nombre" },
				    { title: "Email", data: "email" },
				    { title: "Telefono", data: "telefono" },
				    { title: "Edad", data: "edad" },
				    //{ title: "Ubicacion", data: "ubicacion" },
				    { title: "Acciones", data: "buttons" }
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
  		jQuery( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
  	});


  	// New Instructor
  	$( '#btn-new-instructor' ).click(function(){
  		event.preventDefault();

  		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

  		let first_name = $( '#instructor-nombre' ).val();
		let last_name = $( '#instructor-apellido' ).val();
		let email = $( '#instructor-email' ).val();
		let password = $( '#instructor-password' ).val();
		let location_user = 'Rotativo';

		var myHeaders = new Headers();
		myHeaders.append( "Authorization", "Bearer " + token );

		var formdata = new FormData();
		formdata.append( "first_name", first_name );
		formdata.append( "last_name", last_name );
		formdata.append( "email", email );
		formdata.append( "password", password );
		formdata.append( "location", location_user );

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: formdata,
			redirect: 'follow'
		};

		fetch( api_host +  "/agregar-instructor", requestOptions )
		.then( response => response.json() )
		.then( result => {
			if ( result.message ) {
				jQuery( '#get_instructor_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
			} else {

				$( '.loading-bar' ).remove();
			
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Instructor creado con éxito',
					showConfirmButton: false,
					timer: 1500,
					willClose: () => {
    					location.reload();	
  					}
				});

			}
		})
		.catch( error => {
			jQuery( '#get_instructor_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
		});

  	});

  	// Update User
  	$('body').on('click', '.update-user', function() {
  		event.preventDefault();

  		$( '#update-user' ).modal( 'show' );

  		let user_id = $(this).attr( 'user-id' );
  		let user_first_name = $(this).attr( 'user-name' );
  		let user_last_name = $(this).attr( 'user-last-name' );
  		let user_email = $(this).attr( 'user-email' );
  		let user_age = $(this).attr( 'user-age' );
  		let user_phone = $(this).attr( 'user-phone' );
  		let user_role = $(this).attr( 'user-role' );
  		let user_ubication = $(this).attr( 'user-ubication' );

  		if ( user_first_name ) {
  			$( '#alumno-nombre' ).val( user_first_name );
  		}

  		if ( user_last_name ) {
  			$( '#alumno-apellido' ).val( user_last_name );
  		}

  		if ( user_age ) {
  			$( '#alumno-edad' ).val( user_age );
  		}

  		$( '#alumno-telefono' ).val( user_phone );
  		if ( user_email ) {
  			$( '#alumno-email' ).val( user_email );
  		}

  		if ( user_id ) {
  			$( '#alumno-id' ).val( user_id );
  		}

  		if ( user_ubication ) {
  			$( 'select#alumno-ubicacion option[value="' + user_ubication + '"]' ).attr( 'selected', 'true' );
  		}

  	});

  	$('body').on('click', '#btn-update-user', function() {
  		event.preventDefault();

		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

		let put_user = $( '#alumno-id' ).val();
		let put_nombre = $( '#alumno-nombre' ).val();
		let put_apellido = $( '#alumno-apellido' ).val();
		let put_edad = $( '#alumno-edad' ).val();
		let put_telefono = $( '#alumno-telefono' ).val();
		let put_email = $( '#alumno-email' ).val();
		let put_ubicacion = $( '#alumno-ubicacion option:selected' ).val();

		var myHeadersUpdate = new Headers();
		myHeadersUpdate.append( "Authorization", "Bearer " + token );

		var formdataUpdate = new FormData();
		formdataUpdate.append( "user_id", put_user );
		formdataUpdate.append( "nombre", put_nombre  );
		formdataUpdate.append( "apellido", put_apellido );
		formdataUpdate.append( "edad", put_edad );
		formdataUpdate.append( "telefono", put_telefono );
		formdataUpdate.append( "email", put_email  );
		formdataUpdate.append( "ubicacion", put_ubicacion  );

		var requestOptionsUpdate = {
			method: 'POST',
			headers: myHeadersUpdate,
			body: formdataUpdate,
			redirect: 'follow'
		};

		fetch( api_host +  "/actualizar-alumno", requestOptionsUpdate )
		.then( response => response.json() )
		.then( result => {

			if ( result.message ) {

				jQuery( '#update_user_error' ).html( '<p class="text-danger">' + error.message + '</p>' );

			} else {

				$( '.loading-bar' ).remove();

				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Usuario actualizado con éxito',
					showConfirmButton: false,
					timer: 1500,
					willClose: () => {
    					location.reload();	
  					}
				});

			}

		})
		.catch( error => {
			jQuery( '#update_user_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
		});

  	});

});