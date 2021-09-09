// list of global variables, others are inside the functions
var taskText = "";
var taskTime = "";
var currentDate;
var currentTime;
var currentContainer;

// call function to display current date and time
$(document).ready(function () {
    currentDate = moment().format("dddd MMM Do YYYY, h:mm:ss a");
    $("#date-time").append(currentDate);
    currentTime = moment().hour();
