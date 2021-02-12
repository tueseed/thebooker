$('#circularMenu').hide()

querybookdetail()

function reqpicurl()
{
    if($('#bookcoverimage').length == 0)
    {
        $('#bookcover').attr('src','images/bookcover.jpg')
    }
    $('#bookcover').attr('src',$('#bookcoverimage').val())
}
function imgError(image) {
    image.onerror = " ";
    image.src = "images/bookcover.jpg";
    return true;
}
//-----------ตรวจสอบการกด Spacebar เพื่อใส่เครื่องหมาย , --------//
$('#category').keypress(function(e) {
    if (e.which === 32) {
                            var cateInput = $('#category').val()  
                            $('#category').val(cateInput+',')
    }
    var cateInput1 = $('#category').val() 
    $('#category').val(cateInput1.split(' ').join(''))
})

function querybookdetail()
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
                    $('#cardbookdetail').block({
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
                    if(obj[0].status == '0')
                    {
                        var bookstatustext = 'ว่าง'
                    }
                    else if(obj[0].status == '1')
                    {
                        var bookstatustext = 'ไม่ว่าง'
                    }
                    $('#bookname').val(obj[0].bookname)
                    $('#writer').val(obj[0].writer)
                    $('#category').val(obj[0].category)
                    $('#bookcoverimage').val(obj[0].coverimage)
                    $('#status').val(bookstatustext)
                    $('#rentselect').val(obj[0].forrent)
                    $('#bookdescription').val(obj[0].descript)
                    $('#bookcover').attr('src',obj[0].coverimage)
                    
                    console.log(obj)     
                },
                complete :function()
                {
                    $('#cardbookdetail').unblock()    
                }					
            })
}

function editbook()
{
    if($('#editsavebtn').val() == 'edit')
    {
        $('#editsavebtn').html('<i class="fas fa-check-circle"></i> บันทึก')
        $('#editsavebtn').val('save')
        $("input[name^='bookdetail']").prop('disabled', false)
        $("select[name^='bookdetail']").prop('disabled', false)
        $("textarea[name^='bookdetail']").prop('disabled', false)
    }
    else if($('#editsavebtn').val() == 'save')
    {
        // $('#editsavebtn').html('<i class="fas fa-check-circle"></i> แก้ไขข้อมูล')
        // $('#editsavebtn').val('edit')
        var bookid =getUrlVars()["bookid"]
        var formData = new FormData()
        formData.append('command','editbook')
        formData.append('bookid',bookid)
        formData.append('bookname',$('#bookname').val())
        formData.append('writer',$('#writer').val())
        formData.append('category',$('#category').val())
        formData.append('coverurl',$('#bookcoverimage').val())
        formData.append('description',$('#bookdescription').val())
        formData.append('rentselect',$('#rentselect').val())
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
                        $('#cardbookdetail').block({
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
                        $('#cardbookdetail').unblock()  
                        Swal.fire({
                            title: "อัพเดทข้อมูลหนังสือสำเร็จ",
                            type: 'success'
                            
                          }).then(location.reload() )   
                    }					
                })
    }
}