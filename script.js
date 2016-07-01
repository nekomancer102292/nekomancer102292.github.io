$(document).ready(function(){
    
    $("#liitemhover").hover(function(){
        $("#liitemhover ul.dropdown-menu").toggle();
    });
    
    
    $("#datepicker").datepicker();
    
    //tooltip
    $('[data-toggle="tooltip"]').tooltip(); 
    
    $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5"
      }
    });
    
});