<div class="page-content">
    <div class="container-fluid">

        <!--== Breadcumb ==-->
        <?php echo get_breadcumbs_page(); ?>

            <p id="get_error"></p>

            <?php if ( get_current_role() !== 'contador' ) { ?>
            <div class="row">
                <div class="col-12" style="padding-bottom: 20px;">
                    <button class="btn btn-primary nuevo-alumno" type="submit" data-bs-toggle="modal" data-bs-target="#nuevo-alumno">Agregar Alumno</button>
                </div>
            </div>
            <?php } ?>

            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">

                            <div class="page-preloader">
                                <div class="lds-dual-ring"></div>
                            </div>

                            <!--== Table ==-->
                            <table id="datatable-buttons" class="table table-striped table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">

                            </table>

                        </div>
                    </div>
                </div>
            </div>

            <!--== Crear Alumno ==-->
            <div class="modal fade" id="nuevo-alumno" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        
                        <!--== Modal Header ==-->
                        <div class="modal-header py-3 px-4">
                            <h5 class="modal-title" id="modal-title">Nuevo Alumno</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <!--== Modal Body ==-->
                        <div class="modal-body p-4">
                            <form class="needs-validation" name="nueva-ubicacion" novalidate>
                                <div class="row">

                                    <!--== Nombre ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Nombre *</label>
                                            <input class="form-control" placeholder="Nombre" type="text" name="title" id="instructor-nombre" required value="">
                                        </div>
                                    </div>

                                    <!--== Apellido ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Apellido *</label>
                                            <input class="form-control" placeholder="Apellido" type="text" name="title" id="instructor-apellido" required value="">
                                        </div>
                                    </div>

                                    <!--== Correo Electrónico ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Correo Electrónico *</label>
                                            <input class="form-control" placeholder="Correo Electrónico" type="email" name="title" id="instructor-email" required value="">
                                        </div>
                                    </div>

                                    <!--== Contraseña ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Contraseña *</label>
                                            <input class="form-control" placeholder="Contraseña" type="password" name="title" id="instructor-password" required value="">
                                        </div>
                                    </div>

                                    <!--== Tipo ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Tipo *</label>
                                            <select class="form-select" id="tipo-list">
                                                <option value="Online">Online</option>
                                                <option value="Presencial">Presencial</option>
                                                <option value="Pre-online">Pre-online</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!--== Registrado Por ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Registrado por</label>
                                            <input class="form-control" placeholder="Recepcionista" type="text" name="title" id="register-by" required value="">
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="mb-3" id="get_eror">
                                        </div>
                                    </div>

                                    <div class="row mt-12">
                                        <div class="col-12 text-end">
                                            <button type="button" class="btn btn-light me-1" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="submit" class="btn btn-success" id="btn-new-student">Guardar</button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

    </div>
</div>