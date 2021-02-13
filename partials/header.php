<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>ระบบยืมหนังสือผ่านเว็บแอพพลิเคชั่น</title>
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/theme_1545570683953.css">
    <!-- <link rel="stylesheet" href="./assets/css/star-rating.css"> -->
    <link href="https://fonts.googleapis.com/css?family=Sarabun|Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.14.2/dist/bootstrap-table.min.css">
    <link rel="stylesheet" href="./assets/css/bootstrap-table-sticky-header.css">
    <link rel="stylesheet" href="./assets/css/effect.css">
    <link rel="stylesheet" href="./assets/css/sidemenu.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker.min.css" />
    <!-- <link rel="icon" href="./pic/logo-auc.png" type="image/gif" sizes="64x64"> -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet">

    <style>
      * {
        font-family: 'Prompt', sans-serif;
      }
    </style>
  </head>

  <body>
    <header class="pb-3" id="header">
      <!-- Image and text -->
      <nav class="shadow-sm navbar navbar-light shadow" style = "background-color: #DDB892;">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="?action=home" style="font-size: 36px;">
            ระบบยืมหนังสือผ่านเว็บแอพพลิเคชั่น
          </a>
          <div class="dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                <span class="header text-dark font-weight-bold text-center" id="user_logged">
                  <span class="text-white" id="userName">ยังไม่ได้เข้าสู่ระบบ</span>
                  <span class="item">
                    <span class="notify-badge" id="notifyNumber"></span>
                    <img class="shadow-sm" src="" id="userPicture" style="width:50px;height:50px;border-radius:50px 50px;"/>
                  </span>
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right justify-content-center">
                <div class="dropdown-item">
                  <span id = "DepartmentFullName"></span>
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="?action=memberdata" name="admin_menu1" id="admin_menu_1">
                  <i class="fas fa-book-medical fa-sm fa-fw mr-2 text-gray-400"></i>
                  จัดการข้อมูลสมาชิก
                </a>
                <a class="dropdown-item" href="?action=bookadd" name="admin_menu1" id="admin_menu_2">
                  <i class="fas fa-book-medical fa-sm fa-fw mr-2 text-gray-400"></i>
                  เพิ่มข้อมูลหนังสือ
                </a>
                <a class="dropdown-item" href="?action=return" name="admin_menu1" id="admin_menu_3">
                  <i class="fas fa-book-medical fa-sm fa-fw mr-2 text-gray-400"></i>
                  ข้อมูลการยืม
                </a>
                <a class="dropdown-item" href="#" onclick="des_session()">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  ออกจากระบบ
                </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main class="mb-3" id="main">
      <div class="container-fluid">
        <div class="row">      
          <div class="col-sm-10 col-md-10 col-lg-12">
          