querybookdetail()
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
                    $('#bookname').val(obj[0].bookname)
                    $('#bookname').val(obj[0].bookname)
                    $('#bookname').val(obj[0].bookname)
                    $('#bookname').val(obj[0].bookname)
                    
                    console.log(obj)     
                },
                complete :function()
                {
                    $('#cardbookdetail').unblock()    
                }					
            })
}