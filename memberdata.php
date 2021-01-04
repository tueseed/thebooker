<div class="row ml-2 mr-2">
    <div class="col-lg-12 text-center">
        <span class="text-success font-weight-bold" style="font-size:35px;">จัดการข้อมูลสมาชิก</span>
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
            data-url="./api/datatable/dataformembertable.php"
            data-page-size="5">
            <thead>
              <tr>
              <th data-field="membername" data-sortable="true" data-formatter="textCenterFormatter">#</th> 
              <th data-field="class" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas  fa-sort-numeric-down"></i> WBS</th>
              <th data-field="memberid" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas  fa-sort-numeric-down"></i> สถานะล่าสุด</th>
              <th data-field="levelaccount" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-info"></i> คำอธิบาย</th>
              <th data-field="accountstatus" data-sortable="true" data-formatter="textCenterFormatter"><i class="fas fa-user"></i> สถานะผู้ใช้</th>
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








 