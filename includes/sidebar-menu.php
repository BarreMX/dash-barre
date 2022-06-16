<div class="vertical-menu">
    <div data-simplebar class="h-100">
        <div id="sidebar-menu">
            <ul class="metismenu list-unstyled" id="side-menu">
                
                <?php if ( get_current_role() !== false ) { ?>

                        <!--== Inicio ==-->
                        <li class="menu-title">Menu</li>

                        <li>
                            <a href="<?php echo get_site_url(); ?>?page=inicio" class="waves-effect<?php echo is_page_active( 'inicio' ); ?>">
                                <i class="mdi mdi-home-variant-outline"></i>
                                <span>Inicio</span>
                            </a>
                        </li>

                        <?php if ( get_current_role() == 'recepcionista' || get_current_role() == 'gerente' || get_current_role() == 'administrator' || get_current_role() == 'contador' ) { ?>
                            <li>
                                <a href="<?php echo get_site_url(); ?>?page=pedidos" id="page_pedidos" class="waves-effect<?php echo is_page_active( 'pedidos' ); ?>">
                                    <i class="mdi mdi-chart-bar"></i>
                                    <span>Compras</span>
                                </a>
                            </li>
                        <?php } ?>
                        
                        <li>
                            <a href="<?php echo get_site_url(); ?>?page=calendario" class="waves-effect<?php echo is_page_active( 'calendario' ); ?><?php echo is_page_active( 'actualizar-clase' ); ?>">
                                <i class="mdi mdi-calendar"></i>
                                <span>Calendario</span>
                            </a>
                        </li>

                        <?php if ( get_current_role() == 'recepcionista' || get_current_role() == 'contador' || get_current_role() == 'gerente' || get_current_role() == 'administrator' || get_current_role() == 'instructor' ) { ?>
                        <li>
                            <a href="<?php echo get_site_url(); ?>?page=reservaciones" class="waves-effect<?php echo is_page_active( 'reservaciones' ); ?>">
                                <i class="mdi mdi-clipboard-list-outline"></i>
                                <span>Reservaciones</span>
                            </a>
                        </li>
                        <?php } ?>

                        <?php if ( get_current_role() == 'gerente' || get_current_role() == 'administrator' || get_current_role() == 'contador' ) { ?>
                        <li>
                            <a href="<?php echo get_site_url(); ?>?page=instructores" class="waves-effect<?php echo is_page_active( 'instructores' ); ?><?php echo is_page_active( 'editar-instructor' ); ?>">
                                <i class="mdi mdi-account-network"></i>
                                <span>Instructores</span>
                            </a>
                        </li>
                        <?php } ?>

                        <?php if ( get_current_role() == 'recepcionista' || get_current_role() == 'contador' || get_current_role() == 'gerente' || get_current_role() == 'administrator' ) { ?>
                        <li>
                            <a href="<?php echo get_site_url(); ?>?page=alumnos" id="page_alumnos" class="waves-effect<?php echo is_page_active( 'alumnos' ); ?><?php echo is_page_active( 'editar-alumno' ); ?>">
                                <i class="mdi mdi-account-group"></i>
                                <span>Alumnos</span>
                            </a>
                        </li>
                        <?php } ?>

                        <?php if ( get_current_role() == 'gerente' || get_current_role() == 'administrator' ) { ?>
                        <li>
                            <a href="<?php echo get_site_url(); ?>?page=usuarios" class="waves-effect<?php echo is_page_active( 'usuarios' ); ?>">
                                <i class="mdi mdi-headphones"></i>
                                <span>Usuarios Administrativos</span>
                            </a>
                        </li>
                        <?php } ?>

                        <?php if ( get_current_role() !== 'contador' ) { ?>
                              <?php if ( get_current_role() !== 'instructor' ) { ?>
                                <?php if ( get_current_role() !== 'bmxeditor' ) { ?>
                                <li>
                                    <a href="<?php echo get_site_url(); ?>?page=calificaciones" class="waves-effect<?php echo is_page_active( 'calificaciones' ); ?>">
                                        <i class="mdi mdi-comment-processing-outline"></i>
                                        <span>Calificaciones</span>
                                    </a>
                                </li>
                                 <?php } ?>
                            <?php } ?>
                         <?php } ?>

                        <?php if ( get_current_role() !== 'contador' ) { ?>
                            <?php if ( get_current_role() !== 'bmxeditor' ) { ?>
                            <li>
                                <a href="<?php echo get_site_url(); ?>?page=historial" class="waves-effect<?php echo is_page_active( 'historial' ); ?>">
                                    <i class="mdi mdi-history"></i>
                                    <span>Historial de Clases</span>
                                </a>
                            </li>
                            <?php } ?>
                        <?php } ?>

                        <?php if ( get_current_role() !== 'contador' ) { ?>
                            <?php if ( get_current_role() !== 'bmxeditor' ) { ?>
                            <li>
                                <a href="<?php echo get_site_url(); ?>?page=clases-canceladas" class="waves-effect<?php echo is_page_active( 'clases-canceladas' ); ?>">
                                    <i class="mdi mdi-table-cancel"></i>
                                    <span>Clases Canceladas</span>
                                </a>
                            </li>
                            <?php } ?>
                        <?php } ?>

                        <?php if ( get_current_role() == 'gerente' || get_current_role() == 'administrator' ) { ?>
                        <li>
                            <a href="<?php echo get_site_url(); ?>?page=ubicaciones" class="waves-effect<?php echo is_page_active( 'ubicaciones' ); ?>">
                                <i class="mdi mdi-map-marker"></i>
                                <span>Ubicaciónes</span>
                            </a>
                        </li>
                        <?php } ?>

                        <!--<li>
                            <a href="<?php //echo get_site_url(); ?>?page=email-log" class="waves-effect<?php //echo is_page_active( 'email-log' ); ?>">
                                <i class="mdi mdi-email"></i>
                                <span>Email Log</span>
                            </a>
                        </li>-->

                    <li>
                        <a href="<?php echo get_site_url(); ?>?page=mi-cuenta" class="waves-effect<?php echo is_page_active( 'mi-cuenta' ); ?>">
                            <i class="mdi mdi-account"></i>
                            <span>Mi Cuenta</span>
                        </a>
                    </li>

                    <li>
                        <a href="#+" class="waves-effect logout">
                            <i class="mdi mdi-logout"></i>
                            <span>Cerrar Sesión</span>
                        </a>
                    </li>

                <?php } ?>

            </ul>
        </div>
    </div>
</div>