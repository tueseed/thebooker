<?php
    require('../../utils/db_connector.php');
    //$cri_cmd = $_GET["cri_cmd"];
    $sql = "SELECT * FROM tbl_member";
    $query_case = mysqli_query($conn,$sql);
    $obj_case = mysqli_fetch_all($query_case,MYSQLI_ASSOC);
    echo json_encode($obj_case);
?>