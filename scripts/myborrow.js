$('#header').hide()

// $(document).ready(function(){check_basket()})
// function check_basket()
// {
//     $('#lineItem').empty()
//     var formData = new FormData()
//     formData.append('command','checkmyborrow')
//     formData.append('uid',sessionStorage.getItem('uid'))
//     $.ajax({
//                 url: 'api/api_book_all.php',
//                 method: 'POST',
//                 data:formData,
//                 async: true,
//                 cache: false,
//                 processData: false,
//                 contentType: false,
//                 beforeSend : function()
//                 {  
//                     $('#lineItem').block({
//                                             message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',
//                                             overlayCSS : { 
//                                                             backgroundColor: '#ffffff',
//                                                             opacity: 1
//                                                         },
//                                             css : {
//                                                 opacity: 1,
//                                                 border: 'none',
//                                             }
//                                             })
//                 },
//                 success: function(response) 
//                 {
//                     var obj = JSON.parse(response)
//                     $('#borrow_id').html('ใบยืมหนังสือเลขที่ ' + obj[0].last_bill)
//                     $('#btn_checkout').val(obj[0].last_bill)
//                     if(obj.length == 1)
//                     {
//                         $('#lineItem').append('<div class="text-center"><p>ไม่มีหนังสือที่เลือกไว้</p></div>')
//                         $('#borrow_id_label').hide()
//                         $('#btn_checkout').hide()
//                     }
//                     var j =1;
//                     while(obj[j])
//                     {
//                         $('#lineItem').append(render_lineItem(obj[j],j))
//                         j++;
//                     }
//                 },
//                 complete :function()
//                 {
//                     $('#lineItem').unblock()    
//                 }					
//             })
// }

// function render_lineItem(book,j)
// {
//     var next7day = new Date()
//     next7day.setDate(date.getDate()+ 7)
//     return[
//         '<p>' + j + '.' + book.bookname,
//         '<button class="btn btn-danger float-right">',
//         '<i class="fas fa-trash" onclick="deleteFrombasket(' + book.bookid + "," + book.borrow_id + ')" aria-hidden="true"></i>',
//         '</button>',
//         '</p>กำหนดส่งคืน : ' + dayThai[next7day.getDay()] + ' ' + next7day.getDate() + ' ' + monthThai[next7day.getMonth()] + ' ' + parseInt(next7day.getFullYear() + 543),
//         '<hr>'
//     ].join("")
// }