
<?php
    session_start();
    /**
    *  Name: Taran Preet Singh
    * Student Number: 000824301
    *Course Name: PHP and JAVASCRIPT
    *Project Description: This final Project involves the use of all the elements one has learnt in semester 1 
    *and in semesterr 3 in HTMLCSS and PHP&JS course respectively. The concept behind the application is an online
    *GROCERY MARKET named as GROCER MART, where one can add or remove items from their carts, getting the total price
    *for the service and proceeding to checkout. The project involves vast use of JS and PHP more than regular 
    *HTMLCSS. The JS also involved the use of JSON and AJAX REQUESTS TO communicate with the database to extract the 
    *desired data from it and also creating new if any new user registers on the website.Both Jquery and security plan
    *points have been implemented in all the files used for this project. The limit of selecting item is limited to
    *one due to the COVID 19 pandemic stock scarcity, so more people can have accessiblility to the resources. I hope
    *you would like the concept and structure of the web application.
 */
    //assigning name varriable the session cookie index named userId
    $name= $_SESSION["userId"];
    include "connect.php"; 
    $item = filter_input(INPUT_GET , "itemName" , FILTER_SANITIZE_STRING);

    $cmd = "SELECT `price` FROM `itemlist` WHERE `itemName`= ?";
    $stmt = $dbh->prepare($cmd);
    $param = [$item];
    $success = $stmt->execute($param);

    
    
    if($row = $stmt->fetch()){
        $price = $row["price"];
        }
//checking cart
    $cmd = "SELECT * FROM `cart` WHERE `itemName`= ? AND `userId` =?";
    $stmtt = $dbh->prepare($cmd);
    $param = [$item , $name];
    $success = $stmtt->execute($param);

    if($roww = $stmtt->fetch()){
            //empty as item already exist in the cart
    }
    else {
        $cmd = "INSERT INTO `cart`(`itemName`, `price`, `userId`) VALUES (?,?,?)";
        $stmt = $dbh->prepare($cmd);
        $param = [$item , $price , $name];
        $success = $stmt->execute($param);
    }
    

    echo json_encode($price);
   
