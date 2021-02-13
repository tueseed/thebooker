<?php
    require('../../utils/db_connector.php');
    $bill_status = $_GET["bill_status"];
    $sql = "SELECT * FROM tbl_bill INNER JOIN tbl_member ON tbl_bill.uid = tbl_member.lineuid WHERE bill_status='$bill_status'";
    $query_case = mysqli_query($conn,$sql);
    $obj_case = mysqli_fetch_all($query_case,MYSQLI_ASSOC);
    echo json_encode($obj_case);
?>