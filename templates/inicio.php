<div class="page-content">
    <div class="container-fluid">

        <!--== Breadcumb ==-->
        <?php echo get_breadcumbs_page(); ?>

        <div class="row">

            <div id="get_error"></div>

            <!--== Total Alumnos ==-->

            <div class="col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex text-muted">
                            <div class="flex-shrink-0  me-3 align-self-center">
                                <div class="avatar-sm">
                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                                        <i class="ri-team-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <p class="mb-1">Total de Alumnos</p>
                                <h5 class="mb-3" id="get_1">0</h5>
                                <p class="text-truncate mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--== Alumnos del mes ==-->

            <div class="col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex text-muted">
                            <div class="flex-shrink-0  me-3 align-self-center">
                                <div class="avatar-sm">
                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                                        <i class="ri-user-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <p class="mb-1">Alumnos este mes</p>
                                <h5 class="mb-3" id="get_2">0</h5>
                                <p class="text-truncate mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--== Total Instructores ==-->

            <div class="col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex text-muted">
                            <div class="flex-shrink-0  me-3 align-self-center">
                                <div class="avatar-sm">
                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                                        <i class="ri-user-2-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <p class="mb-1">Total de Instructores</p>
                                <h5 class="mb-3" id="get_3">0</h5>
                                <p class="text-truncate mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--== Ventas Totales ==-->

            <div class="col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex text-muted">
                            <div class="flex-shrink-0  me-3 align-self-center">
                                <div class="avatar-sm">
                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                                        <i class="ri-line-chart-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <p class="mb-1">Total de Ventas</p>
                                <h5 class="mb-3" id="get_4">0</h5>
                                <p class="text-truncate mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--== Total de Ventas de Este Mes ==-->

            <div class="col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex text-muted">
                            <div class="flex-shrink-0  me-3 align-self-center">
                                <div class="avatar-sm">
                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                                        <i class="ri-bar-chart-box-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <p class="mb-1">Total de Ventas de Este Mes</p>
                                <h5 class="mb-3" id="get_5">0</h5>
                                <p class="text-truncate mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--== Total de Pedidos ==-->

            <div class="col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex text-muted">
                            <div class="flex-shrink-0  me-3 align-self-center">
                                <div class="avatar-sm">
                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                                        <i class="ri-shopping-cart-2-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <p class="mb-1">Total de Pedidos</p>
                                <h5 class="mb-3" id="get_6">0</h5>
                                <p class="text-truncate mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--== Total de Pedidos de Este Mes ==-->

            <div class="col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex text-muted">
                            <div class="flex-shrink-0  me-3 align-self-center">
                                <div class="avatar-sm">
                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                                        <i class="ri-shopping-basket-2-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-grow-1 overflow-hidden">
                                <p class="mb-1">Total de Pedidos de Este Mes</p>
                                <h5 class="mb-3" id="get_7">0</h5>
                                <p class="text-truncate mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!--== Ultimos Pedidos ==-->

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                            
                        <h4 class="table-responsive card-title mb-4" style="display: none;">Ultimos Alumnos Registrados | <a href="#" class="todos-los-pedidos">Ver Todos</a></h4>

                        <!--== Table ==-->
                        <div class="table-responsive" style="display: none;">
                            <table class="table table-centered table-nowrap mb-0">

                                <!--== Table Head ==-->
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Correo</th>
                                        <th scope="col">Ubicación</th>
                                        <th scope="col">Horario</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>

                                <!--== Table Body ==-->
                                <tbody></tbody>

                            </table>
                        </div>

                        <div class="page-preloader">
                            <div class="lds-dual-ring"></div>
                        </div>

                    </div>
                 </div>
            </div>
        </div>

    </div>
</div>