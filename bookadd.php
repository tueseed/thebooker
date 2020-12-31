<div class="row ml-2 mr-2">
    <div class="col-lg-12 text-center">
        <span class="text-success font-weight-bold" style="font-size:35px;">เพิ่มข้อมูลหนังสือ</span>
    </div>
</div>

<div class="row ml-2 mr-2">
    <div class="col-lg-12">
    <div class="card shadow" id="cardaddbook">
      <div class="card-body">
        <div class="row">
          <div class="col-lg-4">
            <div class="form-group">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-book-medical"></i> ชื่อหนังสือ</label>
                <input type="text" class="form-control" id="bookname" name="nameInput" placeholder="ตัวอย่าง วิทยาศาสตร์ ม.1" required>
            </div>
            <div class="form-group">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-user-edit"></i> ผู้เขียน</label>
                <input type="text" class="form-control" id="writer" name="nameInput" placeholder="ตัวอย่าง Mr.science" required>
            </div>
            <div class="form-group">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-list-alt"></i> หมวดหมู่</label>
                <input type="text" class="form-control" id="category" name="category" placeholder="ตัวอย่าง วิทยาศาสตร์ ศิลป" required>
            </div>
            <div class="form-group">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-images" ></i> รูปภาพหน้าปก</label>
                <input type="text" class="form-control" id="bookcoverimage" name="nameInput" onkeyup="reqpicurl()" placeholder="ตัวอย่าง นายนัทธพงศ์ เจริญกิจพิเชียร" required>
            </div>
            
          </div>
          <div class="col-lg-4">
            <div class="form-group">
                <label for="nameInput" class="font-weight-bold text-dark"><i class="fas fa-indent"></i> เรื่องย่อ</label>
                <textarea class="form-control" id="bookdescription" rows="12">

                </textarea>
            </div>
          </div>
          <div class="col-lg-4 text-center">
                <div class="img-square-wrapper">
                    <img class="" id="bookcover" src="images/bookcover.jpg" onError="this.onerror=null;this.src='images/bookcover.jpg';" width="275" height="340" alt="Card image cap">
                </div>
          </div>
          
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="form-group">
              <button type="ิbutton" class="btn btn-block mx-auto shadow" style = "background-color: #DDB892;" onclick="addbook()"><i class="fas fa-check-circle"></i>  ส่งข้อมูล</button>
            </div>
          </div>
        </div>
      </div>
  </div>
    </div>
</div>