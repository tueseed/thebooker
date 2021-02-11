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
var date = new Date()
var dayThai = ['อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัส','ศุกร์','เสาร์']
var monthThai = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหมคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
$(document).ready(function(){check_basket()})
function check_basket()
{
    $('#lineItem').empty()
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
        '<p>' + parseInt(j+1) + '.' + book.bookname,
        '<button class="btn btn-danger float-right"><i class="fas fa-trash" onclick="deleteFrombasket(' + book.bookid + "," + book.borrow_id + ')" aria-hidden="true"i></button>',
        '</p>',
        '<p>ไำก'+ date.getDate() + '</p><hr>'
    ].join("")
}

async function deleteFrombasket(bookid,borrow_id)
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

    if(result.value)
    {
        var formData = new FormData()
        formData.append('command','deletefrombasket')
        formData.append('borrow_id',borrow_id)
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
        await Swal.fire('Deleted!','Your file has been deleted.','success')
        check_basket()
    }
}
