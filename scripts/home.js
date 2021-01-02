$(document).ready(
                function(){
                            console.log("A")
                            querybook()
                            processLogin()
                          }
)




////////////////Line Login///////////////////////////////////////////////////////////////////////////////////////////
function processLogin()
{
  console.log('B')
  var chennelId = '1655539437'
  var clientId = 'd33ca1001671884fad04435cd62bd765'
  var callBackurl = 'https://thebooker.herokuapp.com?action=home'
  if(!getUrlVars()["code"])
  {
    window.location.href= 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=' + chennelId + '&redirect_uri=' + callBackurl + '&state=12345abcd&scope=openid%20profile'
  }
  else if(getUrlVars()["code"])
  {
    var code = getUrlVars()["code"]//ตัวแปร code จะได้มาก็ต่อเมื่อ Login ผ่านแล้ว เอาค่าของตัวแปร code ไปแลกข้อมูล
    $.ajax({
            async: true,
            crossDomain: true,
            url: "https://api.line.me/oauth2/v2.1/token",
            method: "POST",
            headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "cache-control": "no-cache"
                      },
            data: {
                    "grant_type": "authorization_code",
                    "code": code,
                    "redirect_uri": callBackurl,
                    "client_id": chennelId,
                    "client_secret": clientId
                  },
            statusCode:{
                        400:function()
                            {
                              console.log('400')
                              window.location.href= 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=' + chennelId + '&redirect_uri=' + callBackurl + '&state=12345abcd&scope=openid%20profile'
                            }
                  },
            success: async function(response) {
                                                var id_token = response.id_token
                                                var base64 = id_token.split('.')[1]
                                                var profile = await JSON.parse(window.atob(base64))
                                                localStorage.setItem('name',profile.name)
                                                localStorage.setItem('display_url',profile.picture)
                                                localStorage.setItem('userId',profile.sub)
                                                // $('#userDropdown').show()
                                                // $('#user_logged').html(profile.name)
                                                // $('#userPicture').attr('src',localStorage.getItem('display_url'))
                                                console.log('C')
                                                // var checkEmp = await emp.orderByChild('uid').equalTo(profile.sub).once('value')
                                                // var empInfo = checkEmp.val()
                                                // if(checkEmp.val() == null)
                                                // {
                                                    //window.location.href = 'index.php?action=home'
                                                // }
                                                // else if(checkEmp.val() !== null)
                                                // {
                                                //   localStorage.setItem('userId',Object.values(empInfo)[0].uid)
                                                //   localStorage.setItem('name',Object.values(empInfo)[0].techName)
                                                //   localStorage.setItem('position',Object.values(empInfo)[0].position)
                                                //   localStorage.setItem('section',Object.values(empInfo)[0].section)
                                                //   localStorage.setItem('staffId',Object.values(empInfo)[0].staffId)
                                                //   localStorage.setItem('display_url',Object.values(empInfo)[0].display_url)
                                                //   localStorage.setItem('key',Object.keys(empInfo)[0])
                                                //   var checkAutho = await check_authorize()
                                                //   countJob(Object.values(empInfo)[0].section)
                                                //   getdata(Object.values(empInfo)[0].section)
                                                //   if(Object.values(empInfo)[0].staffId == '500290'){$('#admin_menu').show()}
                                                //   $('#empName').html(Object.values(empInfo)[0].techName)
                                                //   var section = {'cn':'แผนกก่อสร้าง','cs':'แผนกบริการลูกค้า','om':'แผนกปฏิบัติการ'}
                                                //   $('#empsecTion').html(section[Object.values(empInfo)[0].section])
                                                // }
                                                // $.unblockUI()
                                                }
            })//End Ajax
  }//End If
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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