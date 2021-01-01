<div class="row ml-2 mr-2">
    <div class="col-lg-12 text-center">
        <span class="text-success font-weight-bold" style="font-size:35px;">ข้อมูลหนังสือ</span>
    </div>
</div>

<div class="row ml-2 mr-2">
    <div class="col-lg-12">
    <div class="card shadow" id="cardbookdetail">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-4">
            <div class="form-group">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-book-medical"></i> ชื่อหนังสือ</label>
                <input type="text" class="form-control" id="bookname" name="bookdetailName"  disabled>
            </div>
            <div class="form-group">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-user-edit"></i> ผู้เขียน</label>
                <input type="text" class="form-control" id="writer" name="bookdetailWriter"  disabled>
            </div>
            <div class="form-group">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-list-alt"></i> หมวดหมู่</label>
                <input type="text" class="form-control" id="category" name="bookdetailCategory"  disabled>
            </div>
            <div class="form-group">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-images" ></i> รูปภาพหน้าปก</label>
                <input type="text" class="form-control" id="bookcoverimage" name="bookdetailCoveriumage" onkeyup="reqpicurl()"  disabled>
            </div>
            <div class="form-group">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-user-edit"></i> สถานะการยืม</label>
                <input type="text" class="form-control" id="status" name="bookdetailRentstatus"  disabled>
            </div>
          </div>
          <div class="col-lg-4">
          <div class="form-group" id="rentstatus">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-user-edit"></i> สถานะการให้ยืม</label>
                <select class="form-control" id="rentselect" name="bookdetailRentsel" disabled>
                  <option value="0">เปิดให้ยืม</option>
                  <option value="1">ไม่เปิดให้ยืม</option>
                </select>
            </div>
            <div class="form-group">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-indent"></i> เรื่องย่อ</label>
                <textarea class="form-control" id="bookdescription" name="bookdetailDescription" rows="9" disabled></textarea>
            </div>
            
          </div>
          <div class="col-lg-4 text-center">
                <div class="img-square-wrapper">
                    <img class="" id="bookcover" src="images/bookcover.jpg" onError="this.onerror=null;this.src='images/bookcover.jpg';" width="275" height="340" name="bookdetailCoverimage" alt="Card image cap">
                </div>
          </div>
          
        </div>

        <div class="row">
          <div class="col-lg-12">
            
              <button type="ิbutton" class="btn mx-auto shadow" style = "background-color: #DDB892;" onclick="addbook()"><i class="fas fa-check-circle"></i>  ยืมหนังสือเล่มนี้</button>
              <button type="ิbutton" class="btn mx-auto shadow" style = "background-color: #DDB892;" id="editsavebtn" value="edit" onclick="editbook(this.value)"><i class="fas fa-check-circle"></i>  แก้ไขข้อมูล</button>
            
          </div>
        </div>
      </div>
  </div>
    </div>
</div>