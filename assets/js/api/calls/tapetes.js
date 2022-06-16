$(document).ready(function(){

	var row_width;
	new Sortable( document.getElementById('tapetes'), {
	    animation: 150,
	    ghostClass: 'blue-background-class'
	});

	// Insertar Item
	$( 'body' ).on( 'click', 'a.add-tapete', function(){
		event.preventDefault();
		let row_col = $( 'input[name="tapetes-col"]' ).val();
		let tapete_item = '<div class="grid-square tapete-card-item" style="width: ' + row_col + ';"><div class="tapete-card"><div class="tapete-empty"><span class="add-tapete-item fas fa-plus"></span><span class="remove-tapete-item fas fa-trash-alt"></span> </div></div></div>';
		$( tapete_item ).appendTo( '#tapetes' );
	});

	// Remover Item
	$( 'body' ).on( 'click', '.remove-tapete-item', function(){
		$(this).parent().parent().parent().remove();
	});

	// Agregar Tapete en un Item
	$( 'body' ).on( 'click', '.add-tapete-item', function(){
		let tapete_item = '<img src="https://barremx.online/wp-content/uploads/2022/02/BMX-02.jpg"><div class="tapete-actions"><span class="remove-tapete fas fa-trash"></span><span class="change-item-image far fa-file-image" data-bs-toggle="modal" data-bs-target="#gallery"></span></div>';
		$(this).parent().parent().html(tapete_item);
	});

	// Remover Tapete de un Item
	$( 'body' ).on( 'click', '.remove-tapete', function(){
		let tapete_item = '<div class="tapete-empty"><span class="add-tapete-item fas fa-plus"></span><span class="remove-tapete-item fas fa-trash-alt"></span></div>';
		$(this).parent().parent().html(tapete_item);
	});

	$( 'input[name="tapetes-col"]' ).change(function(){
		let row_col = $( 'input[name="tapetes-col"]' ).val();
		$( '.tapete-card-item' ).attr( 'style', 'width: ' + row_col + ';' );
	});



});