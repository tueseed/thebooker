<?php
    require('../utils/db_connector.php');
    $hub_code = $_POST["hub_code"];
    $cmd = $_POST['cmd'];
    $office =$_POST['keyword'];
    if($cmd == 'all')
    {
        $sql_text ="SELECT * FROM tbl_office WHERE peacode LIKE '%$hub_code%'";
        $query = mysqli_query($conn,$sql_text);
    }else if($cmd == 'office')
    {
        $sql_text ="SELECT * FROM tbl_office WHERE peacode LIKE '%$hub_code%' AND peaname LIKE '%$office%'";
        $query = mysqli_query($conn,$sql_text);
    }
    
    $data = array();
    while($obj = mysqli_fetch_assoc($query))
    {
        array_push($data,$obj);
    }
    echo json_encode($data);  
?>