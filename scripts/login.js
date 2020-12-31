function call_auth()
{
    window.location.href = "index.php?action=rg1" //bypass
    var UserName = document.getElementById("employeeCode").value;
    var PassWord = document.getElementById("employeePassword").value;
    var formData = new FormData();
	formData.append('UserName',UserName);
	formData.append('PassWord',PassWord);
	$.ajax({
			url: './api/call_auth_api.php',
			method: 'POST',
			data: formData,
			async: true,
			cache: false,
			processData: false,
            contentType: false,
            statusCode:{
                500:function()
                            {
                                $("#login_alert").html("**เกิดความผิดพลาดในการเข้าสู่ระบบ**");
                                console.log("500");
                            },
                401:function()
                            {
                                $("#login_alert").html("**เกิดความผิดพลาดในการเข้าสู่ระบบ**");
                                console.log("401");
                            }
            },
            beforeSend : function()
            {
                //$.blockUI({message : '<h1>กำลังเข้าสู่ระบบ</h1>'});
                console.log("beforesend.....");
                $.blockUI({
                    message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div><br/><h1 class="font-weight-bold text-pea">กำลังเข้าสู่ระบบ.......</h1>',
                    overlayCSS : { 
                      backgroundColor: '#ffffff',
                      opacity: 1
                    },
                    css : {
                      opacity: 1,
                      border: 'none',
                    }
                  });
            },
			success: function(response) {
                        var obj = JSON.parse(response) || {};
                        sessionStorage.setItem('data',response); 
                        console.log(obj);   
                    },
            complete :function()
            {
                console.log("complete...");
                var session  = JSON.parse(sessionStorage.getItem('data'));
                $.unblockUI();
                if(session !== null)
                {
                    console.log((session.BaCode).substr(0,1) + " From Complete fn..");
                    var office =(session.BaCode).substr(0,1);
                    var num_code = (session.BaCode).substr(1,3);
                    if(office == 'Z' || session.EmployeeId == '00500290')
                    {
                       window.location.href = "index.php?action=rg1";
                    }
                    else if(num_code == '000')
                    {
                        window.location.href = "index.php?action=rg1";
                    }
                    else if(num_code !== '000')
                    {
                        window.location.href = "index.php?action=rg1";
                    }
                //window.location.href = "index.php";
                }
            }			
            });
}

$(document).ready(function(){
    $('#employeePassword').keypress(function(e){
                                                if(e.keyCode==13)
                                                {
                                                       call_auth()
                                                }
    });
});





