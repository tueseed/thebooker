function textCenterFormatter(value, row, index) 
{
  return "<div class='text-center'>" + value + "</div>";
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
            success: function(response) 
            {
                // var obj = JSON.parse(response)
                // $('#nameEditmodal').val(obj[0].membername)
                // $('#classroomEditmodal').val(obj[0].class)
                // $('#acctypeeditJobmodal').val(obj[0].levelaccount)
                // $('#accstatuseditJobmodal').val(obj[0].accountstatus)
                console.log(response)
                   
            }				
        });

  }