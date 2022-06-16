$(document).ready(function(){
	$( '.logout' ).click(function(){
		event.preventDefault();
		localStorage.removeItem( "token" );
		localStorage.removeItem( "user_display_name" );
		localStorage.removeItem( "user_nicename" );
		localStorage.removeItem( "user_email" );
		localStorage.removeItem( "user_role" );
		localStorage.removeItem( "user_id" );
		localStorage.removeItem( "avatar" );
		localStorage.removeItem( "alumnos" );
		localStorage.removeItem( "alumnos_mes" );
		localStorage.removeItem( "instructores" );
		localStorage.removeItem( "ventas_totales" );
		localStorage.removeItem( "ventas_mes" );
		localStorage.removeItem( "pedidos" );
		localStorage.removeItem( "pedidos_mes" );
		localStorage.removeItem( "analytics" );
		document.cookie = "logged-in=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
		document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
		$(location).attr( 'href', 'https://phpstack-742831-2494985.cloudwaysapps.com/' );
	});
});