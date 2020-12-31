
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

function des_session()
{
    sessionStorage.removeItem('data');
    window.location.href = "login.php";
}
function toggle_menu()
{
  document.getElementById('circularMenu').classList.toggle('active');
  
}
  var session  = JSON.parse(sessionStorage.getItem('data'));
  var action = getUrlVars()["action"];
  if(action == 'rg1')
  {
    
    if(session == null)
    {
       // window.location.href = "login.php";
    }
}
    if(session != null)
    {
        var logged = session.TitleFullName + session.FirstName + " " + session.LastName +"        "+'<img src="https://epi.pea.co.th/Images/' + session.Username + '.jpg" class="img-profile rounded-circle" width="50" height="50">'
        document.getElementById('user_logged').innerHTML = logged;
        document.getElementById('office_1').innerHTML = session.BaName;
        document.getElementById('position').innerHTML = session.Position + ' ' + session.LevelDesc;
        document.getElementById('DepartmentFullName').innerHTML = session.DepartmentFullName;
        check_admin(session.EmployeeId);
    }


      





















    



