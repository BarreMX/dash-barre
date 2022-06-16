<div class="bg-overlay"></div>
<div class="account-pages my-5 pt-5">
   <div class="container">

      <!--== Row ==-->

      <div class="row justify-content-center">
         <div class="col-xl-4 col-lg-6 col-md-8">
         
            <!--== Card ==-->
            <div class="card">
               <div class="card-body p-4">
                  <div class="">

                     <!--== Head ==-->
                     <div class="text-center">
                        <a href="<?php echo get_site_url(); ?>" class="">
                           <img src="<?php echo get_site_url(); ?>/assets/images/Logotipo-BarreMx-1.png" alt="" height="60" class="auth-logo logo-dark mx-auto">
                           <img src="<?php echo get_site_url(); ?>/assets/images/Logotipo-BarreMx-1.png" alt="" height="60" class="auth-logo logo-light mx-auto">
                        </a>
                     </div>

                     <!--== Content ==-->
                     <h4 class="font-size-18 text-muted mt-2 text-center">Bienvenido de nuevo !</h4>
                     <p class="mb-5 text-center">Inicie sesión para continuar.</p>

                     <!--== Login Form ==-->
                     <form class="form-horizontal" action="index.html">
                        <div class="row">
                           <div class="col-md-12">

                              <!--== Username ==-->
                              <div class="mb-4">
                                 <label class="form-label" for="username">Usuario</label>
                                 <input type="text" class="form-control" id="username" placeholder="Usuario">
                              </div>

                              <!--== Password ==-->
                              <div class="mb-4">
                                 <label class="form-label" for="userpassword">Contraseña</label>
                                 <input type="password" class="form-control" id="userpassword" placeholder="Contraseña">
                              </div>

                              <!--== Password Recovery ==-->
                              <div class="row">
                                 <div class="col-7">
                                    <div class="text-md-end mt-3 mt-md-0">
                                       <a href="#" class="text-muted"><i class="mdi mdi-lock"></i> Has olvidado tu contraseña?</a>
                                    </div>
                                 </div>
                              </div>

                              <!--== Message ==-->
                              <div class="row" style="display: block;">
                                 <div class="col-12">
                                    <div class="text-md-left mt-3 mt-md-0" id="login-result">
                                       
                                    </div>
                                 </div>
                              </div>

                              <!--== Login ==-->
                              <div class="d-grid mt-4" style="position: relative;">
                                 <button class="btn btn-primary waves-effect waves-light" type="submit" id="login">Ingresar</button>
                                 <div class="lds-dual-ring login-preloader"></div>
                              </div>

                           </div>
                        </div>
                     </form>

                  </div>
               </div>
            </div>

            <!--== Footer ==-->
            <div class="mt-5 text-center">
               <p class="text-white-50">
                  © <script>document.write(new Date().getFullYear())</script> BarreMX.
               </p>
            </div>

         </div>
      </div>

   </div>
</div>