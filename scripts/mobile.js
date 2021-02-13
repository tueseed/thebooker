$('#header').hide()
liff
  .init({
    liffId: "1655539437-ploBZxNG" // Use own liffId
  })
  .then(() => {
    liff.getProfile().then(async profile => {
                                        const name = profile.displayName
                                        const uid = profile.userId
                                        sessionStorage.setItem('uid',uid)
                                        await checkregis() 
                                        await check_account_status() 
                            })
  })
$(document).ready(
    function(){
      
      querybook()
              }
)

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
                $('#bookmobile').block({
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
                    $('#bookmobile').append(makebookcard(obj[j]))
                    j++;
                }
                console.log(obj)
                // console.log(response)
                // location.reload()      
            },
            complete :function()
            {
                $('#bookmobile').unblock()    
            }					
        })
}

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
    '<a class="card nav-link shadow" href="?action=mobilebookdetail&bookid=' + bookdetail.bookid + '">',
      '<div class="card-vertical">',
        '<div class="img-square-wrapper text-center">',
            '<img class="" src="' + bookdetail.coverimage+ '" width="150" height="215" alt="Card image cap">',
        '</div>',
        '<div class="card-body">',
            '<h6 class="card-title">ชื่อหนังสือ : ' + bookdetail.bookname + '</h6>',
            // '<p class="card-text">ผู้เขียน : ' + bookdetail.writer + '</p>',
            // '<p class="card-text">หมวดหมู่ : ' + bookdetail.category + '</p>',
            // '<p class="card-text">สถานะ : ' + bookstatustext+ '</p>',
            // '<p class="card-text">กำหนดคืน : ' +bookdetail.datereturn + '</p>',
        '</div>',
      '</div>',
    '</a>',
  '</div>'
  ].join("")
}


async function checkregis(uid)
{
  var formData = new FormData()
  formData.append('command','checkregis')
  formData.append('uid',sessionStorage.getItem('uid'))
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
                if(response == 0)
                {
                  window.location.href = 'index.php?action=mobileregis'
                }
                // else if(response == 1)
                // {
                //   window.location.href = 'index.php?action=mobile'
                // } 
            }				
        })
}

async function check_account_status()
{
  var formData = new FormData()
  formData.append('command','checkaccountstatus')
  formData.append('uid',sessionStorage.getItem('uid'))
  $.ajax({
            url: 'api/member_api.php',
            method: 'POST',
            data:formData,
            async: true,
            cache: false,
            processData: false,
            contentType: false,
            success: async function(response) 
            {
               var obj = JSON.parse(response)  
               if(obj[0].accountstatus == 0)
               {
                 await Swal.fire('คำเตือน!','บัญชีของคุณยังไม่ได้รับการยืนยัน<br>กรุณาติดต่อเจ้าหน้าที่','warning')
                 sessionStorage.clear()
                 liff.closeWindow()
               }
               
            }				
        })
}