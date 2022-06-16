<div class="page-content">
    <div class="container-fluid">

         <p id="get_error"></p>

        <!--== Breadcumb ==-->
        <?php echo get_breadcumbs_page(); ?>

            <div class="row mb-4">

                <!--== Left Column ==-->
                <div class="col-xl-3">
                    <div class="card h-100">
                        <div class="card-body">

                           <!--== New Event Button ==-->

                           <?php if ( get_current_role() !== 'contador' ) { ?>
                              <?php if ( get_current_role() !== 'instructor' ) { ?>
                                 <button type="button" class="btn font-16 btn-primary waves-effect waves-light w-100" id="btn-new-class" data-bs-toggle="modal" data-bs-target="#event-modal">Agregar Una Clase</button>
                              <?php } ?>
                           <?php } ?>

                           <!--== Actions Button ==-->
                           <!--<div id="external-events">
                              <br>
                              <p class="text-muted">Arrastra y suelta tu evento o haz clic en el calendario</p>
                              <div class="external-event fc-event bg-success" data-class="bg-success">
                                 <i class="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>New Event Planning
                              </div>
                              <div class="external-event fc-event bg-info" data-class="bg-info">
                                 <i class="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Meeting
                              </div>
                              <div class="external-event fc-event bg-warning" data-class="bg-warning">
                                 <i class="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Generating Reports
                              </div>
                              <div class="external-event fc-event bg-danger" data-class="bg-danger">
                                 <i class="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Create New theme
                              </div>
                           </div>-->

                        </div>
                    </div>
                </div>

                <!--== Right Column ==-->
                <div class="col-xl-9">
                    <div class="card mb-0">
                        <div class="card-body">
                            <div id="calendar"></div>
                        </div>
                    </div>
                </div>

            </div>

            <!--== New Event ==-->
            <div class="modal fade" id="event-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                     
                     <!--== Header ==-->
                     <div class="modal-header py-3 px-4">
                        <h5 class="modal-title" id="modal-title">Agregar Clase</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>

                     <!--== Content ==-->
                     <div class="modal-body p-4">
                        <form class="needs-validation" name="event-form" id="form-event" novalidate>
                           
                           <!--== Fields ==-->
                           <div class="row">

                              <!--== Titulo ==-->
                              <div class="col-6">
                                 <div class="mb-3">
                                    <label class="form-label">Titulo  *</label>
                                    <input class="form-control" placeholder="Agregar Titulo" type="text" name="title" id="class-title" required value="">
                                 </div>
                              </div>

                              <!--== Instructor ==-->
                              <div class="col-6">
                                 <div class="mb-3">
                                    <label class="form-label">Instructor  *</label>
                                    <select class="form-select" id="instructores">
                                       <option value="0">Seleccionar...</option>
                                    </select>
                                 </div>
                              </div>

                              <!--== Ubicación ==-->
                              <div class="col-6">
                                 <div class="mb-3">
                                    <label class="form-label">Ubicación  *</label>
                                    <select class="form-select" id="ubicaciones">
                                       <option value="0">Seleccionar...</option>
                                    </select>
                                 </div>
                              </div>

                              <!--== Hora ==-->
                              <div class="col-6">
                                 <div class="mb-3">
                                    <label class="form-label">Hora  *</label>
                                    <input class="form-control" placeholder="Agregar Fecha" type="time" name="title" id="class-time" required value="">
                                 </div>
                              </div>

                              <!--== Fecha ==-->
                              <div class="col-12">
                                 <div class="mb-3">
                                    <label class="form-label">Fecha  *</label>
                                    <input class="form-control" placeholder="Agregar Fecha" type="date" name="title" id="class-date" required value="">
                                 </div>
                              </div>

                              <!--== Repetir Clase ==-->
                              <div class="col-12">
                                 <div class="mb-3">
                                    <label class="form-label">Repetir Clase</label>
                                    <select class="form-select" id="repeat-class">
                                       <option value="false">No</option>
                                       <option value="true">Si</option>
                                    </select>
                                 </div>
                              </div>

                              <!--== Fecha ==-->
                              <div class="col-12 hide-this" style="display: none;">
                                 <div class="mb-3">
                                    <label class="form-label">Dias a Repetir  *</label>
                                    
                                    <div class="form-check">
                                       <input class="form-check-input" type="checkbox" id="monday">
                                       <label class="form-check-label" for="monday">
                                          Lunes
                                       </label>
                                    </div>

                                    <div class="form-check">
                                       <input class="form-check-input" type="checkbox" id="tuesday">
                                       <label class="form-check-label" for="tuesday">
                                          Martes
                                       </label>
                                    </div>

                                    <div class="form-check">
                                       <input class="form-check-input" type="checkbox" id="wednesday">
                                       <label class="form-check-label" for="wednesday">
                                          Miercoles
                                       </label>
                                    </div>

                                    <div class="form-check">
                                       <input class="form-check-input" type="checkbox" id="thursday">
                                       <label class="form-check-label" for="thursday">
                                          Jueves
                                       </label>
                                    </div>

                                    <div class="form-check">
                                       <input class="form-check-input" type="checkbox" id="friday">
                                       <label class="form-check-label" for="friday">
                                          Viernes
                                       </label>
                                    </div>

                                    <div class="form-check">
                                       <input class="form-check-input" type="checkbox" id="saturday">
                                       <label class="form-check-label" for="saturday">
                                          Sabado
                                       </label>
                                    </div>

                                    <div class="form-check">
                                       <input class="form-check-input" type="checkbox" id="sunday">
                                       <label class="form-check-label" for="sunday">
                                          Domingo
                                       </label>
                                    </div>
                                    
                                 </div>
                              </div>

                              <!--== Fecha ==-->
                              <div class="col-12 hide-this" style="display: none;">
                                 <div class="mb-3">
                                    <label class="form-label">Repetir Hasta  *</label>
                                    <input class="form-control" placeholder="Agregar Fecha" type="date" name="title" id="repeat-until" required value="">
                                 </div>
                              </div>

                              <div class="col-12">
                                 <div class="mb-3" id="get_calendar_error">
                                 </div>
                              </div>

                           </div>

                           <!--== Botones ==-->
                           <div class="row mt-12">
                              <div class="col-12 text-end">
                                 <button type="button" class="btn btn-light me-1"
                                    data-bs-dismiss="modal">Cerrar</button>
                                 <button type="submit" class="btn btn-success" id="btn-save-class">Agregar Clase</button>
                              </div>
                           </div>

                        </form>
                     </div>

                  </div>
               </div>
            </div>

    </div>
</div>
<style type="text/css">
.form-label {display: block;}
.form-check {width: auto;display: inline-block;}
</style>