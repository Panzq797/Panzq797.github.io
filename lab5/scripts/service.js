

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateDebit(txtDebit) {
    var a = document.getElementById(txtDebit).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\s*(?:\d{4}\s?){4}\s*$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates1 = []
var unavailableDates2 = []
var unavailableDates3 = []
const setDateFormat = "mm/dd/yy";

function disableDates1(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    if (date.getDay() == 6)
        return [false];
     if (date.getDay() == 2)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates1.indexOf(string) == -1 ]
}
function disableDates2(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    if (date.getDay() == 6)
        return [false];
    if (date.getDay() == 1)
        return [false];
    if (date.getDay() == 4)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates2.indexOf(string) == -1 ]
}
function disableDates3(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0)
        return [false];
    if (date.getDay() == 6)
        return [false];
    if (date.getDay() == 3)
        return [false];
    if (date.getDay() == 5)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates3.indexOf(string) == -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone1").on("change", function(){
        if (!validatePhone("phone1")){
            alert("Wrong format for phone");
            $("#phone1").val("(xxx)xxx-xxxx");
            $("#phone1").addClass("error");
        }
        else {
            $("#phone1").removeClass("error");
        }
    });

    $("#phone2").on("change", function(){
        if (!validatePhone("phone2")){
            alert("Wrong format for phone");
            $("#phone2").val("(xxx)xxx-xxxx");
            $("#phone2").addClass("error");
        }
        else {
            $("#phone2").removeClass("error");
        }
    });

    $("#phone3").on("change", function(){
        if (!validatePhone("phone3")){
            alert("Wrong format for phone");
            $("#phone3").val("(xxx)xxx-xxxx");
            $("#phone3").addClass("error");
        }
        else {
            $("#phone3").removeClass("error");
        }
    });

    $("#debit1").on("change", function(){
        if (!validateDebit("debit1")){
            alert("Wrong format for card");
            $("#debit1").val("xxxx xxxx xxxx xxxx");
            $("#debit1").addClass("error");
        }
        else {
            $("#debit1").removeClass("error");
        }
    });

     $("#debit2").on("change", function(){
        if (!validateDebit("debit2")){
            alert("Wrong format for card");
            $("#debit2").val("xxxx xxxx xxxx xxxx");
            $("#debit2").addClass("error");
        }
        else {
            $("#debit2").removeClass("error");
        }
    });

     $("#debit3").on("change", function(){
        if (!validateDebit("debit3")){
            alert("Wrong format for card");
            $("#debit3").val("xxxx xxxx xxxx xxxx");
            $("#debit3").addClass("error");
        }
        else {
            $("#debit3").removeClass("error");
        }
    });


    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput1" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates1
        }   
    );

    $( "#dateInput2" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates2
        }   
    );

    $( "#dateInput3" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates3
        }   
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    $("#debit1").on("mouseenter", function(){
        $("#debit1").addClass("showInput");
    });

    $("#debit1").on("mouseleave", function(){
        $("#debit1").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit1").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });

    $("#debit2").on("mouseenter", function(){
        $("#debit2").addClass("showInput");
    });

    $("#debit2").on("mouseleave", function(){
        $("#debit2").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit2").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });

    $("#debit3").on("mouseenter", function(){
        $("#debit3").addClass("showInput");
    });

    $("#debit3").on("mouseleave", function(){
        $("#debit3").removeClass("showInput");
    });
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit3").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });





});