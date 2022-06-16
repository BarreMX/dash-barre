<div class="page-content">
    <div class="container-fluid">

         <p id="get_error"></p>

        <!--== Breadcumb ==-->
        <?php echo get_breadcumbs_page(); ?>

            <div class="row">
                <div class="col-12" style="padding-bottom: 20px;">
                    <button class="btn btn-primary nuevo-usuario" type="submit" data-bs-toggle="modal" data-bs-target="#nueva-recepcionista">Agregar Usuario</button>
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

                        </div>
                    </div>
                </div>
            </div>

            <!--== Crear Usuario ==-->
            <div class="modal fade" id="nueva-recepcionista" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        
                        <!--== Modal Header ==-->
                        <div class="modal-header py-3 px-4">
                            <h5 class="modal-title" id="modal-title">Nuevo Usuario</h5>
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
                                            <input class="form-control" placeholder="Nombre" type="text" name="title" id="user-nombre" required value="">
                                        </div>
                                    </div>

                                    <!--== Apellido ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Apellido *</label>
                                            <input class="form-control" placeholder="Apellido" type="text" name="title" id="user-apellido" required value="">
                                        </div>
                                    </div>

                                    <!--== Ubicación ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Ubicación *</label>
                                            <select class="form-select" id="ubicaciones">
                                                <option value="">Select...</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!--== Correo Electrónico ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Correo Electrónico *</label>
                                            <input class="form-control" placeholder="Correo Electrónico" type="email" name="title" id="user-email" required value="">
                                        </div>
                                    </div>

                                    <!--== Rol ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Seleccionar Rol *</label>
                                            <select class="form-select" id="user-rol">
                                                <option value="0">Seleccionar...</option>
                                                <option value="administrador">Administrador</option>
                                                <option value="gerente">Gerente</option>
                                                <option value="recepcionista">Recepcionista</option>
                                                <option value="contador">Contador</option>
                                                <option value="bmxeditor">Editor Barre</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!--== Contraseña ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Contraseña *</label>
                                            <input class="form-control" placeholder="Contraseña" type="password" name="title" id="user-password" required value="">
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="mb-3" id="get_new_error">
                                        </div>
                                    </div>

                                    <div class="row mt-12">
                                        <div class="col-12 text-end">
                                            <button type="button" class="btn btn-light me-1" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="submit" class="btn btn-success" id="btn-new-user">Guardar</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <!--== Actualizar Usuario ==-->
            <div class="modal fade" id="update-user" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <!--== Modal Header ==-->
                        <div class="modal-header py-3 px-4">
                            <h5 class="modal-title" id="modal-title">Actualizar Usuario</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <!--== Modal Body ==-->
                        <div class="modal-body p-4">
                            <form class="needs-validation" name="nueva-ubicacion" novalidate>
                                <div class="row">

                                    <div class="col-12">
                                        <div class="mb-3" id="get_instructor_error">
                                        </div>
                                    </div>

                                    <!--== Nombre ==-->
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label class="form-label">Nombre *</label>
                                            <input class="form-control" placeholder="Nombre" type="text" name="title" id="alumno-nombre" value="">
                                        </div>
                                    </div>

                                    <!--== Apellido ==-->
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label class="form-label">Apellido *</label>
                                            <input class="form-control" placeholder="Apellido" type="text" name="title" id="alumno-apellido" value="">
                                        </div>
                                    </div>

                                    <!--== Edad ==-->
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label class="form-label">Edad</label>
                                            <input class="form-control" placeholder="Edad" type="text" name="title" id="alumno-edad" value="">
                                        </div>
                                    </div>

                                    <!--== Telefono ==-->
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label class="form-label">Telefono</label>
                                            <input class="form-control" placeholder="Telefono" type="text" name="title" id="alumno-telefono" value="">
                                        </div>
                                    </div>

                                    <!--== Emal ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Email *</label>
                                            <input class="form-control" placeholder="Email" type="email" name="title" id="alumno-email" value="">
                                        </div>
                                    </div>

                                    <!--== Ubicación ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Ubicación *</label>
                                            <select class="form-select" id="alumno-ubicacion">
                                                <option value="0">Select...</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!--== ID ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <input class="form-control" placeholder="Email" type="hidden" name="title" id="alumno-id" value="">
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="mb-3" id="update_user_error">
                                        </div>
                                    </div>

                                    <div class="row mt-12">
                                        <div class="col-12 text-end">
                                            <button type="button" class="btn btn-light me-1" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="submit" class="btn btn-success" id="btn-update-user">Guardar</button>
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