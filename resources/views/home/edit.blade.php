
<!-- Modal -->
<div class="modal fade" id="edit-item" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="roundedd modal-content">
      <div class="modal-header border-none">
        <h5 class="modal-title" id="exampleModalCenterTitle"><b>EDIT</b></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
      	<form action="posts" method="PUT">
          <input type="hidden" name="id" value="">
          <div class="col-10 m-auto">
            <div class="form-group row">
              <div class="col-sm-12">
                <input type="text" class="form-point barang"  placeholder="Nama" name="konsumen">
                <div class="select-kendaraan">
                <select class="form-point kendaraan" id="exampleFormControlSelect1" name="jenis_kendaraan">
                  <option value="MOBIL">MOBIL</option>
                  <option value="BUS">BUS</option>
                  <option value="TRUCK">TRUCK</option>
                </select>
                </div>
                <input type="text" class="form-point harga"  placeholder="No Polisi" name="no_polisi">
                <input type="date" class="form-point harga"  placeholder="TGL Lahir" name="tgl_lahir">
                <div class="select-kelamin">
                <select class="form-point kelamin" id="exampleFormControlSelect1" name="jenis_kelamin">
                  <option value="L">L</option>
                  <option value="P">P</option>
                </select>
              </div>
                <input type="number" class="form-point harga"  placeholder="No Hp" name="no_hp">
              </div>
            </div>
              </div>
      </form>
      </div>
      <div class="modal-footer border-none">
        <button type="submit" class="btn btn-ark shadow pl-4 pr-4 text-white crud-submit-edit">EDIT</button>
      </div>
    </div>
  </div>
</div>
