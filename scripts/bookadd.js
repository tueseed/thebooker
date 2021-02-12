$('#circularMenu').hide()
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

function addbook()
{
    var formData = new FormData()
    formData.append('command','add')
    formData.append('bookname',$('#bookname').val())
    formData.append('writer',$('#writer').val())
    formData.append('category',$('#category').val())
    formData.append('coverurl',$('#bookcoverimage').val())
    formData.append('description',$('#bookdescription').val())
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
                $('#cardaddbook').block({
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
                // var obj = JSON.parse(response)
                // var j =0;
                // while(obj[j])
                // {
                //     render_tech_card(obj[j])
                //     j++;
                // }
                // console.log(obj)
                console.log(response)
                // location.reload()      
            },
            complete :function()
            {
                $('#cardaddbook').unblock()
                Swal.fire({
                    title: "เพิ่มข้อมูลหนังสือสำเร็จ",
                    type: 'success'
                    
                  }).then(location.reload() ) 
                   
            }					
        });
}