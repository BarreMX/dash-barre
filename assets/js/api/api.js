// $_GET Params
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Global Vars
let token = localStorage.getItem( "token" );
let user_display_name = localStorage.getItem( "user_display_name" );
let user_nicename = localStorage.getItem( "user_nicename" );
let user_email = localStorage.getItem( "user_email" );
let user_role = localStorage.getItem( "user_role" );
let user_id = localStorage.getItem( "user_id" );
let avatar = localStorage.getItem( "avatar" );
let api_host = 'https://barremx.online/wp-json/api';
let domain = 'https://phpstack-742831-2494985.cloudwaysapps.com/';
let page = getUrlParameter( 'page' );

// Functions
$.getScript( domain + 'assets/js/api/calls/general.js' );

if ( page == 'inicio' ) {
    $.getScript( domain + 'assets/js/api/calls/home.js' );
}

if ( page == 'editar-alumno' ) {
    $.getScript( domain + 'assets/js/api/calls/update-student.js' );
}

if ( page == 'pedidos' ) {
    $.getScript( domain + 'assets/js/api/calls/pedidos.js' );
}

if ( page == 'calendario' ) {
    $.getScript( domain + 'assets/js/api/calls/calendar.js' );
}

if ( page == 'alumnos' ) {
    $.getScript( domain + 'assets/js/api/calls/students.js' );
}

if ( page == 'ubicaciones' ) {
    $.getScript( domain + 'assets/js/api/calls/ubicaciones.js' );
}

if ( page == 'usuarios' ) {
    $.getScript( domain + 'assets/js/api/calls/usuarios.js' );
}

if ( page == 'instructores' ) {
    $.getScript( domain + 'assets/js/api/calls/instructores.js' );
}

if ( page == 'calificaciones' ) {
    $.getScript( domain + 'assets/js/api/calls/calificaciones.js' );
}

if ( page == 'reservaciones' ) {
    $.getScript( domain + 'assets/js/api/calls/reservaciones.js' );
}

if ( page == 'historial' ) {
    $.getScript( domain + 'assets/js/api/calls/historial.js' );
}

if ( page == 'clases-canceladas' ) {
    $.getScript( domain + 'assets/js/api/calls/clases-canceladas.js' );
}

if ( page == 'actualizar-clase' ) {
    $.getScript( domain + 'assets/js/api/calls/actualizar-clase.js' );
}

if ( page == 'tapetes' ) {
    $.getScript( domain + 'assets/js/api/calls/tapetes.js' );
}