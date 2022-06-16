$(document).ready(function(){

	// Add Ubication
	function add_ubication_in_select() {
		var myHeaders = new Headers();
		myHeaders.append( "Authorization", "Bearer " + token );
		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};
		fetch( api_host +  "/ubicaciones", requestOptions )
  		.then( response => response.json())
  		.then( result => {
  			if ( result.message ) {
  				$( '#get_calendar_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
  				$( '.loading-bar' ).remove();
  			} else {
  				const ubicaciones = result;
  				ubicaciones.forEach( element => {
  					jQuery( '<option value="' + element.id + '">' + element.titulo + '</option>' ).appendTo( 'select#ubicaciones' );
  				});
  				$( '.loading-bar' ).remove();
  			}
  		})
  		.catch( error => {
  			$( '#get_calendar_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
  		});
	}

	// Add Instructor
	function add_instructor_in_select() {
		var myHeaders = new Headers();
		myHeaders.append( "Authorization", "Bearer " + token );
		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};
		fetch( api_host +  "/instructores", requestOptions )
  		.then( response => response.json())
  		.then( result => {
  			if ( result.message ) {
  				$( '#get_calendar_error' ).html( '<p class="text-danger">' + result.message + '</p>' );
  			} else {
  				const instructores = result;
  				instructores.forEach( element => {
  					jQuery( '<option value="' + element.id + '">' + element.nombre + '</option>' ).appendTo( 'select#instructores' );
  				});
  				add_ubication_in_select()
  			}
  		})
  		.catch( error => {
  			jQuery( '#get_calendar_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
  		});
	}

	// Show Values
	$( "select#repeat-class" ).change(function(){
		let repeat_class = $( 'select#repeat-class option:selected' ).val();
		if ( repeat_class == 'true' ) {
			$( '.hide-this' ).attr( 'style', 'display: block;' );
		} else {
			$( '.hide-this' ).attr( 'style', 'display: none;' );
		}
	});

	// Init Form
	$( "#btn-new-class" ).one( "click", function() {
		event.preventDefault();
		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );
		add_instructor_in_select();
		const date = new Date();
		const current_day = date.getDate();
		const current_month = date.getMonth()+1;
		const current_year = date.getFullYear();
		const select_value = current_year + '-' + current_month + '-' + current_day;
		var dateControl = document.querySelector('input[type="date"]');
		dateControl.value = select_value;
	});

	// Guardar Clase
	$( '#btn-save-class' ).click(function(){
		event.preventDefault();

		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

		let class_title = $( '#class-title' ).val();
		let instructor_class = $( '#instructores option:selected' ).val();
		let ubicacion_class = $( '#ubicaciones option:selected' ).val();
		let class_hour = $( '#class-time' ).val();
		let class_date = $( '#class-date' ).val();
		let repeat_class = $( '#repeat-class option:selected' ).val();
		let repeat_until = $( '#repeat-until' ).val();

		if (document.getElementById('monday').checked) {
			var repeat_monday = 'monday';
		} else {
			var repeat_monday = 'false';
		}

		if (document.getElementById('tuesday').checked) {
			var repeat_tuesday = 'tuesday';
		} else {
			var repeat_tuesday = 'false';
		}

		if (document.getElementById('wednesday').checked) {
			var repeat_wednesday = 'wednesday';
		} else {
			var repeat_wednesday = 'false';
		}

		if (document.getElementById('thursday').checked) {
			var repeat_thursday = 'thursday';
		} else {
			var repeat_thursday = 'false';
		}

		if (document.getElementById('friday').checked) {
			var repeat_friday = 'friday';
		} else {
			var repeat_friday = 'false';
		}

		if (document.getElementById('saturday').checked) {
			var repeat_saturday = 'saturday';
		} else {
			var repeat_saturday = 'false';
		}

		if (document.getElementById('sunday').checked) {
			var repeat_sunday = 'sunday';
		} else {
			var repeat_sunday = 'false';
		}

		// Sending Request
		var myHeaders = new Headers();
		myHeaders.append( "Authorization", "Bearer " + token );

		var formdata = new FormData();
		formdata.append( "title", class_title );
		formdata.append( "instructor", instructor_class );
		formdata.append( "ubicacion", ubicacion_class );
		formdata.append( "hour", class_hour );
		formdata.append( "date", class_date );
		formdata.append( "repeat_class", repeat_class );
		formdata.append( "repeat_until", repeat_until );
		formdata.append( "repeat_monday", repeat_monday );
		formdata.append( "repeat_tuesday", repeat_tuesday );
		formdata.append( "repeat_wednesday", repeat_wednesday );
		formdata.append( "repeat_thursday", repeat_thursday );
		formdata.append( "repeat_friday", repeat_friday );
		formdata.append( "repeat_saturday", repeat_saturday );
		formdata.append( "repeat_sunday", repeat_sunday );

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: formdata,
			redirect: 'follow'
		};

		fetch( api_host +  "/agregar-clase", requestOptions )
		.then( response => response.json() )
		.then( result => {

			if ( result.message ) {

				$( '.loading-bar' ).remove();
				jQuery( '#get_calendar_error' ).html( '<p class="text-danger">' + result.message + '</p>' );

			} else {

				$( '.loading-bar' ).remove();
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Clase guardada con exito',
					showConfirmButton: false,
					timer: 1500,
					willClose: () => {
    					location.reload();	
  					}
				});

			}

		})
		.catch( error => {
			
			$( '#get_calendar_error' ).html( '<p class="text-danger">' + error.message + '</p>' );

		});

	});

});