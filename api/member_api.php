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
    }else if($cmd == 'queryedit')
    {
        $uid = $_POST["uid"];
        $querymember = "SELECT * FROM tbl_member WHERE lineuid = '$uid'";
        $query = mysqli_query($conn,$querymember);
        $data = array();
        while($obj = mysqli_fetch_assoc($query))
        {
            array_push($data,$obj);
        }
        echo json_encode($data); 
    }else if($cmd == 'editdatamember')
    {
        $uid = $_POST["uid"];
        $membername = $_POST["membername"];
        $memberid = $_POST["memberid"];
        $classroom = $_POST["classroom"];
        $acctype = $_POST["acctype"];
        $accstatus = $_POST["accstatus"];
        $queryupdate = "UPDATE tbl_member SET membername = '$membername',class = '$classroom',memberid = '$memberid',levelaccount = '$acctype',accountstatus = '$accstatus' WHERE lineuid = '$uid'";
        mysqli_query($conn,$queryupdate);
        echo 'edited';
    }else if($cmd == 'checkaccountstatus')
    {
        $uid = $_POST["uid"];
        $sql_check_account_status = "SELECT * FROM tbl_member WHERE lineuid = '$uid'";
        $query_check_account_status = mysqli_query($conn,$sql_check_account_status);
        $data = array();
        while($obj = mysqli_fetch_assoc($query_check_account_status))
        {
            array_push($data,$obj);
        }
        echo json_encode($data); 
    }


?>