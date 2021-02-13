<div class="row ml-2 mr-2">
    <div class="col-lg-12 text-center">
        <span class="text-success font-weight-bold" style="font-size:35px;">ข้อมูลการยืมหนังสือ</span>
    </div>
</div>

<div class="row mt-3 ml-2 mr-2">
  <div class="col-lg-12">
    <div class="card shadow">
      <div class="card-body">
            สถานะใบยืม
            <div class="btn-group" role="group" aria-label="Basic example" id="btnGroupgroup">
              <button type="button" value="1" onclick="refreshData(this.value)" class="btn btn-success" ><i class="fas fa-clock"></i>  รอส่งคืน</button>
              <button type="button" value="2" onclick="refreshData(this.value)" class="btn btn-secondary"><i class="fas fa-check-circle"></i>  เสร็จสิ้น</button>
              <button type="button" value="3" onclick="refreshData(this.value)" class="btn btn-danger"><i class="fas fa-exclamation-circle"></i>  เกินกำหนด</button>
              <button type="button" value="0" onclick="refreshData()" class="btn btn-primary"><i class="fas fa-list"></i> ทั้งหมด</button>
            </div>
          <table 
            id="table_bill"
            data-toggle="table" 
            data-pagination="true"
            data-pagination-v-align="both"
            data-fixed-columns="true"
            data-sticky-header="true"
            data-search="true"
            data-page-list="[5, 10, 20, 100, ALL]"
            data-url="./api/datatable/dataforbilltable.php"
            data-page-size="5">
            <thead>
              <tr>
              <th data-field="membername" data-sortable="true" data-formatter="textCenterFormatter">ชื่อ-นามสกุล</th> 
              <th data-field="class" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas  fa-sort-numeric-down"></i> ชั้นเรียน/หน่วยงน</th>
              <th data-field="memberid" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas  fa-sort-numeric-down"></i> รหัสนักรียน/รหัสพนักงาน</th>
              <th data-field="date_1" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-info"></i> วันที่ยืม</th>
              <th data-field="date_2" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-info"></i> กำหนดคืน</th>
              <th data-field="bill_status" data-sortable="true" data-formatter="billstatus"><i class="fas fa-user"></i> สถานะ</th>
              <th data-field="bill_id" data-sortable="true" data-formatter="editdata"><i class="fas fa-user"></i> การดำเนินการ</th>
            </tr>
            </thead>
          </table>
      </div>  
    </div>
    </div>
    </div>

  <div class='modal fade' tabindex='-1' role='dialog' id='bill_detail'>
  <div class='modal-dialog modal-md' role='document' >
    <div class='modal-content'>
      <div class='modal-header'>
        <h5 class='modal-title font-weight-bold' id="head_modal">
          จัดการใบยืม <span id="editId"></span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="white-text">&times;</span>
        </button>
      </div>
      <div class='modal-body'>
          <div class="row" >
            <div class="col-lg-12" id="lineItem">
            </div>
            <!-- <div class="col-md-12">
              <input type="hidden" id="lineuid">
              <input type="text" class="form-control mt-1" id="staffnumber" placeholder="รหัสประจำตัว" >
              <input type="text" class="form-control mt-1" id="membername"   placeholder="ชื่อ-นามสกุล" >
              <input type="text" class="form-control mt-1" id="classroom" placeholder="ชั้นเรียน/หน่วยงาน" >
              <select class="form-control mt-1" id="acctype">
                <option value="0">ประเภทผู้ใช้งาน : ทั่วไป</option>
                <option value="1">ประเภทผู้ใช้งาน : ผู้ดูแล</option>
              </select>
              <select class="form-control mt-1" id="accstatus">
                <option value="0">สถานะบัญชี : ปกติ</option>
                <option value="1">สถานะบัญชี : ระงับ/ยังไม่เปิดใช้งาน</option>
              </select>
            </div> -->
          </div>
      </div> 
      <!-- <div class="modal-footer">
        <button class="btn btn-outline-primary"  id="save_btn" value="edit" onclick="close(this.value)" style="border-radius:50px 50px;">
          <i class="fas fa-save" aria-hidden="true"></i>
          ปิด
        </button>
      </div> -->
    </div>
  </div>
</div>








 