$(document).ready(function(){

	let api_host = 'https://barremx.online/wp-json';
	let domain = 'https://phpstack-742831-2494985.cloudwaysapps.com/';

	if (typeof(Storage) == "undefined") {
		alert( 'Lo sentimos, tu navegador no es compatible con esta aplicación, por favor usa un navegador compatible' )
		$(location).attr( 'href', 'https://barremx.online/' );
	}

	function SetCookie( cookieName, cookieValue, nDays ) {
		var today = new Date();
		var expire = new Date();
		if ( nDays == null || nDays == 0 ) {
			nDays = 1;
		}
		expire.setTime(today.getTime() + 3600000*24*nDays);
		document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString()+"; path=/";
	}

	jQuery( '#login' ).click(function(){
		event.preventDefault();

		$( '#login-result' ).html( '' );
		$( '.login-preloader' ).attr( 'style', 'display: inline-block;' );
		$( '#login' ).attr( 'disabled', 'disabled' );

		let username = $( '#username' ).val();
		let password = $( '#userpassword' ).val();

		var formdata = new FormData();
		formdata.append( "username", username );
		formdata.append( "password", password );

		var requestOptions = {
		  method: 'POST',
		  body: formdata,
		  redirect: 'follow'
		};

		fetch( api_host + "/jwt-auth/v1/token", requestOptions)
		.then( response => response.json())
		.then( result => {
			if ( result.message ) {
				$( '#login-result' ).html( result.message );
				$( '.login-preloader' ).attr( 'style', 'display: none;' );
				$( '#login' ).removeAttr( 'disabled' );
			} else {
				if ( result.token ) {
					SetCookie( 'logged-in', true, 1);
				}
				if ( result.user_role ) {
					SetCookie( 'role=' + result.user_role + ';', true, 1);
				}
				localStorage.setItem( "token", result.token );
				localStorage.setItem( "user_display_name", result.user_display_name );
				localStorage.setItem( "user_nicename", result.user_nicename );
				localStorage.setItem( "user_email", result.user_email );
				localStorage.setItem( "user_role", result.user_role );
				localStorage.setItem( "user_id", result.user_id );
				localStorage.setItem( "avatar", result.avatar );
				$( location ).attr( 'href', domain + '?page=inicio' );
			}
		})
		.catch( error => {
			$( '#login-result' ).html( error.message );
		});
		
	});

});