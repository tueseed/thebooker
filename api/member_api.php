<?php
    require('../utils/db_connector.php');
    $cmd = $_POST['command'];
    if($cmd == 'checkregis')
    {
        $uid = $_POST["uid"];
        $querychecktext = "SELECT * FROM tbl_member WHERE lineuid ='$uid'";
        $result = mysqli_query($conn,$querychecktext);
        $num = mysqli_num_rows($result);
        echo $num;
    }else if($cmd == 'regis')
    {
        $uid = $_POST["uid"];
        $membername = $_POST["name"];
        $classroom = $_POST["classroom"];
        $numberid = $_POST["memberid"];
        $querytextadd = "INSERT INTO tbl_member(lineuid,membername,class,memberid,levelaccount,accountstatus) VALUES('$uid','$membername','$classroom','$memberid','0','0')";
        mysqli_query($conn,$querytextadd);
        echo 'registed';
    }


?>