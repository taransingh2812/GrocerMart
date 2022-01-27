
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
  // session started to store and use earlier saved cookies

?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grocer MART</title>
    <link href="style.css" rel="stylesheet">
    <link href="mobile.css" rel="stylesheet">
    <script src="jquery-3.5.1.min.js"></script>
    <script src="step2.js"></script>
</head>
<body class="step2">
  <!--If statment to check if the cookies stored earlier or not, if not then show  user the message to try 
  again and not enter the shopping interface-->
<?php
if (!isset($_SESSION["userId"]) and !isset($_SESSION["password"]))
{?>
       <h1>Login Error! Access denied.</h1>
        <a href="index.php">Try again.</a>
<?php
}
else{
  ?>
<h1>Grocer MART :  An Online Home Grocery Service</h1>


<div class="headers">
    <h2><a href="step2.php">Grocery List</a></h2>
    <div  class="cart"><a href="step3.php"><img src="pics/cart.jpg" alt="photo"></a></div>
</div>
<pre>Due to COVID-19 pandemic, the selection of item per cutomer visit is restricted to one. The store is allegedly
   working out</pre>
<pre> with the stock management and would return back with excellent quantities of supplies soon.</pre>
<pre><strong> All cart Add-ons has to be done here, on this page only</strong> </pre>
<pre> Thanks For Choosing Our Store. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?=$_SESSION["naam"]?></pre>
    
<div class="nav">

<div class="items"><a href="#items">Start Shopping</a></div>
<div class="covidMeasures"><a href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html" target="_blank">COVID-19 UPDATE</a></div>
<div class="logout"><a href="logout.php">Log Out</a></div>
<div class="contactUs"><a href="#contacts">Contact Us</a></div>
  
</div>
<section id ="items">
    <div class="container">

    <!--Potato-->
    <div class="potato">
        <img id="potato" src="pics/potato.jpg" alt="photo">
        <br>
        <span id="item2">Click to Add: Potato 5kg </span> 
        
        <input name="itemName" type="submit" id="button2" value="potato" >
          <input name="itemName" type="submit" id="buttonDel2" value="potato" >
</div>

<!--cucumber-->
    <div class="cucumber" > 
        <img id="cucumber" src="pics/cucumber.jpg" alt="photo">
        <br>
        
        <span id="item3">Click to Add: Cucumber 2 pc.</span> 
        
        <input name="itemName" type="submit" id="button3" value="cucumber" >
          <input name="itemName" type="submit" id="buttonDel3" value="cucumber" >
     
        </div>



<!--carrot-->
        <div class="carrot" > 
        <img id="carrot" src="pics/carrot.jpg" alt="photo">
        <br>
        
        <span id="item4">Click to Add: Carrot 1kg</span> 
        
        <input name="itemName" type="submit" id="button4" value="carrot" >
          <input name="itemName" type="submit" id="buttonDel4" value="carrot" >
     
        </div>

        <!--tomato-->
        <div class="tomato" > 
        <img id="tomato" src="pics/tomato.jpg" alt="photo">
        <br>
        
        <span id="item1">Click to Add: Tomato 1kg</span> 
        
        <input name="itemName" type="submit" id="button1" value="tomato" >
          <input name="itemName" type="submit" id="buttonDel1" value="tomato" >
     
        </div>
    

    <!--orange-->
    <div class="orange" > 
        <img id="orange" src="pics/orange.jpg" alt="photo">
        <br>
        
        <span id="item5">Click to Add: Orange 1kg</span> 
        
        <input name="itemName" type="submit" id="button5" value="orange" >
          <input name="itemName" type="submit" id="buttonDel5" value="orange" >
     
        </div>
    
    
     <!--apple-->
    <div class="apple" > 
        <img id="apple" src="pics/apple.jpg" alt="photo">
        <br>
        
        <span id="item7">Click to Add: Apple 4 pc.</span> 
        
        <input name="itemName" type="submit" id="button7" value="apple" >
          <input name="itemName" type="submit" id="buttonDel7" value="apple" >
     
        </div>
    
    
    <!--watermelon-->
    <div class="watermelon" > 
        <img id="watermelon" src="pics/watermelon.jpg" alt="photo">
        <br>
        
        <span id="item8">Click to Add: Watermelon 1kg</span> 
        
        <input name="itemName" type="submit" id="button8" value="watermelon" >
          <input name="itemName" type="submit" id="buttonDel8" value="watermelon" >
     
        </div>
    
    
    
    <!--banana-->
    <div class="banana" > 
        <img id="banana" src="pics/banana.jpg" alt="photo">
        <br>
        
        <span id="item6">Click to Add: Banana 1 dozen</span> 
        
        <input name="itemName" type="submit" id="button6" value="banana" >
          <input name="itemName" type="submit" id="buttonDel6" value="banana" >
     
        </div>

    <!--fish-->
    <div class="fish" > 
        <img id="fish" src="pics/fish.jpg" alt="photo">
        <br>
        
        <span id="item9">Click to Add: fish 500g</span> 
        
        <input name="itemName" type="submit" id="button9" value="fish" >
          <input name="itemName" type="submit" id="buttonDel9" value="fish" >
     
        </div>
    
    
    <!--chicken-->
    <div class="chicken" > 
        <img id="chicken" src="pics/chicken.jpg" alt="photo">
        <br>
        
        <span id="item10">Click to Add: chicken 1kg</span> 
        
        <input name="itemName" type="submit" id="button10" value="chicken" >
          <input name="itemName" type="submit" id="buttonDel10" value="chicken" >
     
        </div>
   
   <!--pork-->
    <div class="pork" > 
        <img id="pork" src="pics/pork.jpg" alt="photo">
        <br>
        
        <span id="item11">Click to Add: pork 500g</span> 
        
        <input name="itemName" type="submit" id="button11" value="pork" >
          <input name="itemName" type="submit" id="buttonDel11" value="pork" >
     
        </div>
    
   
<!--goat-->
    <div class="goat" > 
        <img id="goat" src="pics/goat.jpg" alt="photo">
        <br>
        
        <span id="item12">Click to Add: goat 500g</span> 
        
        <input name="itemName" type="submit" id="button12" value="goat" >
          <input name="itemName" type="submit" id="buttonDel12" value="goat" >
     
        </div>
    
</div>
  </section>
  <!--Footer section where all contacts infomation is provide -->
  <footer class="foot">
			   <div class="line"></div>
				<section id ="contacts">
			 <h3 class="down con">Contact Us</h3> 
				<p class="down"><em><a href="https://jacksonsquare.ca/" target="_blank">Jackson Square</a></em></p>
				<p class="down"><em><a href="mailto:t.taran-preet-singh@mohawkcollege.ca?subject=Enquiry Mail">Send Email</a></em></p>
				<p class="down"><em>Hamilton, ON</em></p>
			    <p class="down"><em>	L8T 4N1 </em></p>
				</section>
				
				</footer>
<?php
}
?>
</body>
</html>