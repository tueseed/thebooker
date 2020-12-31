var key = getUrlVars()['rg']
var menu = document.getElementById("v-pills-tab")
var $table = $('#tbl_data')
$table.bootstrapTable('hideColumn', 'ba')

function col(val)
{
   var $table = $('#tbl_data')
   
  $("#"+ val).prop("checked") ? $table.bootstrapTable('showColumn', val) : $table.bootstrapTable('hideColumn', val)
  console.log(val)
}




///////////////////////table
function textCenterFormatter(value, row, index) 
{
  return "<div class='text-center'>" + value + "</div>";
}

function textnumberFormatter(value, row, index)
{
   var v = numberWithCommas(value);
  return "<div class='text-center'>" + v + "</div>";
}
function textpercentFormatter(value, row, index) 
{
  var per = parseFloat(value);
  return "<div class='text-center'>" + per.toFixed(2) + "</div>";
}

function text_user_sts(value, row, index)
{
  var status = {
                  A0:"สร้างหมายเลขงาน",
                  A1:"ตรวจสอบข้อมูลทางบัญชี",
                  A2:"สำรวจออกแแบประมาณการ",
                  A5:"อนมัติประมาณการ",
                  B1:"จัดงานเข้าโครงการ/ชำระเงินแล้ว",
                  B2:"บันทึก-โอนงบประมาณเข้า wbs แล้ว",
                  C1:"กำลังก่อสร้าง",
                  C2:"กำลังจัดซื้อจัดจ้าง",
                  C3:"หยุดงานรอพัสดุ",
                  C4:"หยุดงานชั่วคราว กฟภ.",
                  C5:"หยุดงานชั่วคราว ผชฟ.",
                  C6:"หยุดงานชั่วคราว บ้านจัดสรร",
                  C9:"ยกเลิกสถานะ TECO",
                  D1:"แล้วเสร็จ-ตรวจสอบพัสดุ",
                  D2:"แล้วเสร็จทางเทคนิค",
                  D3:"รับเอกสารปิด กส.",
                  D9:"ยกเลิกสถานะ CLSD",
                  F0:"ตรจสอบ คชจ. และแจ้งโอนคืนงบ",
                  F1:"โอนคืนงบประมาณเรียบร้อยแล้ว",
                  F2:"ปิด กส.ทางบัญชีระดับ WBS",
                  F3:"ปิด กส.ทางบัญชีบางส่วน",
                  E2:"ยกเลิกหมายเลขงานระดับ wbs",
                  F4:"ขึ้นทรัพย์สินถาวรแล้ว",
                  Z0:"ข้อมูล wbs ระดับ node"
                }
  return "<div class='text-center'>" + value +"-" + status[value] + "</div>";
} 

function job_detail(value, row, index) 
{
  return [
      '<a class="btn btn-sm btn-outline-primary" href="#" title="Like" data-toggle="modal" onclick="query_job('+"'" + value + "'" +')"  data-target="#job_detail" style="border-radius:50px 50px;">',
      '<i class="fa fa-eye"></i> รายละเอียด..',
      "</a>  "
    ].join("")
  }

function check_emp_for_close_job(user_close_id)
{
  var user_close_name = ''
  var formdata = new FormData()
  formdata.append('emp_id',user_close_id)
  $.ajax({
      url: 'http://rg4.pea.co.th/auc/api/check_emp_api.php',
      method: 'POST',
      data:formdata,
      async: false,
      cache: false,
      processData: false,
      contentType: false,
      success: function(response) {
                  var obj = JSON.parse(response)
                  user_close_name = obj.TITLE_FULL_NAME + obj.FIRST_NAME +' '+obj.LAST_NAME  
                  console.log(user_close_name)
              }				
      });
  return user_close_name
}


