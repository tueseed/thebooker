<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>ALL PEA</title>
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/theme_1545570683953.css">
    <link rel="stylesheet" href="./assets/css/star-rating.css">
    <link href="https://fonts.googleapis.com/css?family=Sarabun|Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.14.2/dist/bootstrap-table.min.css">
    <link rel="stylesheet" href="./assets/css/bootstrap-table-sticky-header.css">
    <link rel="stylesheet" href="./assets/css/effect.css">
    <link rel="stylesheet" href="./assets/css/sidemenu.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker.min.css" />
    <link rel="icon" href="./pic/logo-auc.png" type="image/gif" sizes="64x64">
  
    <style>
      * {
        font-family: 'Sarabun', 'Roboto', sans-serif;
      }
    </style>
  </head>

  <body>
    <header class="pb-3">
      <!-- Image and text -->
      <nav class="shadow-sm navbar navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand font-weight-bold" href="?action=rg1">
            <img src="./assets/images/pea-logo.png" width="100" class="d-inline-block align-top" alt="">
            ALL PEA <span id="head_peaname"></span>
          </a>
          <div class="dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
              <span class="header text-dark font-weight-bold text-center" id="user_logged">
                ยังไม่ได้เข้าสู่ระบบ
                <img src="http://dynamicwork.net/wp/wp-content/uploads/2014/01/logo-PEA.png" width="75" height="50">
              </span>
            </a>
            <div class="dropdown-menu dropdown-menu-right justify-content-center">
                <div class="dropdown-item">
                  <span id = "office_1"></span>
                </div>
                <div class="dropdown-item">
                  <span id = "position"></span>
                </div>
                <div class="dropdown-item">
                  <span id = "DepartmentFullName"></span>
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="?action=submit" name="admin_menu1" id="admin_menu1">
                  <i class="fas fa-marker fa-sm fa-fw mr-2 text-gray-400"></i>
                  Submit Application
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
          