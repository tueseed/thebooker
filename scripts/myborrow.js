$('#header').hide()

$(document).ready(function(){check_basket()})
function check_basket()
{
    $('#lineItem').empty()
    var formData = new FormData()
    formData.append('command','checkmyborrow')
    formData.append('uid',sessionStorage.getItem('uid'))
    // formData.append('uid','Ud3fc4e16f6783511912c838e9c4a4149')
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
                    console.log(obj)
                    
                    // $('#borrow_id').html('ใบยืมหนังสือเลขที่ ' + obj[0].last_bill)
                    // $('#btn_checkout').val(obj[0].last_bill)
                    // if(obj.length == 1)
                    // {
                    //     $('#lineItem').append('<div class="text-center"><p>ไม่มีหนังสือที่เลือกไว้</p></div>')
                    //     $('#borrow_id_label').hide()
                    //     $('#btn_checkout').hide()
                    // }
                    var j =0;
                    while(obj[j])
                    {
                        $('#lineItem').append(render_billlist(obj[j],j))
                        j++;
                    }
                },
                complete :function()
                {
                    $('#lineItem').unblock()    
                }					
            })
}

function render_billlist(bill,j)
{

    var detail = ''
    var k = 0
    while(bill.book[k])
    {
        detail = detail + render_detail_bill(bill.book[k],k)
        k++
    }
    
    return[
        '<p>'+ parseInt(j+1 )+'.ใบยืมเลขที่ ' + bill.bill_id + ' กำหนดส่งคืน ' + bill.date_2,
        '<button class="btn btn-success float-right" data-toggle="collapse" data-target="#bill'+bill.bill_id+'" aria-expanded="false" aria-controls="collapseExample">',
            '<i class="fas fa-eye" aria-hidden="true"></i>',
        '</button>',
        '</p>',
    '<div class="collapse" id="bill'+bill.bill_id+'">',
        '<div>'+detail,
            // <p>1.ชื่อหนังสือ</p>
            // <p>1.ชื่อหนังสือ</p>
            // <p>1.ชื่อหนังสือ</p>
            // <p>1.ชื่อหนังสือ</p>
        '</div>',
    '</div><hr>'
    ].join("")
}

function render_detail_bill(book,k)
{
    var bookstatus = book.return_status
    var textadd = ''
    var textcolor = ''
    if(bookstatus == '0')
    { 
      textadd=' (คืนแล้ว)'
      textcolor ='text-secondary'
    }
    else if(bookstatus == '1')
    {
        textadd=' '
        textcolor ='text-success'
    }
    return[
     '<p class="' + textcolor + '">'+parseInt(k+1)+'.'+book.bookname + textadd + '</p>'
 ].join("")
}