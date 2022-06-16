$(document).ready(function(){

	// Get User Data

	let user_id = getUrlParameter( 'id' );
	let fetch_id = '';

	if ( user_id ) {
		
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
  				
				$( '#get-error' ).html( '<p class="text-danger">' + error.message + '</p>' );

  			} else {

  				const ubicaciones = result;
  				ubicaciones.forEach( element => {
  					let ubicacion_select = '<option value="' + element.id + '">' + element.titulo + '</option>';
  					$( ubicacion_select ).appendTo( '#alumno-ubicacion' );
  				});

  				var myHeadersResult = new Headers();
				myHeadersResult.append( "Authorization", "Bearer " + token );

				var formdataResult = new FormData();
				formdataResult.append( "user_id", user_id );

				var requestOptionsResult = {
					method: 'POST',
					headers: myHeadersResult,
					body: formdataResult,
					redirect: 'follow'
				};

				fetch( api_host + "/datos-alumno", requestOptionsResult )
				.then( response => response.json())
				.then( result => {
					if ( result.message ) {
						
						jQuery( '#get-error' ).html( '<p class="text-danger">' + result.message + '*</p>' );
						jQuery( '.page-preloader' ).remove();
						jQuery( '.loading-bar' ).remove();
					
					} else {

						$( '#user-data img' ).attr( 'src', result.avatar_url );
						$( '#page-user-name' ).html( result.nombre + ' ' + result.apellido );
						$( '#page-user-role' ).html( result.role );
						$( '#alumno-nombre' ).val( result.nombre );
						$( '#alumno-apellido' ).val( result.apellido );
						$( '#alumno-edad' ).val( result.edad );
						$( '#alumno-telefono' ).val( result.telefono );
						$( '#alumno-email' ).val( result.email );
						$( '#alumno-horario' ).val( result.horario );
						$( '#alumno-descripcion' ).val( result.descripcion );
						$( '#alumno-pocision' ).val( result.pocision );
						$( '#alumno-clase-clave' ).val( result.clase_clave );
						$( '#alumno-saldo-clase' ).val( result.saldo_clase );
						$( '#alumno-vigencia' ).val( result.vigencia );
						$( '#alumno-clave-pago' ).val( result.clave_pago );
						$( '#alumno-metodo-pago' ).val( result.metodo_pago );
						$( '#alumno-descuento' ).val( result.descuento );
						$( '#alumno-asistencia' ).val( result.asistencia );
						$( '#alumno-staff' ).val( result.staff );
						$( '#alumno-ingresos' ).val( result.ingresos );
						$( '#alumno-observaciones' ).val( result.observaciones );
						$( '#alumno-fecha' ).val( result.fecha );
						$( 'select#alumno-ubicacion option[value="' + result.ubicacion + '"]' ).attr( 'selected', 'true' );
						$( '#user-data' ).attr( 'style', 'display: block;text-align: center;' );
		    			$( '.loading-bar' ).remove();
		    			$( '.page-preloader' ).remove();

					}
				})
				.catch( error => {
					jQuery( '#get-error' ).html( '<p class="text-danger">' + error.message + '</p>' );
				});

  			}

		})
  		.catch( error => {
  			
  			$( '#get-error' ).html( '<p class="text-danger">' + error.message + '</p>' );

  		});

	} else {
		$( '#get-error' ).html( '<p class="text-danger">El ID del usuario es requerido</p>' );
	}

	// Update User
	$( '#update-student' ).click(function(){
		event.preventDefault();

		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

		let put_user = user_id;
		let put_nombre = $( '#alumno-nombre' ).val();
		let put_apellido = $( '#alumno-apellido' ).val();
		let put_edad = $( '#alumno-edad' ).val();
		let put_telefono = $( '#alumno-telefono' ).val();
		let put_email = $( '#alumno-email' ).val();
		let put_ubicacion = $( '#alumno-ubicacion option:selected' ).val();
		let put_horario = $( '#alumno-horario' ).val();
		let put_descripcion = $( '#alumno-descripcion' ).val();
		let put_pocision = $( '#alumno-pocision' ).val();
		let put_clase_clave = $( '#alumno-clase-clave' ).val();
		let put_saldo_clase = $( '#alumno-saldo-clase' ).val();
		let put_vigencia = $( '#alumno-vigencia' ).val();
		let put_clave_pago = $( '#alumno-clave-pago' ).val();
		let put_metodo_pago = $( '#alumno-metodo-pago' ).val();
		let put_descuento = $( '#alumno-descuento' ).val();
		let put_asistencia = $( '#alumno-asistencia' ).val();
		let put_staff = $( '#alumno-staff' ).val();
		let put_ingresos = $( '#alumno-ingresos' ).val();
		let put_observaciones = $( '#alumno-observaciones' ).val();

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
		formdataUpdate.append( "horario", put_horario );
		formdataUpdate.append( "descripcion", put_descripcion );
		formdataUpdate.append( "pocision", put_pocision );
		formdataUpdate.append( "clase_clave", put_clase_clave );
		formdataUpdate.append( "saldo_clase", put_saldo_clase );
		formdataUpdate.append( "vigencia", put_vigencia );
		formdataUpdate.append( "clave_pago", put_clave_pago );
		formdataUpdate.append( "metodo_pago", put_metodo_pago );
		formdataUpdate.append( "descuento", put_descuento );
		formdataUpdate.append( "asistencia", put_asistencia );
		formdataUpdate.append( "staff", put_staff );
		formdataUpdate.append( "ingresos", put_ingresos );
		formdataUpdate.append( "observaciones", put_observaciones );

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

				jQuery( '#get-error' ).html( '<p class="text-danger">' + error.message + '</p>' );

			} else {

				$( '#page-user-name' ).html( result.nombre + ' ' + result.apellido );
				$( '#alumno-nombre' ).val( result.nombre );
				$( '#alumno-apellido' ).val( result.apellido );
				$( '#alumno-edad' ).val( result.edad );
				$( '#alumno-telefono' ).val( result.telefono );
				$( '#alumno-email' ).val( result.email );
				$( '#alumno-horario' ).val( result.horario );
				$( '#alumno-descripcion' ).val( result.descripcion );
				$( '#alumno-pocision' ).val( result.pocision );
				$( '#alumno-clase-clave' ).val( result.clase_clave );
				$( '#alumno-saldo-clase' ).val( result.saldo_clase );
				$( '#alumno-vigencia' ).val( result.vigencia );
				$( '#alumno-clave-pago' ).val( result.clave_pago );
				$( '#alumno-metodo-pago' ).val( result.metodo_pago );
				$( '#alumno-descuento' ).val( result.descuento );
				$( '#alumno-asistencia' ).val( result.asistencia );
				$( '#alumno-staff' ).val( result.staff );
				$( '#alumno-ingresos' ).val( result.ingresos );
				$( '#alumno-observaciones' ).val( result.observaciones );
				$( 'select#alumno-ubicacion option[value="' + result.ubicacion + '"]' ).attr( 'selected', 'true' );
		    	$( '.loading-bar' ).remove();

		    	Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Datos guardados con éxito',
					showConfirmButton: false,
					timer: 1500
				});

			}

		})
		.catch( error => {
			jQuery( '#get-error' ).html( '<p class="text-danger">' + error.message + '</p>' );
		});

	});

});