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

	fetch( api_host +  "/todos-usuarios-administrativos", requestOptions )
	.then( response => response.json() )
  	.then( result => {

  		if ( result.message ) {

  			$( '#get_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
  			$( '.page-preloader' ).remove();
			$( '.loading-bar' ).remove();

  		} else {

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

					jQuery( '#get-error' ).html( '<p class="text-danger">' + result.message + '*</p>' );

				} else {

					const ubicaciones = result;
	  				ubicaciones.forEach( element => {
	  					let ubicacion_select = '<option value="' + element.id + '">' + element.titulo + '</option>';
	  					$( ubicacion_select ).appendTo( '#alumno-ubicacion' );
	  				});

				}

			})
	  		.catch( error => {
	  			
	  			$( '#get-error' ).html( '<p class="text-danger">' + error.message + '</p>' );

	  		});

  			const alumnos = result;
  			var table = $( '#datatable-buttons' ).DataTable({
				paging: true,
				searching: true,
				info: false,
				dom: 'Bfrtip',
				data: alumnos,
				buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ],
				columns: [
				    { title: "ID", data: "id" },
				    { title: "Nombre", data: "display_name" },
				    { title: "Email", data: "email" },
				    { title: "Ubicación", data: "ubicacion" },
				    { title: "Role", data: "role" },
				    { title: "Acciones", data: "buttons" },
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

	// Get Ubicacion
	$( '.nuevo-usuario' ).one( "click", function() {

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

				$( '#get_new_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
				$( '.loading-bar' ).remove();

			} else {

				result.forEach( element => {
			    	let ubicacion_val = '<option value="' + element.id + '">' + element.titulo + '</option>';
			    	$( ubicacion_val ).appendTo( 'select#ubicaciones' );
			  	});

			  	$( '.loading-bar' ).remove();

			}

		})
  		.catch( error => {
  		
  			$( '#get_new_error' ).html( '<p class="text-danger">' + error.message + '</p>' );

  		});

	});

	$( '#btn-new-user' ).click(function(){
		event.preventDefault();

		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

		let nombre = $( '#user-nombre' ).val();
		let apellido = $( '#user-apellido' ).val();
		let ubicacion = $( '#ubicaciones option:selected' ).val();
		let email = $( '#user-email' ).val();
		let rol = $( 'select#user-rol option:selected' ).val();
		let password = $( '#user-password' ).val();

		var myHeaders = new Headers();
		myHeaders.append( "Authorization", "Bearer " + token );

		var formdata = new FormData();
		formdata.append( "nombre", nombre );
		formdata.append( "apellido", apellido );
		formdata.append( "ubicacion", ubicacion );
		formdata.append( "email", email );
		formdata.append( "rol", rol );
		formdata.append( "password", password );

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: formdata,
			redirect: 'follow'
		};

		fetch( api_host + "/nuevo-usuario-administrativo", requestOptions )
		.then( response => response.json() )
		.then( result => {

			if ( result.message ) {

				$( '#get_new_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
				$( '.loading-bar' ).remove();

			} else {

				$( '.loading-bar' ).remove();

				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Usuario creado con éxito',
					showConfirmButton: false,
					timer: 1500,
					willClose: () => {
    					location.reload();	
  					}
				});

			}

		})
		.catch( error => {
		
			$( '#get_new_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
		
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