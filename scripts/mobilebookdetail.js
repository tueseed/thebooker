$('#header').hide()
liff
  .init({
    liffId: "1655539437-ploBZxNG" // Use own liffId
  })
  .then(() => {
    liff.getProfile().then(profile => {
                                        const name = profile.displayName
                                        const uid = profile.userId
                                        sessionStorage.setItem('uid',uid)
                            })
  })

querybookdetailformobile()

function querybookdetailformobile()
{
    var bookid =getUrlVars()["bookid"]
    var formData = new FormData()
    formData.append('command','bookdetail')
    formData.append('bookid',bookid)
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
                    $('#detailarea').block({
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
                    if(obj[0].book_status == '0')
                    {
                        var bookstatustext = 'ว่าง'
                        $('#btn_putin').show()
                    }
                    else if(obj[0].book_status == '1')
                    {
                        var bookstatustext = 'ไม่ว่าง'
                        $('#btn_putin').hide()
                    }
                    $('#bookname').html('ชื่อหนังสือ : ' + obj[0].bookname)
                    $('#writer').html('ผู้เขียน : ' + obj[0].writer)
                    $('#category').html('หมวดหมู่ : ' + obj[0].category)
                    $('#status').html('สถานะการยืม : ' + bookstatustext)
                    $('#bookdescription').html('เรื่องย่อ : ' + obj[0].descript)
                    $('#bookcover').attr('src',obj[0].coverimage)
                    $('#bookid').val(obj[0].bookid)
                    
                    console.log(obj)     
                },
                complete :function()
                {
                    $('#detailarea').unblock()    
                }					
            })
}

function putin()
{
    var uid  = sessionStorage.getItem('uid')
    var formData = new FormData()
    formData.append('command','putin')
    formData.append('bookid',$('#bookid').val())
    formData.append('uid',sessionStorage.getItem('uid'))
    $.ajax({
                url: 'api/api_book_all.php',
                method: 'POST',
                data:formData,
                async: true,
                cache: false,
                processData: false,
                contentType: false,
                beforeSend : function(){$('#detailarea').block({message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',overlayCSS : {backgroundColor: '#ffffff',opacity: 1},css : {opacity: 1,border: 'none',}})},
                success: function(response) 
                {
                    $('#detailarea').unblock()
                    if(response == '0')
                    {
                        Swal.fire({
                        title: "หยิบหนังสือใส่ตระกร้าแล้ว",
                        type: 'success' 
                        }).then(location.reload())
                    }
                    else if(response == '1')
                    {
                        Swal.fire({
                            title: "หนังสือเล่มนี้อยู่ในตระกร้าแล้ว",
                            type: 'success' 
                            }).then(location.reload() )
                    }    
                }				
            })
    
}