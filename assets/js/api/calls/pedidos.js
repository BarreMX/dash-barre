$(document).ready(function(){

	// Show all orders

	var myHeaders = new Headers();
	myHeaders.append( "Authorization", "Bearer " + token );

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	fetch( api_host +  "/pedidos", requestOptions )
	.then( response => response.json() )
	.then( result => {
	
		if ( result.message ) {

			jQuery( '#get-error' ).html( '<p class="text-danger">' + result.message + '</p>' );

		} else {

			const orders = result;
			var table = $( '#datatable-buttons' ).DataTable({
				paging: true,
				searching: true,
				info: true,
				dom: 'Bfrtip',
				data: orders,
				"aaSorting": [[ 4, "desc" ]],
				buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ],
				columns: [
				    { title: "ID", data: "id" },
				    { title: "Usuario", data: "usuario" },
				    { title: "Estado", data: "estado" },
				    { title: "Método de pago", data: "metodo_pago" },
				    { title: "Medio de compra", data : "medio" },
				    { title: "Producto", data: "producto" },
				    { title: "Total", data: "total" },
				    { title: "Fecha", data: "fecha" },
				    { title: "Acciones", data: "acciones" },
				],
				language: {
					"emptyTable":     "No hay datos disponibles",
					"info":           "Mostrando _START_ - _END_ de _TOTAL_ datos",
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

		}

	})
  	.catch( error => {
  		jQuery( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
  	});

  	// Create new order

  	$( '.nuevo-pedido' ).one( "click", function() {

  		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );
  	
  		// Get all students

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

				jQuery( '#get_buy_error' ).html( '<p class="text-danger">' + error.message + '</p>' );

			} else {

				result.forEach( element => {
	    			let user_val = '<option value="' + element.id + '">' + element.nombre + '</option>';
	    			$( user_val ).appendTo( 'select#student-list' );
	  			});

	  			// Get all products

	  			var myHeadersProducts = new Headers();
				myHeadersProducts.append( "Authorization", "Bearer " + token );

				var requestOptionsProducts = {
					method: 'GET',
					headers: myHeadersProducts,
					redirect: 'follow'
				};

				fetch( api_host +  "/productos", requestOptionsProducts )
				.then( response => response.json() )
				.then( result => {

					if ( result.message ) {

						jQuery( '#get_buy_error' ).html( '<p class="text-danger">' + result.message + '</p>' );

					} else {

						result.forEach( element => {
			    			let product_val = '<option value="' + element.product_id + '">' + element.product_name + '</option>';
			    			$( product_val ).appendTo( 'select#product-list' );
			  			});

					}			

					$( '.loading-bar' ).remove();

				})
	  			.catch( error => {
	  				jQuery( '#get_buy_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
	  			});

			}

		})
  		.catch( error => {
  			jQuery( '#get_buy_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
  		});

  	});

  	$( '#btn-new-order' ).click(function(){
  		event.preventDefault();

  		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

  		$( '#get_buy_error' ).html( '' );

  		let student_id = $( 'select#student-list option:selected' ).val();
  		let product_id = $( 'select#product-list option:selected' ).val();
  		let means_purchase = $( '#medio-compra' ).val();
  		let payment_method = $( '#tipo-pago' ).val();
  		let status = $( 'select#status-list option:selected' ).val();

  		var myHeaders = new Headers();
		myHeaders.append( "Authorization", "Bearer " + token );

		var formdata = new FormData();
		formdata.append( "student_id", student_id );
		formdata.append( "product_id", product_id );
		formdata.append( "means_purchase", means_purchase );
		formdata.append( "payment_method", payment_method );
		formdata.append( "status", status );

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: formdata,
			redirect: 'follow'
		};

		fetch( api_host + "/nueva-orden", requestOptions )
		.then( response => response.json())
		.then( result => {

			if ( result.message ) {

				jQuery( '#get_buy_error' ).html( '<p class="text-danger">' + result.message + '</p>' );

			} else {

				$( '.loading-bar' ).remove();
				
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Orden guardado con éxito',
					showConfirmButton: false,
					timer: 1500,
					willClose: () => {
    					location.reload();	
  					}
				});

			}

		})
		.catch( error => {
			jQuery( '#get_buy_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
		});


  	});

  	// Put Status

  	$('body').on( 'click', '.edit-order', function() {
  		event.preventDefault();
  		let order_id = $(this).attr( 'order-id' );
  		let order_name = $(this).attr( 'order-name' );
  		let order_status = $(this).attr( 'order-status' );
  		$( '#update-pedido' ).modal( 'show' );
  		$( '#update-status-list option[value="' + order_status + '"]' ).attr( 'selected', 'true' );
  		$( '#btn-update-order' ).attr( 'pedido-id', order_id );
	});

	$( '#btn-update-order' ).click(function(){
		event.preventDefault();

		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

		let pedido_id = $(this).attr( 'pedido-id' );
		let status_id = $( 'select#update-status-list option:selected' ).val();

		var myHeadersUpdate = new Headers();
		myHeadersUpdate.append( "Authorization", "Bearer " + token );

		var formdataUpdate = new FormData();
		formdataUpdate.append( "order-id", pedido_id );
		formdataUpdate.append( "status", status_id  );

		var requestOptionsUpdate = {
			method: 'POST',
			headers: myHeadersUpdate,
			body: formdataUpdate,
			redirect: 'follow'
		};

		fetch( api_host +  "/actualizar-orden-status", requestOptionsUpdate )
		.then( response => response.json() )
		.then( result => {

			if ( result.message ) {

				$( '.loading-bar' ).remove();
				jQuery( '#get_update_error' ).html( '<p class="text-danger">' + error.message + '</p>' );

			} else {

				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Pedido actualizado con éxito',
					showConfirmButton: false,
					timer: 1500,
					willClose: () => {
    					location.reload();	
  					}
				});

			}

		})
		.catch( error => {
			jQuery( '#get_update_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
		});

	});

});