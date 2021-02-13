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
var dayThai = ['อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.']
var monthThai = ['ม.ค','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.']
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
                    $('#borrow_id').html('ใบยืมหนังสือเลขที่ ' + obj[0].last_bill)
                    $('#btn_checkout').val(obj[0].last_bill)
                    if(obj.length == 1)
                    {
                        $('#lineItem').append('<div class="text-center"><p>ไม่มีหนังสือที่เลือกไว้</p></div>')
                        $('#borrow_id_label').hide()
                        $('#btn_checkout').hide()
                    }
                    var j =1;
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
    var next7day = new Date()
    next7day.setDate(date.getDate()+ 7)
    return[
        '<p>' + j + '.' + book.bookname,
        '<button class="btn btn-danger float-right">',
        '<i class="fas fa-trash" onclick="deleteFrombasket(' + book.bookid + "," + book.borrow_id + ')" aria-hidden="true"></i>',
        '</button>',
        '</p>กำหนดส่งคืน : ' + dayThai[next7day.getDay()] + ' ' + next7day.getDate() + ' ' + monthThai[next7day.getMonth()] + ' ' + parseInt(next7day.getFullYear() + 543),
        '<hr>'
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

async function checkout(bill_id)
{
    
    var formData = new FormData()
        formData.append('command','checkout')
        formData.append('bill_id',bill_id)
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
                        
                    },
                    complete :function(){$('#lineItem').unblock()}				
                })
        await Swal.fire('สำเร็จ!','ยืมหนังสือเรียบร้อย<br>ดูรายละเอียดได้ที่เมนู <i class="fas fas fa-list-ul"></i>','success')
        check_basket()
    
}
