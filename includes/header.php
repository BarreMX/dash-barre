<?php
require_once( 'functions.php' );
if ( isset( $_COOKIE['logged-in'] ) ) {
?>
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <title>BarreMX | Dashboard </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
        <meta content="Themesdesign" name="author" />
        <link rel="shortcut icon" href="<?php echo get_site_url(); ?>/assets/images/Logotipo-BarreMx-1.png">
        <link href="<?php echo get_site_url(); ?>/assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
        <link href="<?php echo get_site_url(); ?>/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="<?php echo get_site_url(); ?>/assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
        <link href="<?php echo get_site_url(); ?>/assets/css/style.css" id="app-style" rel="stylesheet" type="text/css" />
        <?php if ( isset_page() ) { ?>
            <?php if ( isset_page() == 'calendario' ) { ?>
                <link rel="stylesheet" href="<?php echo get_site_url(); ?>/assets/libs/@fullcalendar/core/main.min.css" type="text/css">
                <link rel="stylesheet" href="<?php echo get_site_url(); ?>/assets/libs/@fullcalendar/daygrid/main.min.css" type="text/css">
                <link rel="stylesheet" href="<?php echo get_site_url(); ?>/assets/libs/@fullcalendar/bootstrap/main.min.css" type="text/css">
                <link rel="stylesheet" href="<?php echo get_site_url(); ?>/assets/libs/@fullcalendar/timegrid/main.min.css" type="text/css">
                <link href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
            <?php } else if ( isset_page() == 'editar-alumno' || isset_page() == 'reservaciones' || isset_page() == 'alumnos' || isset_page() == 'pedidos' || isset_page() == 'ubicaciones' || isset_page() == 'usuarios' || isset_page() == 'instructores' || isset_page() == 'actualizar-clase' ) { ?>
                <link href="//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
            <?php } ?>
        <?php } ?>


    </head>
    <body data-sidebar="dark">
        <div id="layout-wrapper">

            <?php require_once( 'head.php' ); ?>

            <div class="main-content">

<?php } else { ?>

<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <title>BarreMX | Dashboard </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
    <meta content="Themesdesign" name="author" />
    <link rel="shortcut icon" href="<?php echo get_site_url(); ?>/assets/images/Logotipo-BarreMx-1.png">
    <link href="<?php echo get_site_url(); ?>/assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <link href="<?php echo get_site_url(); ?>/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="<?php echo get_site_url(); ?>/assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <link href="<?php echo get_site_url(); ?>/assets/css/style.css" id="app-style" rel="stylesheet" type="text/css" />
</head>
<body class="bg-pattern">

<?php } ?>