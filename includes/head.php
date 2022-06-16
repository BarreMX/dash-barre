<header id="page-topbar">
    <div class="navbar-header">
        
        <!--== Logo ==-->
        <div class="d-flex">
            <div class="navbar-brand-box text-center">
                <a href="<?php echo get_site_url(); ?>" class="logo logo-light">
                    <span class="logo-sm">
                        <img src="<?php echo get_site_url(); ?>/assets/images/Logotipo-BarreMx-1.png" alt="logo-sm-light" height="22">
                    </span>
                    <span class="logo-lg" style="color: #fff;font-weight: 700;font-size: 22px;">
                        <img src="<?php echo get_site_url(); ?>/assets/images/Logotipo-BarreMx-1.png" alt="logo-light" height="34">
                    </span>
                </a>
            </div>
            <button type="button" class="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                <i class="ri-menu-2-line align-middle"></i>
            </button>
        </div>

        <!--== Header ==-->
        <div class="d-flex">

            <div class="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                    <i class="ri-fullscreen-line"></i>
                </button>
            </div>

            <div class="dropdown d-inline-block user-dropdown">
                <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="rounded-circle header-profile-user" src="<?php echo get_site_url(); ?>/assets/images/Logotipo-BarreMx-1.png" alt="Header Avatar">
                    <span class="d-none d-xl-inline-block ms-1 current-username">Default Name</span>
                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>

                <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="#"><i class="mdi mdi-account"></i> Mi Cuenta</a>
                    <a class="dropdown-item text-danger logout" href="#"><i class="ri-shut-down-line align-middle me-1 text-danger"></i> Cerrar Sesión</a>
                </div>
            </div>

        </div>

    </div>
</header>