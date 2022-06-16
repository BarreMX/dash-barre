$(document).ready(function(){

	$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

	var myHeaders = new Headers();
	myHeaders.append( "Authorization", "Bearer " + token );

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	fetch( api_host +  "/alumnos", requestOptions )
	.then( response => response.json() )
  	.then( result => {

  		if ( result.message ) {

  			$( '#get_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
  			$( '.page-preloader' ).remove();
			$( '.loading-bar' ).remove();

  		} else {

  			const alumnos = result;
  			var table = $( '#datatable-buttons' ).DataTable({
				paging: true,
				searching: true,
				info: false,
				dom: 'Bfrtip',
				data: alumnos,
				buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ],
				columns: [
				    { title: "Fecha", data: "fecha" },
				    { title: "Ubicación", data: "ubicacion" },
				    { title: "Horario", data: "horario" },
				    { title: "Pocision", data: "pocision" },
				    { title: "Nombre", data: "nombre_ds" },
				    { title: "Correo", data: "email" },
				    { title: "Clase Clave", data: "clase_clave" },
				    { title: "Descripción", data: "descripcion" },
				    { title: "Saldo Clase", data: "saldo_clase" },
				    { title: "Vigencia", data: "vigencia" },
				    { title: "Clave Pago", data: "clave_pago" },
				    { title: "Método de Pago", data: "metodo_pago" },
				    { title: "Descuento", data: "descuento" },
				    { title: "Asistencia (1=ok 0=falta)", data: "asistencia" },
				    { title: "Staff", data: "staff" },
				    { title: "Ingresos", data: "ingresos" },
				    { title: "Observaciones", data: "observaciones" },
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

  	// Post Students
  	$( '#btn-new-student' ).click(function(){
  		event.preventDefault();

  		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

  		let first_name = $( '#instructor-nombre' ).val();
  		let last_name = $( '#instructor-apellido' ).val();
  		let user_mail = $( '#instructor-email' ).val();
  		let user_password = $( '#instructor-password' ).val();
  		let user_rol = $( '#tipo-list option:selected' ).val();
  		let register_by = $( '#register-by' ).val();

  		var myHeaders = new Headers();
		myHeaders.append( "Authorization", "Bearer " + token );

		var formdata = new FormData();
		formdata.append( "first_name", first_name );
		formdata.append( "last_name", last_name );
		formdata.append( "email", user_mail );
		formdata.append( "password", user_password );
		//formdata.append( "location", location_user );
		formdata.append( "type", user_rol );
		formdata.append( "register_by", register_by );

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: formdata,
			redirect: 'follow'
		};

		fetch( api_host +  "/agregar-alumno", requestOptions )
		.then( response => response.json() )
		.then( result => {
			if ( result.message ) {
				jQuery( '#get_eror' ).html( '<p class="text-danger">' + result.message + '</p>' );
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
			jQuery( '#get_eror' ).html( '<p class="text-danger">' + error.message + '</p>' );
		});

  	});

});