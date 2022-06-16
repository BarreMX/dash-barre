$(document).ready(function(){

	// Asign Avatar
	if ( avatar !== '' ) {
		$( 'img.header-profile-user' ).attr( 'src', avatar );
	}

	// Asign Name
	if ( user_display_name !== '' ) {
		$( 'span.current-username' ).html( user_display_name );
	}

});