<?php

session_start();
session_unset();
session_destroy();
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
///This page starts by destroying if present cookies and shows the user the link to click to revisit the form page
/// in case the user wants to revisit the account.
?><!DOCTYPE html>
<html>

<head>
    <title>LogOut</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <h1>You are logged out.</h1>
    <a href="index.php">Log in again</a>
</body>

</html>