<div class="page-content">
    <div class="container-fluid">

        <p id="get_error"></p>

        <!--== Breadcumb ==-->
        <?php echo get_breadcumbs_page(); ?>

            <div class="row">
                <div class="col-12" style="padding-bottom: 20px;">
                    <button class="btn btn-primary" type="submit" data-bs-toggle="modal" data-bs-target="#crear-ubicacion">Agregar Ubicación</button>
                </div>
            </div>

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

                            </table>

                        </div>
                    </div>
                </div>
            </div>

            <!--== Crear Ubicación ==-->
            <div class="modal fade" id="crear-ubicacion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        
                        <!--== Modal Header ==-->
                        <div class="modal-header py-3 px-4">
                            <h5 class="modal-title" id="modal-title">Nueva Ubicación</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <!--== Modal Body ==-->
                        <div class="modal-body p-4">
                            <form class="needs-validation" name="nueva-ubicacion" novalidate>
                                <div class="row">

                                    <!--== Titulo ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Nombre de la Ubicación *</label>
                                            <input class="form-control" placeholder="Nombre" type="text" name="title" id="ubicacion-titulo" required value="">
                                        </div>
                                    </div>

                                    <!--== Encargado ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Encargado *</label>
                                            <input class="form-control" placeholder="Encargado" type="text" name="title" id="ubicacion-encargado" required value="">
                                        </div>
                                    </div>

                                    <!--== Dirección ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Dirección *</label>
                                            <input class="form-control" placeholder="Dirección" type="text" name="title" id="ubicacion-direccion" required value="">
                                        </div>
                                    </div>

                                    <!--== Color ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Color *</label>
                                            <input class="form-control" placeholder="Color" type="color" name="title" id="ubicacion-color" required value="">
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="mb-3" id="result"></div>
                                    </div>

                                    <div class="row mt-12">
                                        <div class="col-12 text-end">
                                            <button type="button" class="btn btn-light me-1" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="submit" class="btn btn-success" id="btn-save-ubication">Guardar</button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <!--== Actualizar Ubicación ==-->
            <div class="modal fade" id="update-ubicacion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <!--== Modal Header ==-->
                        <div class="modal-header py-3 px-4">
                            <h5 class="modal-title" id="modal-title">Actualizar Ubicación</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <!--== Modal Body ==-->
                        <div class="modal-body p-4">
                            <form class="needs-validation" name="nueva-ubicacion" novalidate>
                                <div class="row">

                                    <!--== Titulo ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Nombre de la Ubicación *</label>
                                            <input class="form-control" placeholder="Nombre" type="text" name="title" id="update-titulo" required value="">
                                        </div>
                                    </div>

                                    <!--== Encargado ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Encargado *</label>
                                            <input class="form-control" placeholder="Encargado" type="text" name="title" id="update-encargado" required value="">
                                        </div>
                                    </div>

                                    <!--== Dirección ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Dirección *</label>
                                            <input class="form-control" placeholder="Dirección" type="text" name="title" id="update-direccion" required value="">
                                        </div>
                                    </div>

                                    <!--== Color ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Color *</label>
                                            <input class="form-control" placeholder="Color" type="color" name="title" id="update-color" required value="">
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="mb-3" id="update-error"></div>
                                    </div>

                                    <div class="row mt-12">
                                        <div class="col-12 text-end">
                                            <button type="button" class="btn btn-light me-1" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="submit" class="btn btn-success" id="btn-update-ubicacion">Actualizar</button>
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