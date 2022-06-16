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

	fetch( api_host +  "/get-history", requestOptions )
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
				    { title: "Hora", data: "hora" },
				    { title: "Instructor", data: "usuario" },
				    { title: "Alumno", data: "alumno" },
				    { title: "Estado", data: "acciones" },
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

});