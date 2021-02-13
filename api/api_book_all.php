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
        $datereturn = date( "Y-m-d", strtotime( "$date +7 day" ) );
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
            
            $putinsqltext = "INSERT INTO tbl_borrow(uid,book_id,date,bill_id,date_return) VALUES('$uid','$bookid','$date','$lastid','$datereturn')";
            mysqli_query($conn,$putinsqltext);
            echo '0';
        }
        else if($obj_check["last_bill"] !== null)
        {
            $last_bill = $obj_check["last_bill"];

            $checkbook = "SELECT MAX(borrow_id) AS lastbill FROM tbl_borrow WHERE book_id='$bookid' AND bill_id='$last_bill'";
            $result = mysqli_query($conn,$checkbook);
            $obj_chk = mysqli_fetch_assoc($result);
            
            if($obj_chk["lastbill"] == null)
            {
                $putinsqltext = "INSERT INTO tbl_borrow(uid,book_id,date,bill_id,date_return) VALUES('$uid','$bookid','$date','$last_bill','$datereturn')";
                mysqli_query($conn,$putinsqltext);
                echo '0';
            }
            else if($obj_chk["lastbill"] !==null)
            {
                echo '1';
            }
        }
        
        
    }
    else if($cmd == 'checkbasket')
    {
        $uid = $_POST["uid"];

        $mysql_check_last_bill = "SELECT MAX(bill_id) AS last_bill FROM tbl_bill WHERE uid ='$uid' AND bill_status='0'";
        $query_check = mysqli_query($conn,$mysql_check_last_bill);
        $obj_check = mysqli_fetch_assoc($query_check);
        $last_bill = $obj_check["last_bill"];

        $queryallbook = "SELECT * FROM tbl_borrow INNER JOIN tbl_book ON tbl_borrow.book_id=tbl_book.bookid WHERE uid='$uid' AND bill_id='$last_bill'";
        $query = mysqli_query($conn,$queryallbook);
        $data = array();
        array_push($data,$obj_check);
        while($obj = mysqli_fetch_assoc($query))
        {
            array_push($data,$obj);
        }
        echo json_encode($data); 
    }
    else if($cmd == 'deletefrombasket')
    {
        $borrow_id = $_POST["borrow_id"];
        $queryallbook = "DELETE FROM tbl_borrow WHERE borrow_id='$borrow_id'";
        $query = mysqli_query($conn,$queryallbook);
    }
    else if($cmd == 'checkout')
    {
        $date = date('Y-m-d H:i:s');
        $datereturn = date( "Y-m-d", strtotime( "$date +7 day" ) );
        
        $bill_id = $_POST["bill_id"];
        $sqlcheckout = "UPDATE tbl_bill SET bill_status=1,date_1='$date',date_2='$datereturn' WHERE bill_id='$bill_id'";
        mysqli_query($conn,$sqlcheckout);

        $sql_from_borrow_for_updatebook = "SELECT * FROM tbl_borrow WHERE bill_id='$bill_id'";
        $query_from_borrow_for_updatebook = mysqli_query($conn,$sql_from_borrow_for_updatebook);
        
        while($obj_book_for_update = mysqli_fetch_assoc($query_from_borrow_for_updatebook))
        {
            $bookid = $obj_book_for_update["book_id"];
            $sql_update_book = "UPDATE tbl_book SET book_status=1 WHERE bookid='$bookid'";
            mysqli_query($conn,$sql_update_book);
        }
    }
    else if($cmd == 'checkmyborrow')
    {
        $uid = $_POST["uid"];
        $sql_bill = "SELECT * FROM tbl_bill WHERE uid='$uid' AND bill_status=1";
        $query = mysqli_query($conn,$sql_bill);
        $data = array();
        while($obj = mysqli_fetch_assoc($query))
        {
            $bill_id =$obj["bill_id"];
            $sql_book = "SELECT * FROM tbl_borrow INNER JOIN tbl_book ON tbl_borrow.book_id=tbl_book.bookid WHERE bill_id ='$bill_id'";
            $querybook = mysqli_query($conn,$sql_book);
            $objbook = mysqli_fetch_all($querybook,MYSQLI_ASSOC);
            $obj["book"]= $objbook;
            array_push($data,$obj);
        }
        echo json_encode($data); 
    }
    else if($cmd == 'manageborrow')
    {
        $bill_id = $_POST["bill_id"];
        $sqltextmanageborrow = "SELECT * FROM tbl_borrow INNER JOIN tbl_book ON tbl_borrow.book_id = tbl_book.bookid WHERE bill_id ='$bill_id'";
        $query = mysqli_query($conn,$sqltextmanageborrow);
        $data = array();
        while($obj = mysqli_fetch_assoc($query))
        {
            array_push($data,$obj);
        }
        echo json_encode($data); 
    }
    else if($cmd == 'returnbook')
    {
        $bookid = $_POST["bookid"];
        $borrowid = $_POST["borrowid"];
        $billid = $_POST["billid"];
        $sqlreturnbook = "UPDATE tbl_book SET book_status = 0 WHERE bookid='$bookid'";
        mysqli_query($conn,$sqlreturnbook);

        $sql_update_return_status_in_borrow_tbl = "UPDATE tbl_borrow SET return_status = 0 WHERE borrow_id ='$borrowid'";
        mysqli_query($conn,$sql_update_return_status_in_borrow_tbl);

        $sql_check_book_in_bill = "SELECT sum(return_status) AS result FROM tbl_borrow WHERE bill_id='$billid'";
        $query_check_book_in_bill = mysqli_query($conn,$sql_check_book_in_bill);
        $obj_check_book_in_bill = mysqli_fetch_assoc($query_check_book_in_bill);
        if($obj_check_book_in_bill["result"] == '0')
        {
            $sql_update_close__bill = "UPDATE tbl_bill SET bill_status =2 WHERE bill_id='$billid'";
            mysqli_query($conn,$sql_update_close__bill);
            
        }
    }
    else if($cmd == 'checkbookstatus')
    {
        $bookid = $_POST["bookid"];
        $sqlcheckbookstatus = "SELECT * FROM tbl_book WHERE bookid = '$bookid'";
        $querycheck = mysqli_query($conn,$sqlcheckbookstatus);
        $obj = mysqli_fetch_assoc($querycheck);
        echo $obj["book_status"];
    }
    
?>