
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
console.log('global_run')
processLogin()

////////////////Line Login///////////////////////////////////////////////////////////////////////////////////////////
function processLogin()
{
  var chennelId = '1655539437'
  var clientId = 'd33ca1001671884fad04435cd62bd765'
  var callBackurl = 'https://thebooker.herokuapp.com?action=home'
  if(localStorage.getItem('name') === null)
  {
    window.location.href= 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=' + chennelId + '&redirect_uri=' + callBackurl + '&state=12345abcd&scope=openid%20profile'
  }
  else if(localStorage.getItem('name') !== null)
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
                                                $('#userName').html(profile.name)
                                                $('#userPicture').attr('src',localStorage.getItem('display_url'))
                                                checkregis()
                                                // var ckeckResult = await checkregis(profile.sub)
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

/////////////////////////ตรวจสอบการลงทะเบียน
async function checkregis(uid)
{
  var formData = new FormData()
  formData.append('command','checkregis')
  formData.append('uid',localStorage.getItem('userId'))
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
                // $('#showbook').block({
                //                         message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',
                //                         overlayCSS : { 
                //                                         backgroundColor: '#ffffff',
                //                                         opacity: 1
                //                                     },
                //                         css : {
                //                             opacity: 1,
                //                             border: 'none',
                //                         }
                //                         })
            },
            success: function(response) 
            {
                // if(response == 0)
                // {
                //   // window.location.href = 'index.php?action=regis'
                // }
                // else if(response == 1)
                // {
                //   // window.location.href = 'index.php?action=home'
                // } 
                console.log(response)   
            },
            complete :function()
            {
                // $('#showbook').unblock()    
            }					
        })
}






      





















    



