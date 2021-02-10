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
        /////check bill last////
        $mysql_check_last_bill = "SELECT MAX(bill_id) AS last_bill FROM tbl_bill WHERE uid ='$uid' AND bill_status='0'";
        $query_check = mysqli_query($conn,$mysql_check_last_bill);
        $obj_check = mysqli_fetch_assoc($query_check);
        ///////////////////////
        if($obj_check["last_bill"] == null)
        {
            $sql_creat_bill ="INSERT INTO tbl_bill(uid) VALUES('$uid')";
            $queryinsert = mysqli_query($conn,$sql_creat_bill);
            $lastid = mysqli_insert_id($conn);
            
            $putinsqltext = "INSERT INTO tbl_borrow(uid,book_id,date,bill_id) VALUES('$uid','$bookid','$date','$lastid')";
            mysqli_query($conn,$putinsqltext);
        }
        else if($obj_check["last_bill"] !== null)
        {
            $last_bill = $obj_check["last_bill"];
            echo $lastid;
        }
        // $checkbook = "SELECT * FROM tbl_borrow WHERE book_id='$bookid'";
        // $result = mysqli_query($conn,$checkbook);
        // $num = mysqli_num_rows($result);
        // if($num == 0)
        // {
        //     $putinsqltext = "INSERT INTO tbl_borrow(uid,book_id,date) VALUES('$uid','$bookid','$date')";
        //     mysqli_query($conn,$putinsqltext);
        //     echo '0';
        // }
        // else if($num > 0)
        // {
        //     echo '1';
        // }
        
    }
    else if($cmd == 'checkbasket')
    {
        $uid = $_POST["uid"];
        $queryallbook = "SELECT * FROM tbl_borrow INNER JOIN tbl_book ON tbl_borrow.book_id=tbl_book.bookid WHERE uid='$uid'";
        $query = mysqli_query($conn,$queryallbook);
        $data = array();
        while($obj = mysqli_fetch_assoc($query))
        {
            array_push($data,$obj);
        }
        echo json_encode($data); 
    }
    else if($cmd == 'deletefrombasket')
    {
        $bookid = $_POST["bookid"];
        $queryallbook = "DELETE FROM tbl_borrow WHERE book_id='$bookid'";
        $query = mysqli_query($conn,$queryallbook);
    }
    
?>