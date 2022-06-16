<?php if ( isset( $_COOKIE['logged-in'] ) ) { ?>        
                <!--== Footer ==-->
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6">
                                <script>document.write(new Date().getFullYear())</script> © BarreMX.
                            </div>
                            <div class="col-sm-6">
                                <div class="text-sm-end d-none d-sm-block">
                                    Created by <a href="<?php echo get_author_uri(); ?>" target="_blank">Jefferson Bol</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>

            <?php require_once( 'sidebar-menu.php' ); ?>

        </div>
        <div class="rightbar-overlay"></div>
        <script src="<?php echo get_site_url(); ?>/assets/libs/jquery/jquery.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/simplebar/simplebar.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/node-waves/waves.min.js"></script>
        <?php if ( !isset_page() ) { ?>
        <!--== Charts ==-->
        <!--<script src="<?php //echo get_site_url(); ?>/assets/libs/apexcharts/apexcharts.min.js"></script>
        <script src="<?php //echo get_site_url(); ?>/assets/js/pages/dashboard.init.js"></script>-->
        <script src="<?php echo get_site_url(); ?>/assets/libs/jquery-knob/jquery.knob.min.js"></script> 
        <script src="<?php echo get_site_url(); ?>/assets/js/pages/jquery-knob.init.js"></script>

        <?php } ?>
        <?php if ( isset_page() ) { ?>
        <?php if ( isset_page() == 'instructores' || isset_page() == 'ubicaciones' || isset_page() == 'pedidos' || isset_page() == 'alumnos' || isset_page() == 'usuarios' || isset_page() == 'reservaciones' || isset_page() == 'inicio' || isset_page() == 'calificaciones' || isset_page() == 'historial' || isset_page() == 'clases-canceladas' ) { ?>
        <!--== Data Tables==-->
        <script src="<?php echo get_site_url(); ?>/assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/jszip/jszip.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/pdfmake/build/pdfmake.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/pdfmake/build/vfs_fonts.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/js/pages/datatables.init.js"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
        <?php } else if ( isset_page() == 'calendario' ) { ?>
        <!-- Full Calendar -->
        <script src="<?php echo get_site_url(); ?>/assets/libs/moment/min/moment.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/jquery-ui-dist/jquery-ui.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/@fullcalendar/core/main.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/@fullcalendar/bootstrap/main.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/@fullcalendar/daygrid/main.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/@fullcalendar/timegrid/main.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/@fullcalendar/interaction/main.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
        <?php } else if ( isset_page() == 'editar-alumno' || isset_page() == 'actualizar-clase' ) { ?>
        <script src="//cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
        <?php } ?>
        <?php } ?>

        <?php if ( isset_page() == 'tapetes' ) { ?>
            <script src="https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js"></script>
        <?php } ?>
        
        <script src="<?php echo get_site_url(); ?>/assets/js/app.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/js/api/api.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/js/api/logout.js"></script>

    </body>
</html>

<?php } else { ?>
        
        <script src="<?php echo get_site_url(); ?>/assets/libs/jquery/jquery.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/simplebar/simplebar.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/libs/node-waves/waves.min.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/js/app.js"></script>
        <script src="<?php echo get_site_url(); ?>/assets/js/api/login.js"></script>
    
    </body>
</html>

<?php } ?>