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
/**
 * JQUERY for all the body elements to have the same font family as sans-serif
 */
$(document).ready(function(){
    $("body").css("font-family","sans-serif");
});

window.addEventListener("load",function()
{/**
    JS LOAD event that when the file loads up the FUNCTION GETS fired with no parameters
    ///adding event listener to the password id element which is a textfield that runs to autofill 
    /// the reenter password textfield and can't be accessed by the user to change it by using the 
    /// read only function in that.
    */
    document.getElementById("password").addEventListener("input",function()
    {
        document.getElementById("repassword").readOnly = true;
        document.getElementById("repassword").value = document.getElementById("password").value;
    });

});