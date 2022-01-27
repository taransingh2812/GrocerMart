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
$(document).ready(function()
{
    /// JQUERY for all the body elements to have the same font family as sans-serif 
    $(".body").css("font-family","sans-serif");


    ///In all the button on the page when clicked on one of them, that item image on that page slidesup
    /// but when the button is clicked again with no image visible returns back the image denoting 
    ///item removed from the cart
    //potato
    document.getElementById("button2").addEventListener("click", function()
    {/// potato image slides up when clicked on the button to denote that item has been added to the cart
        $("#potato").slideUp();
    });

    document.getElementById("buttonDel2").addEventListener("click", function()
    {/// potato image slides up when clicked on the button to denote that item has been removed from the cart
        $("#potato").slideDown();
    });


    //tomato
    document.getElementById("button1").addEventListener("click", function()
    {/// tomato image slides up when clicked on the button to denote that item has been added to the cart
        $("#tomato").slideUp();
    });

    document.getElementById("buttonDel1").addEventListener("click", function()
    {/// tomato image slides up when clicked on the button to denote that item has been removed from the cart
        $("#tomato").slideDown();
    });


    //carrot
    document.getElementById("button4").addEventListener("click", function()
    {/// carrot image slides up when clicked on the button to denote that item has been added to the cart
        $("#carrot").slideUp();
    });

    document.getElementById("buttonDel4").addEventListener("click", function()
    {/// carrot image slides up when clicked on the button to denote that item has been removed from the cart
        $("#carrot").slideDown();
    });


    //cucumber
    document.getElementById("button3").addEventListener("click", function()
    {/// cucumber image slides up when clicked on the button to denote that item has been added to the cart
        $("#cucumber").slideUp();
    });

    document.getElementById("buttonDel3").addEventListener("click", function()
    {/// cucumber image slides up when clicked on the button to denote that item has been removed from the cart
        $("#cucumber").slideDown();
    });





    //orange
    document.getElementById("button5").addEventListener("click", function()
    {/// orange image slides up when clicked on the button to denote that item has been added to the cart
        $("#orange").slideUp();
    });

    document.getElementById("buttonDel5").addEventListener("click", function()
    {/// orange image slides up when clicked on the button to denote that item has been removed from the cart
        $("#orange").slideDown();
    });


    //apple
    document.getElementById("button7").addEventListener("click", function()
    {/// apple image slides up when clicked on the button to denote that item has been added to the cart
        $("#apple").slideUp();
    });

    document.getElementById("buttonDel7").addEventListener("click", function()
    {/// apple image slides up when clicked on the button to denote that item has been removed from the cart
        $("#apple").slideDown();
    });


    //banana
    document.getElementById("button6").addEventListener("click", function()
    {/// banana image slides up when clicked on the button to denote that item has been added to the cart
        $("#banana").slideUp();
    });

    document.getElementById("buttonDel6").addEventListener("click", function()
    {/// banana image slides up when clicked on the button to denote that item has been removed from the cart
        $("#banana").slideDown();
    });


    //watermelon
    document.getElementById("button8").addEventListener("click", function()
    {/// watermelon image slides up when clicked on the button to denote that item has been added to the cart
        $("#watermelon").slideUp();
    });

    document.getElementById("buttonDel8").addEventListener("click", function()
    {/// watermelon image slides up when clicked on the button to denote that item has been removed from the cart
        $("#watermelon").slideDown();
    });

    //pork
    document.getElementById("button11").addEventListener("click", function()
    {/// pork image slides up when clicked on the button to denote that item has been added to the cart
        $("#pork").slideUp();
    });

    document.getElementById("buttonDel11").addEventListener("click", function()
    {/// pork image slides up when clicked on the button to denote that item has been removed fromo the cart
        $("#pork").slideDown();
    });


    //fish
    document.getElementById("button9").addEventListener("click", function()
    {/// fish image slides up when clicked on the button to denote that item has been added to the cart
        $("#fish").slideUp();
    });

    document.getElementById("buttonDel9").addEventListener("click", function()
    {/// fish image slides up when clicked on the button to denote that item has been removed from the cart
        $("#fish").slideDown();
    });


    //chicken
    document.getElementById("button10").addEventListener("click", function()
    {/// chicken image slides up when clicked on the button to denote that item has been added to the cart
        $("#chicken").slideUp();
    });

    document.getElementById("buttonDel10").addEventListener("click", function()
    {/// chicken image slides up when clicked on the button to denote that item has been removed from the cart
        $("#chicken").slideDown();
    });


    //goat
    document.getElementById("button12").addEventListener("click", function()
    {/// goat image slides up when clicked on the button to denote that item has been added to the cart
        $("#goat").slideUp();
    });

    document.getElementById("buttonDel12").addEventListener("click", function()
    {/// goat image slides down when clicked on the button to denote that item has been removed from the cart
        $("#goat").slideDown();
    });


    
             
});
///JAVASCIPT code
window.addEventListener("load", function()
{///hiding all the buttons and only visible when the user clicks the add button on the page
    document.getElementById("buttonDel1").style.visibility="hidden";
    document.getElementById("buttonDel2").style.visibility="hidden";
document.getElementById("buttonDel3").style.visibility="hidden";
document.getElementById("buttonDel4").style.visibility="hidden";

document.getElementById("buttonDel5").style.visibility="hidden";
    document.getElementById("buttonDel6").style.visibility="hidden";
document.getElementById("buttonDel7").style.visibility="hidden";
document.getElementById("buttonDel8").style.visibility="hidden";

document.getElementById("buttonDel9").style.visibility="hidden";
    document.getElementById("buttonDel10").style.visibility="hidden";
document.getElementById("buttonDel11").style.visibility="hidden";
document.getElementById("buttonDel12").style.visibility="hidden";


//cucumber
///JS Function to add the vegetable to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button3 with no parameter
    document.getElementById("button3").addEventListener("click", function()
    {
        let url = "manageItems.php?itemName=" + document.getElementById("button3").value;
       
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {
            console.log("Item added to cart");
        });
        document.getElementById("button3").style.visibility="hidden";
        document.getElementById("buttonDel3").style.visibility="visible";
        document.getElementById("item3").innerHTML = "Click button to remove: Cucumber";
       
    });

    ///JS Function to remove the vegetable to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel3 with no parameter
    document.getElementById("buttonDel3").addEventListener("click", function()
    {
        document.getElementById("button3").style.visibility="visible";
    document.getElementById("buttonDel3").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel3").value;
       
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {
            console.log("Item removed from cart");});
        document.getElementById("item3").innerHTML = "Click to Add: Cucumber 2 pc.";
    });


