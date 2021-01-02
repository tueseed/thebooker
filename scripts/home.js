// $(document).ready(
//                 function(){
//                             querybook()
//                             processLogin()
//                           }
// )





//////////////////////////ฟังก์ชั่นแสดงหนังสือที่หน้าแรก/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function querybook()
{
  var formData = new FormData()
  formData.append('command','allbook')
  $.ajax({
            url: 'api/api_book_all.php',
            method: 'POST',
            data:formData,
            async: true,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend : function()
            {  
                $('#showbook').block({
                                        message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',
                                        overlayCSS : { 
                                                        backgroundColor: '#ffffff',
                                                        opacity: 1
                                                    },
                                        css : {
                                            opacity: 1,
                                            border: 'none',
                                        }
                                        })
            },
            success: function(response) 
            {
                var obj = JSON.parse(response)
                var j =0;
                while(obj[j])
                {
                    $('#showbook').append(makebookcard(obj[j]))
                    j++;
                }
                console.log(obj)
                // console.log(response)
                // location.reload()      
            },
            complete :function()
            {
                $('#showbook').unblock()    
            }					
        })
}
//////////////////สร้างงการ์ดหนังสือแต่ละเล่ม
function makebookcard(bookdetail)
{
  if(bookdetail.status == '0')
  {
    var bookstatustext = '<span class="card-text text-success">ว่าง</span>'
  }
  else if(bookdetail.status == '1')
  {
    var bookstatustext = '<span class="card-text text-danger">ไม่ว่าง</span>'
  }
  return[
    '<div class="col-lg-5 mt-3">',
    '<a class="card nav-link shadow" href="?action=bookdetail&bookid=' + bookdetail.bookid + '">',
      '<div class="card-horizontal">',
        '<div class="img-square-wrapper shadow">',
            '<img class="" src="' + bookdetail.coverimage+ '" width="150" height="215" alt="Card image cap">',
        '</div>',
        '<div class="card-body">',
            '<h5 class="card-title">ชื่อหนังสือ : ' + bookdetail.bookname + '</h4>',
            '<p class="card-texts">ผู้เขียน : ' + bookdetail.writer + '</p>',
            '<p class="card-text">หมวดหมู่ : ' + bookdetail.category + '</p>',
            '<p class="card-text">สถานะ : ' + bookstatustext+ '</p>',
            '<p class="card-text">กำหนดคืน : ' +bookdetail.datereturn + '</p>',
        '</div>',
      '</div>',
    '</a>',
  '</div>'
  ].join("")
}
