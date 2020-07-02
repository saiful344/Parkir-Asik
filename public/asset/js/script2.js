var page = 1;
var current_page = 1;
var total_page = 0;
var is_ajax_fire = 0;

getPageData();

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
	}
})

function getPageData(){
	$.ajax({
		dataType : 'json',
		url : url,
		data : {page:page}
	}).done(function(data){
		manageRow(data)
	});
}

function manageRow(data){
	var	rows = '';
	var i = 1;
	$.each( data, function( key, value) {
		rows = rows + '<tr>';
		rows = rows + '<td>'+ i++ +'</td>';
	  	rows = rows + '<td>'+value.konsumen +'</td>';
	  	rows = rows + '<td>'+value.no_polisi+'</td>';
	  	rows = rows + '<td>'+value.tgl_masuk +'</td>';
	  	rows = rows + '<td>'+value.waktu_masuk+'</td>';
	  	rows = rows + '<td>'+value.waktu_keluar +'</td>';
	  	rows = rows + '<td>'+value.biaya +'</td>';
	  	rows = rows + '<td data-id="'+value.id+'"  data-name='+value.name+'>';
	  	rows = rows + '<button class="mr-2 btn edit-item" data-toggle="modal" data-target="#edit-item" ><img src="./asset/image/edit.svg" width="20px"></button>';
      	rows = rows + '<button class="btn remove-item"><img src="./asset/image/bin.svg" width="20px"></button>';
      	rows = rows + '</td>';
	  	rows = rows + '</tr>';

	})
$("tbody").html(rows);
}

$(".crud-submit").click(function(e){
	e.preventDefault();
	var form_action = $("#create-item").find("form").attr("action");
	var no_polisi = $("#create-item").find("input[name='no_polisi']").val();
	var tgl_masuk = $("#create-item").find("input[name='tgl_masuk']").val();
	var waktu_masuk = $("#create-item").find("input[name='waktu_masuk']").val();
	$.ajax({
		dataType: 'json',
		type: 'POST',
		url :form_action,
		data : {no_polisi:no_polisi,tgl_masuk:tgl_masuk,waktu_masuk:waktu_masuk}
	}).done(function(data){
		getPageData();
		$(".modal").modal("hide");
		toastr.success('POST created successfully','Success alert',{timeout:5000});
	});
});

$("body").on("click",".remove-item",function(){
	var id  = $(this).parent("td").data("id");
	var name = $(this).parent("td").data("name");
	var c_obj = $(this).parents("tr");
	var result = confirm("Seriously to delete");

	if (result) {
		$.ajax({
			dataType : 'json',
			type : 'delete',
			url : url + '/' + id
		}).done(function(data){
			c_obj.remove();
			$("#delete-popup").modal("show");
			$("#name-deleted").html(name);
			$("#id-deleted").html(id);
			getPageData();
		})
	}
})

$("body").on("click",".edit-item",function(){
	var id  = $(this).parent("td").data("id");
	$.ajax({
		dataType : 'json',
		type : 'get',
		url : url + '/' + id
	}).done(function(data){
		$("#edit-item").find("input[name='no_polisi']").val(data.no_polisi)
		$("#edit-item").find("input[name='tgl_masuk']").val(data.tgl_masuk)
		$("#edit-item").find("input[name='id']").val(data.id)
		$("#edit-item").find("input[name='waktu_masuk']").val(data.waktu_masuk);
		$("#edit-item").find("input[name='waktu_keluar']").val(data.waktu_keluar);
		$("#edit-item").find("input[name='biaya']").val(data.biaya);
	})
})

$(".crud-submit-edit").click(function(e){
    e.preventDefault();

	var form_action = $("#edit-item").find("form").attr("action");
	var id = $("#edit-item").find("input[name='id']").val();
	var no_polisi = $("#edit-item").find("input[name='no_polisi']").val();
	var tgl_masuk = $("#edit-item").find("input[name='tgl_masuk']").val();
	var waktu_masuk = $("#edit-item").find("input[name='waktu_masuk']").val();
	var waktu_keluar = $("#edit-item").find("input[name='waktu_keluar']").val();
	$.ajax({
		dataType: 'json',
		type: 'PUT',
		url :form_action + "/" +id,
		data : {no_polisi:no_polisi,tgl_masuk:tgl_masuk,waktu_masuk:waktu_masuk,waktu_keluar:waktu_keluar}
	}).done(function(data){
		getPageData();
		$(".modal").modal("hide");
		toastr.success('Update created successfully','Success alert',{timeout:5000});
	});
});