//potato
///JS Function to add the vegetable to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button2 with no parameter
    document.getElementById("button2").addEventListener("click", function()
    {
        let url = "manageItems.php?itemName=" + document.getElementById("button2").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item added to cart");});
        document.getElementById("button2").style.visibility="hidden";
        document.getElementById("buttonDel2").style.visibility="visible";
        document.getElementById("item2").innerHTML = "Click button to remove: Potato";
    });

    ///JS Function to remove the vegetable to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel2 with no parameter
    document.getElementById("buttonDel2").addEventListener("click", function()
    {
        document.getElementById("button2").style.visibility="visible";
    document.getElementById("buttonDel2").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel2").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item removed from cart");});
        document.getElementById("item2").innerHTML = "Click to Add: Potato 5kg";
    });


    //tomato

  ///JS Function to add the vegetable to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button1 with no parameter
    document.getElementById("button1").addEventListener("click", function()
    {

        
        let url = "manageItems.php?itemName=" + document.getElementById("button1").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item added to cart");});
        document.getElementById("button1").style.visibility="hidden";
        document.getElementById("buttonDel1").style.visibility="visible";
        document.getElementById("item1").innerHTML = "Click button to remove: Tomato";
    });

    ///JS Function to remove the vegetable to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel1 with no parameter
    document.getElementById("buttonDel1").addEventListener("click", function()
    {
        document.getElementById("button1").style.visibility="visible";
    document.getElementById("buttonDel1").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel1").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item removed from cart");});
        document.getElementById("item1").innerHTML = "Click to Add: Tomato 1kg";
    });



    //carrot
