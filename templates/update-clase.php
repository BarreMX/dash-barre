<div class="loading-bar loading-bar--active"></div>
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

                        	<h4>Clase</h4>

                           	<!--== CLASS DATA ==-->
                           	<form class="needs-validation" name="class-data" id="class-data" novalidate>

                           		<!--== Instructor ==-->
                           		<div class="col-12">
                                	<div class="mb-12">
                                		<label class="form-label">Instructor *</label>
                                   		<select class="form-select" id="instructores">
                                    		<option value="0">Seleccionar...</option>
                                    	</select>
                                 	</div>
                              	</div>

                              	<!--== Ubicación ==-->
                              	<div class="col-12" style="margin-top: 15px;">
                                 	<div class="mb-12">
                                    	<label class="form-label">Ubicación *</label>
                                    	<select class="form-select" id="ubicaciones">
                                       		<option value="0">Seleccionar...</option>
                                    	</select>
                                 	</div>
                              	</div>

                              	<!--== Fecha ==-->
                              	<div class="col-12" style="margin-top: 15px;">
                                 	<div class="mb-12">
                                    	<label class="form-label">Fecha *</label>
                                    	<input class="form-control" placeholder="Agregar Fecha" type="date" name="title" id="class-date" required value="">
                                 	</div>
                              	</div>

                              	<!--== Hora ==-->
                              	<div class="col-12" style="margin-top: 15px;">
                                 	<div class="mb-12">
                                    	<label class="form-label">Hora *</label>
                                    	<input class="form-control" placeholder="Agregar Fecha" type="time" name="title" id="class-time" required value="">
                                 	</div>
                              	</div>

                              	<div class="col-12">
                                	<div class="mb-3" id="get_error" style="margin-top: 15px;"></div>
                              	</div>

                              	<!--== Botones ==-->
                           		<div class="row mt-12" style="margin-top: 15px;">
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-success" id="btn-update-class-data">Actualizar Clase</button>
                                    </div>
                                </div>

                           	</form>

                           	<h4 style="padding-top: 20px;">Alumno *</h4>

                           	<!--== Alumnos ==-->
                            <div class="col-12" style="margin-top: 15px;">
                                <div class="mb-12">
                                	<label class="form-label">Selecciona un alumno</label>
                                	<select class="form-select" id="alumnos">
                                    	<option value="0">Seleccionar...</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!--== Right Column ==-->
                <div class="col-xl-9">
                    <div class="card mb-0">
                        <div class="card-body">
                            
                            <!--== Preloader ==-->
                        	<div class="page-preloader">
                            	<div class="lds-dual-ring"></div>
                        	</div>

                        	<!--== TAPETES ==-->
                        	<div id="tapetes"></div>

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