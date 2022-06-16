<div class="loading-bar loading-bar--active"></div>
<div class="page-content">
    <div class="container-fluid">

        <!--== Breadcumb ==-->
        <?php echo get_breadcumbs_page(); ?>

        <div id="get-error"></div>

        <div class="row">

            <div class="col-3">
                <div class="card">
                    <div class="card-body">

                        <div class="mb-2" id="user-data" style="text-align: center;display: none;">
                            <img class="rounded-circle" width="150px" src="" data-holder-rendered="true">
                            <h5 style="padding-top: 15px;" id="page-user-name">Username</h5>
                            <h5 style="padding-top: 5px;" id="page-user-role">Role</h5>
                        </div>

                        <div class="page-preloader">
                            <div class="lds-dual-ring"></div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-9">
                <div class="card">
                    <div class="card-body">
                        <div class="row">

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

                            <!--== Fecha ==-->
                            <div class="col-4">
                                <div class="mb-3">
                                    <label class="form-label">Fecha *</label>
                                    <input class="form-control" placeholder="Fecha" type="text" name="title" id="alumno-fecha" value="" disabled>
                                </div>
                            </div>

                            <!--== Ubicación ==-->
                            <div class="col-4">
                                <div class="mb-3">
                                    <label class="form-label">Ubicación</label>
                                    <select class="form-select" id="alumno-ubicacion">
                                        <option value="0">Select...</option>
                                    </select>
                                </div>
                            </div>

                            <!--== Horario ==-->
                            <div class="col-4">
                                <div class="mb-3">
                                    <label class="form-label">Horario</label>
                                    <input class="form-control" placeholder="Horario" type="text" name="title" id="alumno-horario" value="">
                                </div>
                            </div>

                            <!--== Descripción ==-->
                            <div class="col-12">
                                <div class="mb-3">
                                    <label class="form-label">Descripción</label>
                                    <textarea class="form-control" placeholder="Descripción" type="text" name="title" id="alumno-descripcion" value=""></textarea>
                                </div>
                            </div>

                            <!--== Pocision ==-->
                            <div class="col-4">
                                <div class="mb-3">
                                    <label class="form-label">Pocision</label>
                                    <input class="form-control" placeholder="Pocision" type="text" name="title" id="alumno-pocision" value="">
                                </div>
                            </div>

                            <!--== Clase Clave ==-->
                            <div class="col-4">
                                <div class="mb-3">
                                    <label class="form-label">Clase Clave</label>
                                    <input class="form-control" placeholder="Clase Clave" type="text" name="title" id="alumno-clase-clave" value="">
                                </div>
                            </div>

                            <!--== Saldo Clase ==-->
                            <div class="col-4">
                                <div class="mb-3">
                                    <label class="form-label">Saldo Clase</label>
                                    <input class="form-control" placeholder="Saldo Clase" type="text" name="title" id="alumno-saldo-clase" value="">
                                </div>
                            </div>

                            <!--== Vigencia ==-->
                            <div class="col-4">
                                <div class="mb-3">
                                    <label class="form-label">Vigencia</label>
                                    <input class="form-control" placeholder="Vigencia" type="text" name="title" id="alumno-vigencia" value="">
                                </div>
                            </div>

                            <!--== Clave Pago ==-->
                            <div class="col-4">
                                <div class="mb-3">
                                    <label class="form-label">Clave Pago</label>
                                    <input class="form-control" placeholder="Clave Pago" type="text" name="title" id="alumno-clave-pago" value="">
                                </div>
                            </div>

                            <!--== Método de Pago ==-->
                            <div class="col-4">
                                <div class="mb-3">
                                    <label class="form-label">Método de Pago</label>
                                    <input class="form-control" placeholder="Método de Pago" type="text" name="title" id="alumno-metodo-pago" value="">
                                </div>
                            </div>

                            <!--== Descuento ==-->
                            <div class="col-3">
                                <div class="mb-3">
                                    <label class="form-label">Descuento</label>
                                    <input class="form-control" placeholder="Descuento" type="text" name="title" id="alumno-descuento" value="">
                                </div>
                            </div>


                            <!--== Asistencia (1=ok 0=falta) ==-->
                            <div class="col-3">
                                <div class="mb-3">
                                    <label class="form-label">Asistencia (1=ok 0=falta)</label>
                                    <input class="form-control" placeholder="Asistencia (1=ok 0=falta)" type="text" name="title" id="alumno-asistencia" value="">
                                </div>
                            </div>

                            <!--== Staff ==-->
                            <div class="col-3">
                                <div class="mb-3">
                                    <label class="form-label">Staff</label>
                                    <input class="form-control" placeholder="Staff" type="text" name="title" id="alumno-staff" value="">
                                </div>
                            </div>

                            <!--== Ingresos ==-->
                            <div class="col-3">
                                <div class="mb-3">
                                    <label class="form-label">Ingresos</label>
                                    <input class="form-control" placeholder="Ingresos" type="text" name="title" id="alumno-ingresos" value="">
                                </div>
                            </div>

                            <!--== Observaciones ==-->
                            <div class="col-12">
                                <div class="mb-3">
                                    <label class="form-label">Observaciones</label>
                                    <textarea class="form-control" placeholder="Observaciones" type="text" name="title" id="alumno-observaciones" value=""></textarea>
                                </div>
                            </div>

                            <div class="row mt-12">
                                <div class="col-12 text-start">
                                    <a href="<?php echo get_site_url(); ?>/?page=alumnos" class="btn btn-light me-1">Cerrar</a>
                                    <button type="submit" class="btn btn-success" id="update-student">Guardar</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>