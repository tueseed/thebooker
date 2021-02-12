$('#header').hide()
$('#circularMenu').hide()
liff
  .init({
    liffId: "1655539437-ploBZxNG" // Use own liffId
  })

function regis_member()
{
    var formData = new FormData()
    formData.append('command','regis')
    formData.append('uid',sessionStorage.getItem('uid'))
    formData.append('name',$('#membername').val())
    formData.append('classroom',$('#classroomOffice').val())
    formData.append('memberid',$('#staffId').val())
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
                $('#regisarea').block({
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
                
                console.log(response)
                  
            },
            complete :function()
            {
                // $('#cardaddbook').unblock()
                // Swal.fire({
                //     title: "เพิ่มข้อมูลหนังสือสำเร็จ",
                //     type: 'success'
                    
                //   }).then(location.reload() ) 
                $('#regisarea').unblock()  
            }					
        });
}