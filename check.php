<?php
session_start();
/**
 *     Name: Taran Preet Singh
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

include "connect.php";

$user = filter_input(INPUT_GET, "username", FILTER_SANITIZE_STRING);
$pass = filter_input(INPUT_GET, "passworddd", FILTER_SANITIZE_STRING);
$send = [];
//validation for null and empty strings
if ($user === " " || $user === null || $pass === " " || $pass === null) {
 
    $send[]=-1;
  
    echo json_encode($send);
}
else{
//array initiated to return



$cmd = "SELECT * from `userids` where `userId`= ?";
$stmt = $dbh->prepare($cmd);
$param = [$user];
$success = $stmt->execute($param);
$hash=" ";
if ($row =$stmt->fetch())
{
$hash = $row["password"];
}
//verification of the user entered password and the one which is hashed uing the password_verify function
if (password_verify($pass, $hash)) {
    $cmd = "SELECT * from `userids` where `userId`= ? AND `password` = ?";
    $stmt = $dbh->prepare($cmd);
    $param = [$user, $hash];
    $success = $stmt->execute($param);
    $row =$stmt->fetch();

        $_SESSION["userId"] = $user;
        $_SESSION["password"] = $hash;
        $_SESSION["naam"] = $row["userName"];
        array_push($send, 1);
    } 
    else {
        array_push($send, -1);
        session_unset();
        session_destroy();
    }

echo json_encode($send);
}

