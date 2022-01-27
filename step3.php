<?php
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
///This page involves showing the user the items they added to the cart, the price for each item and 
/// total money to be paid after tax of 13% on the total sum of the products.
session_start();
include "connect.php";

?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grocer MART</title>
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
    $sum=0;
    $count=0;
    $cmd = "SELECT * FROM cart where `userId`=? ";
    $stmt = $dbh->prepare($cmd);
    $param = [$_SESSION["userId"]];
    $success = $stmt->execute($param);


  ?>
    
<h1>Grocer MART :  An Online Home Grocery Service</h1>

<div class="headers">
    <h2><a href="step2.php">Grocery List</a></h2>

    </div>

    <div class="cartItems">

    <table>

    <tr>
        <td>Item Name</td>
        <td>Item Price</td>

</tr>
    <?php
///printing the table items in the rows and columns to give an attractive view to its user.
while ($row=$stmt->fetch())
{ 
   echo "<tr>
    <td>$row[itemName]</td>
    <td>$row[price]</td>
    </tr>";
    $count++;
    $sum += $row["price"]; 
}
?>
<tr>
    <td>Sum Total:</td>
    <td>$<?=$sum?></td>
    
</tr>
<tr>
    <td>H.S.T.</td>
    <td>13%</td>
</tr>
 
 <tr>
     <!--Calculating the total price by adding the tax to the total sum for products inside the cart-->
     <td>Total Price:</td>
     <td>$<?= number_format($sum+ 0.13*$sum);?></td>
</tr>

    </table>
  
    </div> 
    <div class="button"><a href="step4.php">
<!--Button to be clicked if the use wants to finalise the order -->
<input type="submit" id="checkout" name="checkout" value="Proceed To Checkout!!">
</a></div>
<?php
}?>
</body>
</html>