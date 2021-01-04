<div class="row ml-2 mr-2">
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">จัดการข้อมูลสมาชิก</span>
    </div>
    <input type="text" class="form-control" placeholder="พิมพ์ชื่อหนังสือ,ผู้เขียน,หมวดหมู่ เพื่อค้นหา" aria-label="Username" aria-describedby="basic-addon1">
  </div>
</div>

<div class="row mt-3 ml-2 mr-2">
  <div class="col-lg-12">
    <div class="card shadow">
      <div class="card-body">
          <table 
            id="tbl_data_tech"
            data-toggle="table" 
            data-pagination="true"
            data-pagination-v-align="both"
            data-fixed-columns="true"
            data-sticky-header="true"
            data-search="true"
            data-page-list="[5, 10, 20, 100, ALL]"
            data-url=" "
            data-page-size="5">
            <thead>
              <tr>
              <th data-field="wbs" data-sortable="true" data-formatter="job_detail">#</th> 
              <th data-field="wbs" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas  fa-sort-numeric-down"></i> WBS</th>
              <th data-field="last_status" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas  fa-sort-numeric-down"></i> สถานะล่าสุด</th>
              <th data-field="description" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-info"></i> คำอธิบาย</th>
              <th data-field="user_status" data-sortable="true" data-formatter="text_user_sts"><i class="fas fa-user"></i> สถานะผู้ใช้</th>
              <!-- <th data-field="last_status2" data-sortable="true" data-formatter="text_user_sts"><i class="fas fa-user"></i> สถานะผู้ใช้ 6 ก.พ. 63</th> -->
              <th data-field="postg_date" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-calendar-day"></i> วันที่เบิกของครั้งแรก</th>
              <th data-field="day_now" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-sort-numeric-down"></i> จำนวนวัน</th>
              <th data-field="percent" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-percent"></i></i> ค่าแรง</th>
              <th data-field="per" data-sortable="true" data-formatter="textpercentFormatter"><i class="far fa-money-bill-alt"></i> ค่าใช้จ่ายหน้างาน(%)</th>
              <th data-field="act1" data-sortable="true" data-formatter="textnumberFormatter"><i class="far fa-money-bill-alt"></i> ค่าพัสดุ+ค่าพัสดุเข้างาน+ค่าใช้จ่ายหน้างาน</th>
              <th data-field="ba" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-sort-numeric-down"></i> รหัสการไฟฟ้า</th>
              <th data-field="office_name" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-house-damage"></i> หน่วยงาน</th>
              <th data-field="network" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-sort-numeric-down"></i> โครงข่าย</th>
              <th data-field="tech_name" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-user"></i> ผู้ควบคุมงาน</th>
              <th data-field="tech_id" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas  fa-sort-numeric-down"></i> รหัสพนักงาน</th>
              </tr>
            </thead>
          </table>
      </div> 
      <div class="card-footer">
        <div class="float-left">
              <button class="btn btn-sm btn-outline-primary" href="#" title="Like" data-toggle="modal"  data-target="#column_modal">
              <i class="fa fa-check-square"></i>
                คอลัมน์
              </button>
        </div>
      </div>  
    </div>
    </div>
    </div>








 