function query_job(wbs)
{
  $("#wbs_no").html(wbs)
  var status = {
    A0:"สร้างหมายเลขงาน",
    A1:"ตรวจสอบข้อมูลทางบัญชี",
    A2:"สำรวจออกแแบประมาณการ",
    A5:"อนมัติประมาณการ",
    B1:"จัดงานเข้าโครงการ/ชำระเงินแล้ว",
    B2:"บันทึก-โอนงบประมาณเข้า wbs แล้ว",
    C1:"กำลังก่อสร้าง",
    C2:"กำลังจัดซื้อจัดจ้าง",
    C3:"หยุดงานรอพัสดุ",
    C4:"หยุดงานชั่วคราว กฟภ.",
    C5:"หยุดงานชั่วคราว ผชฟ.",
    C6:"หยุดงานชั่วคราว บ้านจัดสรร",
    C9:"ยกเลิกสถานะ TECO",
    D1:"แล้วเสร็จ-ตรวจสอบพัสดุ",
    D2:"แล้วเสร็จทางเทคนิค",
    D3:"รับเอกสารปิด กส.",
    D9:"ยกเลิกสถานะ CLSD",
    F0:"ตรจสอบ คชจ. และแจ้งโอนคืนงบ",
    F1:"โอนคืนงบประมาณเรียบร้อยแล้ว",
    F2:"ปิด กส.ทางบัญชีระดับ WBS",
    F3:"ปิด กส.ทางบัญชีบางส่วน",
    E2:"ยกเลิกหมายเลขงานระดับ wbs",
    F4:"ขึ้นทรัพย์สินถาวรแล้ว",
    Z0:"ข้อมูล wbs ระดับ node"
  }
  var formdata = new FormData()
  formdata.append('wbs',wbs)
  $.ajax({
      url: 'api/query_job_api.php',
      method: 'POST',
      data:formdata,
      async: true,
      cache: false,
      processData: false,
      contentType: false,
      success: function(response) {
                  var obj = JSON.parse(response)
                  console.log(obj)
                  if(obj[0].user_status == 'F4')
                  {
                    $("#btn_closejob").hide()
                    $('#confirm_text').show()
                    var user_close = check_emp_for_close_job(obj[0].confirm_close)
                    var date_confirm = obj[0].date_confirm
                    var y = date_confirm.substring(0,4)
                    var m = date_confirm.substring(5,7)
                    var d = date_confirm.substring(8,10)
                    var y_thai = parseInt(y) + parseInt(543)
                    var month_thai = {1:'มกราคม',2:'กุมภาพันธ์',3:'มีนาคม',4:'เมษายน',5:'พฤษภาคม',6:'มิถุนายน',7:'กรกฏาคม',8:'สิงหาคม',9:'กันยายน',10:'ตุลาคม',11:'พฤศจิกายน',12:'ธันวาคม'}
                    $('#confirm_text').html('ยืนยันสถานะงาน F4 แล้วโดย ' + user_close + ' เมื่อ ' + d + ' ' + month_thai[parseInt(m)] +' '+ y_thai)
                  }
                  else{
                    $("#btn_closejob").show()
                    $('#confirm_text').hide()
                  }
                  var expenses = parseFloat(obj[0].act_labor) + parseFloat(obj[0].act_control) + parseFloat(obj[0].act_tran) + parseFloat(obj[0].act_general)
                  $("#wbs_no").html(wbs)
                  $("#office").html(' '+ obj[0].office_name)
                  $('#des').html(obj[0].description)
                  $('#user').html(obj[0].user_status +'-'+ status[obj[0].user_status])
                  $('#date_last_status').html(obj[1][0].date_update)
                  $('#last_user_status').html(obj[0].last_status2 +'-'+ status[obj[0].last_status2])
                  var postg_date = obj[0].postg_date
                  var y = postg_date.substring(0,4)
                  var m = postg_date.substring(5,7)
                  var d = postg_date.substring(8,10)
                  var y_thai = parseInt(y) + parseInt(543)
                  var month_thai = {1:'มกราคม',2:'กุมภาพันธ์',3:'มีนาคม',4:'เมษายน',5:'พฤษภาคม',6:'มิถุนายน',7:'กรกฏาคม',8:'สิงหาคม',9:'กันยายน',10:'ตุลาคม',11:'พฤศจิกายน',12:'ธันวาคม'}

                  $('#f_date').html(d + ' ' + month_thai[parseInt(m)] + ' '+ y_thai)
                  $('#num_day').html(obj[0].day_now)
                  $('#labor').html(obj[0].percent)
                  $('#act_value').html(numberWithCommas(obj[0].act))
                  $('#tech_n').html(obj[0].tech_name)
                  $('#tech_i').html(obj[0].tech_id)
                  check_emp(obj[0].tech_name)
                  $('#analy_d').html(obj[0].analy_date)
                  $('#per_f').html(parseInt(obj[0].per))
                  $('#p_mat').html(numberWithCommas(obj[0].p_mat))
                  $('#p_mat_in').html(numberWithCommas(obj[0].p_mat_in))
                  $('#p_labor').html(numberWithCommas(obj[0].p_labor))
                  $('#p_con').html(numberWithCommas(obj[0].p_control))
                  $('#p_tran').html(numberWithCommas(obj[0].p_tran))
                  $('#p_general').html(numberWithCommas(obj[0].p_general))
                  $('#p_operate').html(numberWithCommas(obj[0].p_operate))
                  $('#p_tc').html(numberWithCommas(obj[0].p_tc))

                  $('#act_mat').html(numberWithCommas(obj[0].act_mat))
                  $('#act_mat_in').html(numberWithCommas(obj[0].act_mat_in))
                  $('#act_labor').html(numberWithCommas(obj[0].act_labor))
                  $('#act_con').html(numberWithCommas(obj[0].act_control))
                  $('#act_tran').html(numberWithCommas(obj[0].act_tran))
                  $('#act_general').html(numberWithCommas(obj[0].act_general))
                  $('#act_operate').html(numberWithCommas(obj[0].act_operate))
                  $('#act_tc').html(numberWithCommas(obj[0].ac_tc))
                  $('#expen').html(numberWithCommas(expenses))
                  $('#btn_closejob').attr('onclick','close_job("'+ wbs +'","'+obj[0].ba+'")')
              }				
      });
}

