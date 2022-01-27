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
    $("body").css("font-family","sans-serif");
    ///JQUERY for all the body element area to change background color when mouse is hovered around by the user.
    /// param as event 
    $("body").mousemove(function(event)
    {
        let newColor = "rgb("+ event.pageX+ "," + event.pageY+ ","+ 0 + ")";
        $(this).css("background-color", newColor);
     
    });

});
/// add eventlisterner to the window for the load event
/// no parameter 
window.addEventListener("load",function()

{
    /// adding event listner to the login id button that when clicked performs the undershown functions
    /// this event listener runs the ajax request to check.php with the form values to check if the user 
    /// credentials are registered in the database.
    /// no parameter
    document.getElementById("login").addEventListener( "click", function()
    {
        
        let url = "check.php?username=" + document.getElementById("usernamee").value + "&passworddd=" + document.getElementById("password").value;
        fetch(url, {credentials:'include'})
        .then(response=>response.json())
        .then(function(code)
        {
            /// returns 1 as in the first index of the array showing that user is a registered user
            /// taking the credentials to a new registered user page that couldn't be accessed by someone who is not
            /// already registered.
            if (code[0]===1)
            {
               window.location.assign("step2.php");
               
                console.log("Credentials Verified");
                console.log("User Logged In");
            }
            /// returns -1 as in the first index of the array showing that user is not a registered user
            /// reloading the page to denote that the credentials entered were invalid
            else if(code[0]===-1){
             
                location.reload();
                document.getElementById("usernamee").value="";
                document.getElementById("password").value="";
                console.log("Credentials Verified");
                console.log("Invalid Credentials");
            }
        });
    });
});