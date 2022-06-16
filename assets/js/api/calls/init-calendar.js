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

	function init_full_calendar(g) {

		$( '<div class="loading-bar loading-bar--active"></div>' ).prependTo( 'body' );

		// Get Current Day Info

		const date = new Date();
		const current_day = date.getDate();
		const current_month = date.getMonth()+1;
		const current_year = date.getFullYear();

		// Get Calendar DIV

		const my_calendar = document.getElementById( "calendar" );

		// Init Full Calendar

		var calendar = new FullCalendar.Calendar( my_calendar, {
			locale: 'es',
			plugins: [ 
            	"bootstrap", 
            	"interaction", 
            	"dayGrid", 
            	"timeGrid"
            ],
            editable: !0,
            droppable: !0,
            selectable: !0,
            defaultView: "dayGridMonth",
            themeSystem: "bootstrap",
            header: { 
            	left: "prev,next today", 
            	center: "title", 
            	right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth" 
            },
            eventClick: function (e) {
            },
            dateClick: function (e) {
            	var current_date = parseInt(current_year + '' + current_month + '' + current_day);
            	var event_day = parseInt(e.dateStr.replace(new RegExp('-', 'g'),""));
            	if ( event_day < current_date ) {
            		Swal.fire({
						icon: 'Error',
						title: 'Error...',
						text: 'No se puede agregar una clase en una fecha vencida',
					});
            	} else {

            		$( '#instructores' ).html( '<option value="0">Seleccionar...</option>' );
            		$( '#ubicaciones' ).html( '<option value="0">Seleccionar...</option>' );

					add_instructor_in_select();

					//Get Click Date
					var dateControl = document.querySelector( 'input[type="date"]' );
					dateControl.value = e.dateStr;

					//Init Modal
					$( '#event-modal' ).modal( 'show' );

            	}
            },
            events: function(info, successCallback, failureCallback) {

            	// Get Events

				var myHeaders = new Headers();
				myHeaders.append( "Authorization", "Bearer " + token );

				var requestOptions = {
				  method: 'GET',
				  headers: myHeaders,
				  redirect: 'follow'
				};

				fetch( api_host +  "/clases", requestOptions )
				.then( response => response.json() )
				.then( result => {

					if ( result.message ) {

						$( '.loading-bar' ).remove();
						$( '#get_error' ).html( '<p class="text-danger">' + result.message + '</p>' );

					} else {
						
						var events = [];

						$(result).each(function () {
							events.push({
	                            title: $(this).attr( 'title' ),
	                            start: $(this).attr( 'start' ),
	                            url: $(this).attr( 'url' ),
	                            color: $(this).attr( 'color' ),
	                        });
						});

						if (successCallback) successCallback(events);

						$( '.loading-bar' ).remove();

					}
				})
				.catch( error => {
					$( '#get_error' ).html( '<p class="text-danger">' + error.message + '</p>' );
				});

            },
            // Traslate
            week: {
		      	dow: 1, // Monday is the first day of the week.
		      	doy: 4, // The week that contains Jan 4th is the first week of the year.
		    },
            buttonText: {
		    	today: 'Hoy',
		    	month: 'Mes',
		    	week: 'Semana',
		    	day: 'Día',
		    	list: 'Agenda',
		    },
		    buttonHints: {
		      prev: '$0 antes',
		      next: '$0 siguiente',
		      today(buttonText) {
		        return (buttonText === 'Día') ? 'Hoy' :
		          ((buttonText === 'Semana') ? 'Esta' : 'Este') + ' ' + buttonText.toLocaleLowerCase()
		      },
		    },
		    viewHint(buttonText) {
		      return 'Vista ' + (buttonText === 'Semana' ? 'de la' : 'del') + ' ' + buttonText.toLocaleLowerCase()
		    },
		    weekText: 'Sm',
		    weekTextLong: 'Semana',
		    allDayText: 'Todo el día',
		    moreLinkText: 'más',
		    moreLinkHint(eventCnt) {
		      return `Mostrar ${eventCnt} eventos más`
		    },
		    noEventsText: 'No hay eventos para mostrar',
		    navLinkHint: 'Ir al $0',
		    closeHint: 'Cerrar',
		    timeHint: 'La hora',
		    eventHint: 'Evento',
        });

        // Render Full Calendar

        calendar.render();

	}

	init_full_calendar();

});