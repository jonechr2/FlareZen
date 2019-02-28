$(document).ready(function(){

var filter=(window.location.search.split('&').splice(1)) // Creating a variable "filter" whose value is an array with the filter text
filter = decodeURI(filter) //Getting rid of the codes that are used for spaces

filter = filter.substring(2) //getting rid of "f=" at the beginning

var $span = $( document.createElement('span') ); //creating a span element to contain the new text

$span.addClass('filter'); //adding the class filter to the span in case you would need to edit the styling
$span.text(" with the filter " +'"' +filter +'"') //inserting the some text and the value from the URL
$("span.query").append($span) //appending the new span to the existing string. 

});





