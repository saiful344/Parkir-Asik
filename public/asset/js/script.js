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
	  	rows = rows + '<td>'+value.jenis_kendaraan +'</td>';
	  	rows = rows + '<td>'+value.no_polisi+'</td>';
	  	rows = rows + '<td>'+value.tgl_lahir +'</td>';
	  	rows = rows + '<td>'+value.jenis_kelamin +'</td>';
	  	rows = rows + '<td>'+value.no_hp +'</td>';
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
	var konsumen = $("#create-item").find("input[name='konsumen']").val();
	var jenis_kendaraan = $("#create-item").find("select[name='jenis_kendaraan']").val();
	var no_polisi = $("#create-item").find("input[name='no_polisi']").val();
	var tgl_lahir = $("#create-item").find("input[name='tgl_lahir']").val();
	var jenis_kelamin = $("#create-item").find("select[name='jenis_kelamin']").val();
	var no_hp = $("#create-item").find("input[name='no_hp']").val();
	console.log(jenis_kendaraan);
	$.ajax({
		dataType: 'json',
		type: 'POST',
		url :form_action,
		data : {konsumen:konsumen,jenis_kendaraan:jenis_kendaraan,no_polisi:no_polisi,tgl_lahir:tgl_lahir,jenis_kelamin:jenis_kelamin,no_hp:no_hp}
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
		$("#edit-item").find("input[name='konsumen']").val(data.konsumen)
		$("#edit-item").find("input[name='no_hp']").val(data.no_hp)
		$("#edit-item").find("input[name='no_polisi']").val(data.no_polisi)
		$("#edit-item").find("input[name='tgl_lahir']").val(data.tgl_lahir)
		$("#edit-item").find("input[name='id']").val(data.id)
		$("div.select-kelamin select").val(data.jenis_kelamin);
		$("div.select-kendaraan select").val(data.jenis_kendaraan);
	})
})

$(".crud-submit-edit").click(function(e){
    e.preventDefault();

	var form_action = $("#edit-item").find("form").attr("action");
	var id = $("#edit-item").find("input[name='id']").val();
	var konsumen = $("#edit-item").find("input[name='konsumen']").val();
	var jenis_kendaraan = $("#edit-item").find("select[name='jenis_kendaraan']").val();
	var no_polisi = $("#edit-item").find("input[name='no_polisi']").val();
	var tgl_lahir = $("#edit-item").find("input[name='tgl_lahir']").val();
	var jenis_kelamin = $("#edit-item").find("select[name='jenis_kelamin']").val();
	var no_hp = $("#edit-item").find("input[name='no_hp']").val();
	console.log(form_action);
	$.ajax({
		dataType: 'json',
		type: 'PUT',
		url :form_action + "/" +id,
		data : {konsumen:konsumen,jenis_kendaraan:jenis_kendaraan,no_polisi:no_polisi,tgl_lahir:tgl_lahir,jenis_kelamin:jenis_kelamin,no_hp:no_hp}
	}).done(function(data){
		getPageData();
		$(".modal").modal("hide");
		toastr.success('Update created successfully','Success alert',{timeout:5000});
	});
});
