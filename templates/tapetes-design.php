<div class="page-content">
    <div class="container-fluid">

        <p id="get_error"></p>

        <!--== Breadcumb ==-->
        <?php echo get_breadcumbs_page(); ?>

        <div class="row">
            <div class="col-12">
                <div class="card">

                    <div class="col-12" style="padding: 30px;">
                        <div class="tapetes-header">
                            <div class="tapetes-col">
                                <a class="btn btn-primary add-tapete">Agregar Tapete</a>
                            </div>
                            <div class="tapetes-col">
                                <label>Tamaño: </label>
                                <input type="text" name="tapetes-col" value="13%">
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div id="tapetes" class="row"></div>
                    </div>

                    <div class="col-12" style="padding: 30px;">
                        <div class="tapetes-header">
                            <div class="tapetes-col">
                                <a class="btn btn-primary add-tapete">Guardar</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!--== Galeria ==-->
        <div class="modal fade" id="gallery" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                        
                    <!--== Modal Header ==-->
                    <div class="modal-header py-3 px-4">
                        <h5 class="modal-title" id="modal-title">Galleria</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <!--== Modal Body ==-->
                    <div class="modal-body p-4">
                        <form class="needs-validation" name="nueva-ubicacion" novalidate>
                            <div class="row" id="galleryItems">
                                
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    </div>
</div>

<style type="text/css">
    .modal-dialog {
        max-width: 800px;
    }
</style>