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

	fetch( api_host +  "/get-reservations", requestOptions )
	.then( response => response.json() )
  	.then( result => {

  		if ( result.message ) {

  			$( '#get_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
  			$( '.page-preloader' ).remove();
			$( '.loading-bar' ).remove();

  		} else {

  			const calificaciones = result;
  			var table = $( '#datatable-buttons' ).DataTable({
				paging: true,
				searching: true,
				info: false,
				dom: 'Bfrtip',
				data: calificaciones,
				buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ],
				columns: [
				    { title: "Ubicacion", data: "ubicacion" },
				    { title: "Clase", data: "titulo" },
				    { title: "Instructor", data: "instructor" },
				    { title: "Fecha", data: "fecha" },
				    { title: "Hora", data: "hora" },
				    { title: "Usuario", data: "usuario" },
				    { title: "Tapete", data: "tapete" },
				    { title: "Acciones", data: "acciones" },
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

  	// Cancelar Clase

  	$( 'body' ).on( 'click', 'a.cancel-class', function() {
  		event.preventDefault();

  		let rug_id = jQuery(this).attr( 'id' );
		let class_id = jQuery(this).attr( 'clase' );
		let user_id = jQuery(this).attr( 'user' );

		Swal.fire({
			title: 'Cancelar Clase',
			input: 'textarea',
		  	inputLabel: 'Porque cancelas la clase?',
		  	inputPlaceholder: '',
		  	inputAttributes: {
        		'aria-label': 'Agrega un comentario.'
      		},
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Cancelar clase',
			cancelButtonText: 'No Cancelar Clase',
		}).then((result) => {
			if (result.isConfirmed) {

				Swal.fire({
  					title: 'Cancelando clase.',
  					html: 'Por favor espere.',
  					timerProgressBar: true,
  					didOpen: () => {
  						Swal.showLoading()
  					}
				});

				let comentario = result.value;

				var cancelClassHeaders = new Headers();
				cancelClassHeaders.append( "Authorization", "Bearer " + token );

				var formdataCancel = new FormData();
				formdataCancel.append( "rug_id", rug_id );
				formdataCancel.append( "class_id", class_id  );
				formdataCancel.append( "user_id", user_id  );
				formdataCancel.append( "comentario", comentario  );

				var requestOptionsCancel = {
					method: 'POST',
					headers: cancelClassHeaders,
					body: formdataCancel,
					redirect: 'follow'
				};

				fetch( api_host +  "/cancelar-clase", requestOptionsCancel )
				.then( response => response.json() )
				.then( result => {

					Swal.close();

					if ( result.message ) {

						const Toast = Swal.mixin({
							toast: true,
							position: 'top-end',
							showConfirmButton: false,
							timer: 3000,
							timerProgressBar: true,
								didOpen: (toast) => {
								toast.addEventListener('mouseenter', Swal.stopTimer)
								toast.addEventListener('mouseleave', Swal.resumeTimer)
							},
						});

						Toast.fire({
							icon: 'error',
							title: result.message,
						});

					} else {

						const Toast = Swal.mixin({
							toast: true,
							position: 'top-end',
							showConfirmButton: false,
							timer: 3000,
							timerProgressBar: true,
								didOpen: (toast) => {
								toast.addEventListener('mouseenter', Swal.stopTimer)
								toast.addEventListener('mouseleave', Swal.resumeTimer)
							},
							willClose: () => {
								location.reload();
							},
						});

						Toast.fire({
							icon: 'success',
							title: result.success,
						});

					}

				})
				.catch( error => {

					Swal.close();

					jQuery( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );

				});

			}
		});

  	});

});