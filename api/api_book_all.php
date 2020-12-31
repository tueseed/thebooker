<?php
    require('../utils/db_connector.php');
    $cmd = $_POST['command'];
    if($cmd == 'add')
    {
        $bookname = $_POST["bookname"];
        $writer = $_POST["writer"];
        $category = $_POST["category"];
        $coverurl = $_POST["coverurl"];
        $description = $_POST["description"];
        $querytextadd = "INSERT INTO tbl_book(bookname,writer,category,descript,coverimage) VALUES('$bookname','$writer','$category','$description','$coverurl')";
        mysqli_query($conn,$querytextadd);
        echo 'Inseerted';
    }
    
?>