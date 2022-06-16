<div class="page-content">
    <div class="container-fluid">

        <!--== Breadcumb ==-->
        <?php echo get_breadcumbs_page(); ?>

        <div id="get-error"></div>

            <?php if ( get_current_role() !== 'contador' ) { ?>
            <div class="row">
                <div class="col-12" style="padding-bottom: 20px;">
                    <button class="btn btn-primary nuevo-pedido" type="submit" data-bs-toggle="modal" data-bs-target="#nuevo-pedido">Agregar Producto</button>
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

                                <p id="get_eror"></p>

                            </table>

                        </div>
                    </div>
                </div>
            </div>

            <!--== Crear Pedido ==-->
            <div class="modal fade" id="nuevo-pedido" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        
                        <!--== Modal Header ==-->
                        <div class="modal-header py-3 px-4">
                            <h5 class="modal-title" id="modal-title">Nuevo Pedido</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <!--== Modal Body ==-->
                        <div class="modal-body p-4">
                            <form class="needs-validation" name="nueva-ubicacion" novalidate>
                                <div class="row">

                                    <!--== Alumno ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Alumno *</label>
                                            <select class="form-select" id="student-list">
                                                <option value="0">Seleccionar...</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!--== Alumno ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Producto *</label>
                                            <select class="form-select" id="product-list">
                                                <option value="0">Seleccionar...</option>
                                            </select>
                                        </div>
                                    </div>

                                    <!--== Medio de Compra ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Medio de Compra *</label>
                                            <input class="form-control" placeholder="Medio de Compra" type="text" name="title" id="medio-compra" required value="Presencial - Dashboard">
                                        </div>
                                    </div>

                                    <!--== Tipo de Pago ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Tipo de Pago *</label>
                                            <input class="form-control" placeholder="Tipo de Pago" type="text" name="title" id="tipo-pago" required value="Efectivo - Pago Presencial">
                                        </div>
                                    </div>

                                    <!--== Estado ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Estado *</label>
                                            <select class="form-select" id="status-list">
                                                <option value="0">Seleccionar...</option>
                                                <option value="completed">Completado</option>
                                                <option value="pending">Pediente de Pago</option>
                                                <option value="processing">Procesando</option>
                                                <option value="on-hold">En Espera</option>
                                                <option value="canceled">Cancelado</option>
                                                <option value="failed">Fallido</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="mb-3" id="get_buy_error"></div>
                                    </div>

                                    <div class="row mt-12">
                                        <div class="col-12 text-end">
                                            <button type="button" class="btn btn-light me-1" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="submit" class="btn btn-success" id="btn-new-order">Crear Pedido</button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <!--== Update Pedido==-->
            <div class="modal fade" id="update-pedido" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                        <div class="modal-header py-3 px-4">
                            <h5 class="modal-title" id="modal-title">Actualizar Pedido</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body p-4">
                            <form class="needs-validation" name="nueva-ubicacion" novalidate>
                                <div class="row">

                                    <!--== Estado ==-->
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <label class="form-label">Estado</label>
                                            <select class="form-select" id="update-status-list">
                                                <option value="0">Seleccionar...</option>
                                                <option value="completed">Completado</option>
                                                <option value="pending">Pediente de Pago</option>
                                                <option value="processing">Procesando</option>
                                                <option value="on-hold">En Espera</option>
                                                <option value="canceled">Cancelado</option>
                                                <option value="failed">Fallido</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="mb-3" id="get_update_error"></div>
                                    </div>

                                    <div class="row mt-12">
                                        <div class="col-12 text-end">
                                            <button type="button" class="btn btn-light me-1" data-bs-dismiss="modal">Cerrar</button>
                                            <button type="submit" class="btn btn-success" id="btn-update-order">Actualizar Pedido</button>
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