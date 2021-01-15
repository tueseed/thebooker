function textCenterFormatter(value, row, index) 
{
  return "<div class='text-center'>" + value + "</div>";
}

function editdata(value, row, index) 
{
  return [
      '<div class="text-center"><a class="btn btn-sm btn-outline-primary" href="#" title="Like" data-toggle="modal" onclick="query_job('+"'" + value + "'" +')"  data-target="#member_detail" style="border-radius:50px 50px;">',
      '<i class="fa fa-eye"></i> แก้ไขข้อมูล',
      '</a></div>'
    ].join("")
  }