function insert_msg()
{
  
  //alert($("#text_msg").val() + $('#wbs_no').text() + session.EmployeeId + session.TitleFullName + session.FirstName + " " + session.LastName)
  if($("#text_msg").val() == "")
  {
    alert("กรุณาระบุข้อความ")
  }
  else
  {
    var formdata = new FormData()
    formdata.append('wbs',$('#wbs_no').text())
    formdata.append('u_number',session.EmployeeId)
    formdata.append('u_name',session.TitleFullName + session.FirstName + " " + session.LastName)
    formdata.append('msg',$("#text_msg").val())
    $.ajax({
              url: 'api/insert_msg_api.php',
              method: 'POST',
              data:formdata,
              async: true,
              cache: false,
              processData: false,
              contentType: false,
              beforeSend : function()
              {
                  $('#row_msg').block({
                    message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',
                    overlayCSS : { 
                      backgroundColor: '#ffffff',
                      opacity: 1
                    },
                    css : {
                      opacity: 1,
                      border: 'none',
                    }
                  });
              },
              success: function(response) {
                          console.log('success')
                      },
              complete :function(){
                                $('#row_msg').unblock()        
                                query_msg()
                                document.getElementById("text_msg").value=''
                        }					
            });
  }
}

function query_msg()
{
  var msg_card = document.getElementById("msg_area")
  msg_card.innerHTML = ''
  var formdata = new FormData()
  formdata.append('wbs',$('#wbs_no').text())
  $.ajax({
      url: 'api/query_msg_api.php',
      method: 'POST',
      data:formdata,
      async: true,
      cache: false,
      processData: false,
      contentType: false,
      beforeSend : function()
            {  
              $('#row_msg').block({
                  message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',
                  overlayCSS : { 
                    backgroundColor: '#ffffff',
                    opacity: 1
                  },
                  css : {
                    opacity: 1,
                    border: 'none',
                  }
                });
            },
      success: function(response) {
                  var obj = JSON.parse(response)
                  if(obj.length == 0 )
                  {
                    $('#row_msg').hide()
                  }
                  else if(obj.length > 0 )
                  {
                    $('#row_msg').show()
                    var i = 0
                    while(obj[i])
                    {
                      render_msg(obj[i].u_name,obj[i].datetime,obj[i].msg)  
                      i++
                    }
                  } 
              },
        complete :function(){
                                $('#row_msg').unblock()        
                        }					
      });
}

