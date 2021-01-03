<div class="row ml-2 mr-2">
    <div class="col-lg-12 text-center">
        <span class="text-success font-weight-bold" style="font-size:35px;">ลงทะเบียนสมาชิก</span>
    </div>
</div>

<div class="row text-center">
    <div class="col-lg-4 offset-lg-4">
        <div class="form-group">
            <label for="nameInput" class="font-weight-bold text-white"><i class="fas fa-user-edit"></i> ชื่อ - นามสกุล</label>
            <input type="text" class="form-control" id="nameInput" name="nameInput" placeholder="ชื่อ - นามสกุลของท่าน" required>
        </div>
        <div class="form-group">
            <label for="telInput" class="font-weight-bold text-white"><i class="fa fa-address-card"></i> ตำแหน่ง</label>
            <input type="text" class="form-control" id="position" name="position" placeholder="กรอกตำแหน่ง/สังกัด" required>
        </div>
        <div class="form-group">
            <label for="telInput" class="font-weight-bold text-white"><i class="fa fa-address-card"></i> แผนก</label>
            <select class="form-control" id="secTion">
                <option value="cn">แผนกก่อสร้าง</option>
                <option value="cs">แผนกบริการลูกค้า</option>
                <option value="om">แผนกปฏิบัติการและบำรุงรักษา</option>
            </select>
        </div>
        <div class="form-group">
            <label for="telInput" class="font-weight-bold text-white"><i class="fa fa-address-card"></i> รหัสพนักงาน/</label>
            <input type="text" class="form-control" id="staffId" name="staffId" placeholder="กรอกรหัสพนักงาน" required>
        </div>
        <button type="ิbutton" class="btn btn-primary" onclick="regis_emp()">ส่งข้อมูล</button>
    </div>
</div>