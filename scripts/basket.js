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
    alert('in function check')
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
                        // $('#lineItem').append(render_lineItem(obj[j]))
                        alert(obj[j].bookid)
                        j++;
                    }
                    // alert('----')
                },
                complete :function()
                {
                    $('#lineItem').unblock()    
                }					
            })
}

function render_lineItem(book)
{
    return[
        '<p>' + book.id,
        '<span class="font-weight-bold text-danger">',
        '<i class="fas fa-trash float-right" onclick="del()" aria-hidden="true"i>',
        '</span></p><hr>'
    ].join("")
}