///JS Function to add the vegetable to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button4 with no parameter

    document.getElementById("button4").addEventListener("click", function()
    {

        
        let url = "manageItems.php?itemName=" + document.getElementById("button4").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item added to cart");});
        document.getElementById("button4").style.visibility="hidden";
        document.getElementById("buttonDel4").style.visibility="visible";
        document.getElementById("item4").innerHTML = "Click button to remove: Carrot";
    });
///JS Function to remove the vegetable to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel4 with no parameter
    document.getElementById("buttonDel4").addEventListener("click", function()
    {
        document.getElementById("button4").style.visibility="visible";
    document.getElementById("buttonDel4").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel4").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item removed from cart");});
        document.getElementById("item4").innerHTML = "Click to Add: Carrot 1kg";
    });


    //orange
///JS Function to add the fruit to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button5 with no parameter
    document.getElementById("button5").addEventListener("click", function()
    {

        
        let url = "manageItems.php?itemName=" + document.getElementById("button5").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item added to cart");});
        document.getElementById("button5").style.visibility="hidden";
        document.getElementById("buttonDel5").style.visibility="visible";
        document.getElementById("item5").innerHTML = "Click button to remove: orange";
    });
///JS Function to remove the fruit to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel5 with no parameter
    document.getElementById("buttonDel5").addEventListener("click", function()
    {
        document.getElementById("button5").style.visibility="visible";
    document.getElementById("buttonDel5").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel5").value;
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item removed from cart");});
        document.getElementById("item5").innerHTML = "Click to Add: Orange 1kg";
    });



    //banana
///JS Function to add the fruit to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button6 with no parameter
    document.getElementById("button6").addEventListener("click", function()
    {

        
        let url = "manageItems.php?itemName=" + document.getElementById("button6").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item added to cart");});
        document.getElementById("button6").style.visibility="hidden";
        document.getElementById("buttonDel6").style.visibility="visible";
        document.getElementById("item6").innerHTML = "Click button to remove: banana";
    });
///JS Function to remove the fruit to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel6 with no parameter
    document.getElementById("buttonDel6").addEventListener("click", function()
    {
        document.getElementById("button6").style.visibility="visible";
    document.getElementById("buttonDel6").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel6").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item removed from cart");});
        document.getElementById("item6").innerHTML = "Click to Add: banana 1 dozen";
    });


    //apple
///JS Function to add the fruit to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button7 with no parameter

    document.getElementById("button7").addEventListener("click", function()
    {

        
        let url = "manageItems.php?itemName=" + document.getElementById("button7").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item added to cart");});
        document.getElementById("button7").style.visibility="hidden";
        document.getElementById("buttonDel7").style.visibility="visible";
        document.getElementById("item7").innerHTML = "Click button to remove: apple";
    });
///JS Function to remove the fruit to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel7 with no parameter
    document.getElementById("buttonDel7").addEventListener("click", function()
    {
        document.getElementById("button7").style.visibility="visible";
    document.getElementById("buttonDel7").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel7").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item removed from cart");});
        document.getElementById("item7").innerHTML = "Click to Add: Apple 4 pc.";
    });



    //watermelon

///JS Function to add the fruit to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button8 with no parameter
    document.getElementById("button8").addEventListener("click", function()
    {

        
        let url = "manageItems.php?itemName=" + document.getElementById("button8").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item added to cart");});
        document.getElementById("button8").style.visibility="hidden";
        document.getElementById("buttonDel8").style.visibility="visible";
        document.getElementById("item8").innerHTML = "Click button to remove: watermelon";
    });
