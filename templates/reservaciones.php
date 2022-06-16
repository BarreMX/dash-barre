<div class="page-content">
    <div class="container-fluid">

        <p id="get_error"></p>

        <!--== Breadcumb ==-->
        <?php echo get_breadcumbs_page(); ?>

        <?php if ( get_current_role() !== 'contador' ) { ?>
        <div class="row">
            <div class="col-12" style="padding-bottom: 20px;">
                <a href="<?php echo get_site_url(); ?>?page=calendario" class="btn btn-primary">Agregar Reservación</a>
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

    </div>
</div>