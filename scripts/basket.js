$('#header').hide()
// liff
//   .init({
//     liffId: "1655539437-ploBZxNG" // Use own liffId
//   })
//   .then(() => {
//     liff.getProfile().then(profile => {
//                                         const name = profile.displayName
//                                         const uid = profile.userId
//                                         sessionStorage.setItem('uid',uid)
//                                         alert(uid)
//                             })
//   })

$(document).ready(function(){check_basket()})
function check_basket()
{
    var formData = new FormData()
    formData.append('command','checkbasket')
    formData.append('uid',sessionStorage.getItem('uid'))
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
                    $('#lineItem').block({
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
                        $('#lineItem').append(render_lineItem(obj[j],j))
                        j++;
                    }
                },
                complete :function()
                {
                    $('#lineItem').unblock()    
                }					
            })
}

function render_lineItem(book,j)
{
    return[
        '<p>' + j + '.' + book.bookname,
        '<span class="font-weight-bold text-danger">',
        '<i class="fas fa-trash float-right" onclick="deleteFrombasket(' + book.book_id + ')" aria-hidden="true"i>',
        '</span></p><hr>'
    ].join("")
}

async function deleteFrombasket(bookid)
{
    // alert(bookid)
    var bookname = ''
    var formData = new FormData()
    formData.append('command','bookdetail')
    formData.append('bookid',bookid)
    await $.ajax({
                url: 'api/api_book_all.php',
                method: 'POST',
                data:formData,
                async: true,
                cache: false,
                processData: false,
                contentType: false,
                beforeSend : function(){$('#lineItem').block({message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',overlayCSS : {backgroundColor: '#ffffff',opacity: 1},css : {opacity: 1,border: 'none',}})},
                success: function(response) 
                {
                    var obj = JSON.parse(response)
                    bookname = obj[0].bookname
                },
                complete :function(){$('#lineItem').unblock()}				
            })
    var result = await Swal.fire({
                        title: 'คุณต้องการลบ?',
                        text: bookname + ' ออกจากตระกร้า',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'ใช่ ลบเลย',
                        cancelButtonText: 'ยกเลิก'
                    })
                    // .then((result) => {
                    //                     if (result.isConfirmed) {
                    //                     Swal.fire(
                    //                         'Deleted!',
                    //                         'Your file has been deleted.',
                    //                         'success'
                    //                     )
                    //                     }
                    //                     })
    alert(JSON.stringify(result))
    alert(result.value)
}
