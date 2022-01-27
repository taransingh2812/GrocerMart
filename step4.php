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
/// The step4 php file where it shows the delivery placed message to the user
/// and shows the link to click to get logged out.
///After reaching this page the user can't reverse back to the prior page to edit items for placing order.
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grocer MART: Order Placed</title>
    <link href="style.css" rel="stylesheet">
</head>
<body class="step2">
<?php
///accessed to be denied if someone tries to directly try reaching this page with not entering credentials or 
/// stored cookies present there.
if (!isset($_SESSION["userId"]) or !isset($_SESSION["password"]))
{?>
       <h1>Login Error! Access denied.</h1>
        <a href="index.php">Try again.</a>

<?php
}
else{
    
  ?>
<h1>Grocer MART :  An Online Home Grocery Service</h1>

    

    <h3> Your Order Has been Placed. Delivery Info. Form will be avaialble to you on the Grocer App Shortly</h3>
    <h3> Thanks for shopping with Us.   <?=$_SESSION["naam"]?> </h3> 
    <a href="logout.php">Click to Logout.</a>
<?php
///session cookies to be destroyed once order placed by the registered user.
session_unset();
session_destroy();
}
?>
</body>
</html>