function render_msg(u_name,datetime,msg)
{
    var msg_card = document.getElementById("msg_area")
    msg_card.innerHTML = msg_card.innerHTML + '<div class="card shadow mt-1"><div class="card-body"><span class="font-weight-bold"><i class="fas fa-user"></i> ' + u_name + '</span> <span class="text-success"><i class="fas fa-clock" aria-hidden="true"></i> ' + datetime + '</span><br><span class="text-info"><i class="fas fa-comment-dots"></i> ' + msg + '</span></div></div>' 
}

function check_emp()
{
  var formdata = new FormData()
  formdata.append('emp_id',$('#tech_i').text())
  $.ajax({
      url: 'http://rg4.pea.co.th/auc/api/check_emp_api.php',
      method: 'POST',
      data:formdata,
      async: true,
      cache: false,
      processData: false,
      contentType: false,
      beforeSend : function()
            {  
              $('#head_of').block({
                  message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',
                  overlayCSS : { 
                    backgroundColor: '#ffffff',
                    opacity: 1
                  },
                  css : {
                    opacity: 1,
                    border: 'none',
                  }
                });
            },
      success: function(response) {
                  var obj = JSON.parse(response)
                  $("#head_of").text(obj.DEPT_SHORT)
                  var rt_date = obj.RETIRED_DATE.date
                  var y = rt_date.substring(0,4)
                  var m = rt_date.substring(5,7)
                  var d = rt_date.substring(8,10)
                  var y_thai = parseInt(y) + parseInt(543)
                  var month_thai = {1:'มกราคม',2:'กุมภาพันธ์',3:'มีนาคม',4:'เมษายน',5:'พฤษภาคม',6:'มิถุนายน',7:'กรกฏาคม',8:'สิงหาคม',9:'กันยายน',10:'ตุลาคม',11:'พฤศจิกายน',12:'ธันวาคม'}
                  $("#retired_date").text(month_thai[m] + ' ' + y_thai)
                  // console.log(rt_date)
              },
        complete :function(){
                                $('#head_of').unblock()        
                        }					
      });
}

function close_job(wbs,ba)
{
  console.log(wbs)
  Swal.fire({
              title: "หากต้องการปิดงาน",
              text: 'ต้องแน่ใจว่า WBS ' + wbs + ' มีสถานะในระบบ SAP เป็น F4 แล้ว', 
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'ยืนยัน.',
              cancelButtonText:'ยกเลิก',
            }).then(   
                    (result) => {
                            if (result.value) 
                            {
                                var formdata = new FormData()
                                formdata.append('wbs',wbs)
                                formdata.append('u_number',session.EmployeeId)
                                $.ajax({
                                        url: 'api/close_job_api.php',
                                        method: 'POST',
                                        data:formdata,
                                        async: true,
                                        cache: false,
                                        processData: false,
                                        contentType: false,
                                        success: function(response) {
                                                       
                                                },
                                        complete :function(){
                                                            
                                                            Swal.fire({
                                                                title: 'สำเร็จ!',
                                                                html: 'ปิดงานสำเร็จ',
                                                                type: 'success',
                                                                timer: 5000
                                                            });        
                                                    query_job(wbs)
                                                    query_msg()
                                                    var $table = $('#tbl_data');
                                                    $table.bootstrapTable('refreshOptions', {
                                                        url: './api/datatable/job_api.php?peacode=' + ba
                                                      })
                                                    }					
                                        })
                            }
                        }
        )

}

$("#job_detail").on('shown.bs.modal', function(){
  query_msg();
 })

 $("#job_detail").on('hide.bs.modal', function(){
  var msg_card = document.getElementById("msg_area")
  msg_card.innerHTML = ''
  $('#row_msg').hide()
  $('#tech_n').html('')
  $('#tech_i').html('')
  $('#confirm_text').hide()
 })
$('#tbl_data').on('load-success.bs.table', function () {
  // $('#tbl_data').bootstrapTable('hideColumn', 'ba')
  $('#tbl_data').bootstrapTable('hideColumn', 'office_name')
  $('#tbl_data').bootstrapTable('hideColumn', 'tech_name')
  $('#tbl_data').bootstrapTable('hideColumn', 'tech_id')
  $('#tbl_data').bootstrapTable('hideColumn', 'network')
})
