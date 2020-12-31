querybook()



function querybook()
{
  var formData = new FormData()
    formData.append('command','allbook')
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
                $('#showbook').block({
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
                    $('#showbook').append(makebookcard(obj[j]))
                    j++;
                }
                console.log(obj)
                // console.log(response)
                // location.reload()      
            },
            complete :function()
            {
                $('#showbook').unblock()    
            }					
        });
}

function makebookcard(bookdetial)
{
  return[
    '<div class="col-lg-5 mt-3">',
    '<a class="card nav-link shadow" href="?action=bookadd">',
      '<div class="card-horizontal">',
        '<div class="img-square-wrapper shadow">',
            '<img class="" src="https://lh3.googleusercontent.com/E_nfV7z6GqS77EiOlKDjXMGP553GudVmV_HjWTrrF96ac6opNdt_1dKa8n7D2ZUGHkq004mtLhOoS_z-AtKMvcWnunYZ9JZsB4GmnYCrLzunzxyyu0BsASVjgM_WNpqj3qyyPMc4=w2400" width="150" height="215" alt="Card image cap">',
        '</div>',
        '<div class="card-body">',
            '<h5 class="card-title">ชื่อหนังสือ : ' + bookdetial.bookname + '</h4>',
            '<p class="card-texts">ผู้เขียน : ใครคนนั้น</p>',
            '<p class="card-text">หมวดหมู่ : คอมพิวเตอร์ โปรแกรม เทคโนโลยี</p>',
            '<p class="card-text">สถานะ : ว่าง</p>',
            '<p class="card-text">กำหนดคืน : --</p>',
        '</div>',
      '</div>',
    '</a>',
  '</div>'
  ].join("")
}