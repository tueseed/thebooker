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
        })
  }

  function renderbookinborrow(book,j)
  {
    var bookstatus = book.book_status
    var btnbookrt = ''
    var btncolor = ''
    if(bookstatus == '0')
    { 
      btnbookrt='คืนหนังสือแล้ว'
      btncolor ='btn-secondary'
    }
    else if(bookstatus == '1')
    {
      btnbookrt = 'คืนหนังสือ'
      btncolor ='btn-success'
    }
    return[
      '<p><span class="text-success" style="font-size:20px;">' + parseInt(j + 1) + '.' + book.bookname + '</span>',
        '<button class="btn ' + btncolor + ' float-right" id="btn_'+book.bookid+'" onclick="returnbook(' + book.bookid + ')">',
        '<i class="fas fa-undo"  aria-hidden="true"></i>  ' + btnbookrt,
        '</button>',
        '</p>',
        '<p>วันที่ยืม : ' + book.date + '</p>',
        '<p>กำหนดคืน :' + book.date_return + '</p>',
        '<p>ค่าปรับ : - ',
        '<hr>'
    ].join("")
  }

  function returnbook(bookid)
  {
    var formData = new FormData()
    formData.append('command','returnbook')
    formData.append('bookid',bookid)
    $.ajax({
            url: 'api/api_book_all.php',
            method: 'POST',
            data:formData,
            async: true,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend : function(){$('#btn_'+bookid).block({message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',overlayCSS : {backgroundColor: '#ffffff',opacity: 1},css : {opacity: 1,border: 'none',}})},
            success: function() 
            {
                // var obj = JSON.parse(response)
                // console.log(obj)
                // var j =0
                // while(obj[j])
                // {
                //   $('#lineItem').append(renderbookinborrow(obj[j],j))
                //   j++
                // }
                   
            },
            complete :function(){
              $('#btn_'+bookid).removeClass("btn-success")
              $('#btn_'+bookid).addClass("btn-success")
              $('#btn_'+bookid).prop("disabled",true)
              $('#btn_'+bookid).unblock()
              // checkbookstatusforbtnreturn(bookid)
            }							
        })
    
    
  }

  function checkbookstatusforbtnreturn(bookid)
  {
    var formData = new FormData()
    formData.append('command','checkbookstatus')
    formData.append('bookid',bookid)
    $.ajax({
            url: 'api/api_book_all.php',
            method: 'POST',
            data:formData,
            async: true,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend : function(){$('#btn_'+bookid).block({message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',overlayCSS : {backgroundColor: '#ffffff',opacity: 1},css : {opacity: 1,border: 'none',}})},
            success: function() 
            {
                // var obj = JSON.parse(response)
                // console.log(obj)
                // var j =0
                // while(obj[j])
                // {
                //   $('#lineItem').append(renderbookinborrow(obj[j],j))
                //   j++
                // }
                   
            },
            complete :function(){
              $('#btn_'+bookid).unblock()
              checkbookstatusforbtnreturn(bookid)
            }							
        })
  }

  $('#bill_detail').on('hidden.bs.modal', function () {
    $('#lineItem').empty()
  })

  