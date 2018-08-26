$(document).ready(function(){
/***login/welcome page*/
    var $welcomeContainer = $("<div>",{
        class:'welcome-container'
    }).appendTo("body");

    $("<p>",{
        class:"welcome-lbl-msg",
        text:"Hello there!"
    }).appendTo($welcomeContainer);

    $("<p>",{
        class:"welcome-lbl-msg",
        text:"Welcome to my reference site :)"
    }).appendTo($welcomeContainer);
});