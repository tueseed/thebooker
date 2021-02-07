<?php

    $checkbook = "SELECT * FROM tbl_borrow WHERE book_id='11'";

    $result = mysqli_query($conn,$checkbook);
    $obj = mysqli_num_rows($result);
 
    echo $obj;



?>