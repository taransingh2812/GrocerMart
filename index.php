
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
/**starting the session to start storing the cookies information that will be useful for the website
///to fire fucntions.
*/
include "connect.php";
/// retrieving new user who signed up, name , userId entered, and password
$newName = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);
$newUserId = filter_input(INPUT_POST, "userIdd", FILTER_SANITIZE_STRING);
$newpassword = filter_input(INPUT_POST, "passwordd", FILTER_SANITIZE_STRING);

//validating for a null or empty value entered by the user
$passs=true;
if (trim($newName)==="" || trim($newName)===null || trim($newUserId)==="" || trim($newUserId)===null || trim($newpassword)==="" || trim($newpassword)===null )  
{
        $passs =false;
}

$status=" ";


$cmd = "SELECT * FROM `userids` WHERE `userId`= ?";
$stmt = $dbh->prepare($cmd);
$param = [$newUserId];
$success = $stmt->execute($param);

$status=" ";
if ($row = $stmt->fetch() ) {
    //already exists
    $status = "User Already Exists in the directory Records!!";
 

} 
elseif($passs===false)
{
    //$status = "Invalid Enteries!! Retry again with valid credentials!!";
}
/// Hash and salt the password method to keep the password anonymous or unreadable even if the 
/// intruder passes to retrieve the file
elseif ((!($row = $stmt->fetch())) and $passs===true) {
    $hash = password_hash($newpassword, PASSWORD_DEFAULT);
    $cmd = "INSERT INTO `userids` (`userName`,`userId` , `password`)VALUES (?,?,?)";
    $stmt = $dbh->prepare($cmd);
    $param = [$newName, $newUserId, $hash];
    $success = $stmt->execute($param);
    $status = "New User Inserted in the directory Records!!";

}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grocer Mart</title>
    <link href="style.css" rel="stylesheet">
    <link href="mobile.css" rel="stylesheet">
    <script src="jquery-3.5.1.min.js"></script>
    <script src="design.js"></script>
</head>

<body >
    <h1 class="head4In">Grocer MART : An Online Home Grocery Service</h1>
    <br>
    <div id="user">
        <fieldset id="sign">
            <legend>&nbsp;&nbsp;&nbsp; User Login&nbsp;&nbsp;&nbsp;</legend>
            <form>

                <br>

                <label for="username">Enter Your User ID: </label>
                <input type="text" name="username" id="usernamee" placeholder="Enter you User Id">
            
                <br>
                <label for="password">Enter Password: </label>
                <input type="password" name="passworddd" id="password" placeholder="Enter your passsword">

                <input type="button" id="login" value="Log In">
                <div id="message"><strong><?=$status?></strong></div>

            </form>
            <p>Click
                <a href="signup.html"> Here</a> To Register!!</p>
              

        </fieldset>

    </div>
</body>

</html>