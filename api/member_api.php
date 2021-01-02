<?php
    require('../utils/db_connector.php');
    $cmd = $_POST['command'];
    if($cmd == 'checkregis')
    {
        $uid = $_POST["uid"];
        $querychecktext = "SELECT * FROM tbl_member WHERE uid ='$uid'";
        $result = mysqli_query($conn,$querychecktext);
        $num = mysqli_num_rows($result);
        echo $num;
    }


?>