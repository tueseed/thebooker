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
  if(value == 0)
  {
    var acctype = "ปกติ"
  }
  else if(value == 1)
  {
    var acctype = "ถูกระงับ/ยังไม่เปิดใช้งาน"

  }
  return "<div class='text-center'>" + acctype + "</div>";
}


function editdata(value, row, index) 
{
  return [
      '<div class="text-center"><a class="btn btn-sm btn-outline-primary" href="#" title="Like" data-toggle="modal" onclick="query_book_inborrow('+"'" + value + "'" +')"  data-target="#bill_detail" style="border-radius:50px 50px;">',
      '<i class="fa fa-eye"></i> จัดการใบยืม',
      '</a></div>'
    ].join("")
  }

function query_book_inborrow(bill_id)
{
  var formData = new FormData()
  formData.append('command','manageborrow')
  formData.append('bill_id',bill_id)
  $.ajax({
            url: 'api/api_book_all.php',
            method: 'POST',
            data:formData,
            async: true,
            cache: false,
            processData: false,
            contentType: false,
            success: function(response) 
            {
                var obj = JSON.parse(response)
                console.log(obj)
                var j =0
                while(obj[j])
                {
                  $('#lineItem').append(renderbookinborrow(obj[j],j))
                  j++
                }
                   
            }				
        });
  }

  function renderbookinborrow(book,j)
  {
    return[
      '<p><span class="text-success" style="font-size:20px;">' + parseInt(j + 1) + '.' + book.bookname + '</span>',
        '<button class="btn btn-success float-right">',
        '<i class="fas fa-undo" onclick="deleteFrombasket(' + book.bookid + "," + book.borrow_id + ')" aria-hidden="true"></i>  คืนหนังสือ',
        '</button>',
        '</p>',
        '<p>วันที่ยืม : ' + book.date + '</p>',
        '<p>กำหนดคืน :' + book.date_return + '</p>',
        '<p>ค่าปรับ : - ',
        '<hr>'
    ].join("")
  }

  $('#bill_detail').on('hidden.bs.modal', function () {
    $('#lineItem').empty()
  })

  