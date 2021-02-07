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
        echo 'Inserted';
    }
    else if($cmd == 'allbook')
    {
            $queryallbook = "SELECT * FROM tbl_book";
            $query = mysqli_query($conn,$queryallbook);
            $data = array();
            while($obj = mysqli_fetch_assoc($query))
            {
                array_push($data,$obj);
            }
            echo json_encode($data); 
    }
    else if($cmd == 'bookdetail')
    {
        $bookid = $_POST["bookid"];
        $queryallbook = "SELECT * FROM tbl_book WHERE bookid='$bookid'";
        $query = mysqli_query($conn,$queryallbook);
        $data = array();
        while($obj = mysqli_fetch_assoc($query))
        {
            array_push($data,$obj);
        }
        echo json_encode($data); 
    }
    else if($cmd == 'editbook')
    {
        $bookid = $_POST["bookid"];
        $bookname = $_POST["bookname"];
        $writer = $_POST["writer"];
        $category = $_POST["category"];
        $coverurl = $_POST["coverurl"];
        $description = $_POST["description"];
        $forrent = $_POST["rentselect"];
        $queryallbook = "UPDATE tbl_book SET bookname = '$bookname',writer='$writer',category='$category',coverimage='$coverurl',descript='$description',forrent='$forrent' WHERE bookid='$bookid'";
        mysqli_query($conn,$queryallbook);
        echo $queryallbook;
    }
    else if($cmd == 'putin')
    {
        $date = date('Y-m-d H:i:s');
        $bookid = $_POST["bookid"];
        $uid = $_POST["uid"];
        $putinsqltext = "INSERT INTO tbl_borrow(uid,book_id,date) VALUES('$uid','$bookid','$date')";
        mysqli_query($conn,$putinsqltext);
        echo 'in to the basket';
    }
    
?>