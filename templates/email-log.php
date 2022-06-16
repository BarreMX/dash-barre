<div class="page-content">
    <div class="container-fluid">

        <!--== Breadcumb ==-->
        <?php echo get_breadcumbs_page(); ?>

        <?php if ( is_admin() ) {

        } else {

            echo 'No tienes permisos para ver esta página';

        } ?>

    </div>
</div>