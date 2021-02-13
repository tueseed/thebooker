$('#circularMenu').hide()

function textCenterFormatter(value, row, index) 
{
  return "<div class='text-center'>" + value + "</div>";
}

function checkacctypefortbl(value, row, index)
{
  if(value == 0)
  {
    var acctype = "ทั่วไป"
  }
  else if(value == 1)
  {
    var acctype = "ผู้ดูแล"

  }
  return "<div class='text-center'>" + acctype + "</div>";
}

function checkaccstatusfortbl(value, row, index)
{
  if(value == 1)
  {
    var acctype = "ปกติ"
  }
  else if(value == 0)
  {
    var acctype = "ถูกระงับ/ยังไม่เปิดใช้งาน"

  }
  return "<div class='text-center'>" + acctype + "</div>";
}


function editdata(value, row, index) 
{
  return [
      '<div class="text-center"><a class="btn btn-sm btn-outline-primary" href="#" title="Like" data-toggle="modal" onclick="query_member('+"'" + value + "'" +')"  data-target="#member_detail" style="border-radius:50px 50px;">',
      '<i class="fa fa-eye"></i> แก้ไขข้อมูล',
      '</a></div>'
    ].join("")
  }

function query_member(lineuid)
{
  console.log(lineuid)
  var formData = new FormData()
  formData.append('command','queryedit')
  formData.append('uid',lineuid)
  $.ajax({
            url: 'api/member_api.php',
            method: 'POST',
            data:formData,
            async: true,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend : function(){$('#body_member_modal').block({message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"></div>',overlayCSS : {backgroundColor: '#ffffff',opacity: 1},css : {opacity: 1,border: 'none',}})},
            success: function(response) 
            {
                var obj = JSON.parse(response)
                $('#membername').val(obj[0].membername)
                $('#staffnumber').val(obj[0].memberid)
                $('#classroom').val(obj[0].class)
                $('#acctype').val(obj[0].levelaccount)
                $('#accstatus').val(obj[0].accountstatus)
                $('#lineuid').val(obj[0].lineuid)
                console.log(obj)
                   
            },
            
            complete :function()
            {
              $('#body_member_modal').unblock()
            }					
        });
  }

  function editDatafn()
  {
    var formData = new FormData()
    formData.append('command','editdatamember')
    formData.append('uid',$('#lineuid').val())
    formData.append('membername',$('#membername').val())
    formData.append('memberid',$('#staffnumber').val())
    formData.append('classroom',$('#classroom').val())
    formData.append('acctype',$('#acctype').val())
    formData.append('accstatus',$('#accstatus').val())
    $.ajax({
            url: 'api/member_api.php',
            method: 'POST',
            data:formData,
            async: true,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend : function()
            {
              $("#member_detail").modal("hide")
              $('#member_data_area').block({message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',overlayCSS : {backgroundColor: '#ffffff',opacity: 1},css : {opacity: 1,border: 'none',}})
            },
            success: function(response) 
            {
                // var obj = JSON.parse(response)
                // $('#nameEditmodal').val(obj[0].membername)
                // $('#classroomEditmodal').val(obj[0].class)
                // $('#acctypeeditJobmodal').val(obj[0].levelaccount)
                // $('#accstatuseditJobmodal').val(obj[0].accountstatus)
                console.log(response)
                   
            }	,
            complete :function()
            {
              $('#member_data_area').unblock()
            }					
        });

  }

  // $('#bill_detail').on('hidden.bs.modal', function () {
  //   $('#lineItem').empty()
  // })