///JS Function to remove the fruit to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel8 with no parameter
    document.getElementById("buttonDel8").addEventListener("click", function()
    {
        document.getElementById("button8").style.visibility="visible";
    document.getElementById("buttonDel8").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel8").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item removed from cart");});
        document.getElementById("item8").innerHTML = "Click to Add: Watermelon 1kg";
    });


    //fish
///JS Function to add the animalProduct to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button9 with no parameter
    document.getElementById("button9").addEventListener("click", function()
    {

        
        let url = "manageItems.php?itemName=" + document.getElementById("button9").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item added to cart");});
        document.getElementById("button9").style.visibility="hidden";
        document.getElementById("buttonDel9").style.visibility="visible";
        document.getElementById("item9").innerHTML = "Click button to remove: Fish";
    });
///JS Function to remove the animalProduct to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel9 with no parameter
    document.getElementById("buttonDel9").addEventListener("click", function()
    {
        document.getElementById("button9").style.visibility="visible";
    document.getElementById("buttonDel9").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel9").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item removed from cart");});
        document.getElementById("item9").innerHTML = "Click button to Add: Fish 500g";
    });


    //chicken
///JS Function to add the animalProduct to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button10 with no parameter
    document.getElementById("button10").addEventListener("click", function()
    {

        
        let url = "manageItems.php?itemName=" + document.getElementById("button10").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item added to cart");});
        document.getElementById("button10").style.visibility="hidden";
        document.getElementById("buttonDel10").style.visibility="visible";
        document.getElementById("item10").innerHTML = "Click button to remove: chicken";
    });
///JS Function to remove the animalProduct to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel10 with no parameter
    document.getElementById("buttonDel10").addEventListener("click", function()
    {
        document.getElementById("button10").style.visibility="visible";
    document.getElementById("buttonDel10").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel10").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item removed from cart");});
        document.getElementById("item10").innerHTML = "Click to Add: chicken 1kg";
    });


    //goat
    ///JS Function to add the animalProduct to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button11 with no parameter
    document.getElementById("button11").addEventListener("click", function()
    {

        
        let url = "manageItems.php?itemName=" + document.getElementById("button11").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item added to cart");});
        document.getElementById("button11").style.visibility="hidden";
        document.getElementById("buttonDel11").style.visibility="visible";
        document.getElementById("item11").innerHTML = "Click button to remove: goat";
    });

///JS Function to remove the animalProduct to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel11 with no parameter
    
document.getElementById("buttonDel11").addEventListener("click", function()
    {
        document.getElementById("button11").style.visibility="visible";
    document.getElementById("buttonDel11").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel11").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item removed from cart");});
        document.getElementById("item11").innerHTML = "Click to Add: goat 500g";
    });


    //pork
///JS Function to add the animalProduct to the cart  by firing the ajax request to manageitems.php 
///when clicked on the button12 with no parameter
    document.getElementById("button12").addEventListener("click", function()
    {

        
        let url = "manageItems.php?itemName=" + document.getElementById("button12").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item added to cart");});
        document.getElementById("button12").style.visibility="hidden";
        document.getElementById("buttonDel12").style.visibility="visible";
        document.getElementById("item12").innerHTML = "Click button to remove: pork";
    });
///JS Function to remove the animalProduct to the cart  by firing the ajax request to manageitems.php 
///when clicked on the buttonDel12 with no parameter
    document.getElementById("buttonDel12").addEventListener("click", function()
    {
        document.getElementById("button12").style.visibility="visible";
    document.getElementById("buttonDel12").style.visibility="hidden";
    

    let url = "deleteItem.php?itemName=" + document.getElementById("buttonDel12").value;
        
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {console.log("Item removed from cart");});
        document.getElementById("item12").innerHTML = "Click to Add: pork 500g";
    });
    
});