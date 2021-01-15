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
                // var j =0;
                // while(obj[j])
                // {
                //     render_tech_card(obj[j])
                //     j++;
                // }
                
                console.log(obj[0].membername)
                   
            }				
        });
  }