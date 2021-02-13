
setUserdata()

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setUserdata()
{
    $('#userName').html(sessionStorage.getItem('name'))
    $('#userPicture').attr('src',sessionStorage.getItem('display_url'))
}

function toggle_menu()
{
    document.getElementById('circularMenu').classList.toggle('active');
}

$('#admin_menu_1').hide()
$('#admin_menu_2').hide()
$('#admin_menu_3').hide()










      





















    



