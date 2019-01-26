$(document).ready(function () {

// *************** START TICKETMASTER QUERY ***************
// JS File - Nicole Ajax request

var userCity = "Chicago";
var destCity = "New York";
var dateStart;
var dateEnd;
var idNBA = "KZazBEonSMnZfZ7vFJA";
var idMLB = "KZazBEonSMnZfZ7vF1n";
var idNHL = "KZazBEonSMnZfZ7vFEE";
// var idNFL = "KZazBEonSMnZfZ7vFE1";

// var qurlNBA = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u&startDateTime=" + dateStart + "T00:00:00Z&endDateTime=" + dateEnd + "T23:59:00Z&city=" + city + "&countryCode=US" + "&subGenreId=" + idNBA; 
// var qurlMLB = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u&startDateTime=" + dateStart + "T00:00:00Z&endDateTime=" + dateEnd + "T23:59:00Z&city=" + city + "&countryCode=US" + "&subGenreId=" + idMLB; 
// var qurlNHL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u&startDateTime=" + dateStart + "T00:00:00Z&endDateTime=" + dateEnd + "T23:59:00Z&city=" + city + "&countryCode=US" + "&subGenreId=" + idNHL;
// var qurlNFL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u&startDateTime=" + dateStart + "T00:00:00Z&endDateTime=" + dateEnd + "T23:59:00Z&city=" + city + "&countryCode=US" + "&subGenreId=" + idNFL;
var qurl = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u&startDateTime=" + dateStart + "T00:00:00Z&endDateTime=" + dateEnd + "T23:59:00Z&city=" + city + "&countryCode=US" + "&subGenreId=" + idNBA + "&subGenreId=" + idMLB + "&subGenreId=" + idNHL;

$.ajax({
    type: "GET",
    url: qurl,
    async: true,
    dataType: "json",
    success: function (json) {
        console.log(json);
    },
    error: function (xhr, status, err) {
    }
});

// *************** END TICKETMASTER QUERY ***************


// *************** START USER DATA AQUISITION ***************
// Remember to do input validation - Eric
    function gatherDates() {
        $(".startDate").on("input", function () {
            dateStart = $(".startDate").val();
            console.log(dateStart);
            alert("you have selected a start date");
        });

        $(".endDate").on("input", function () {
            dateEnd = $(".endDate").val();
            console.log(dateEnd);
            alert("you have selected an end date")
        });
    }

gatherDates();

$(".submit-btn").on("click", function (event) {
    event.preventDefault();
    gatherDates();
    console.log(startDate);
    console.log(endDate);

    //clear out city destination box
    $("#city-destination").val("");


// *************** END USER DATA AQUISITION ***************


// *************** FIREBASE ***************
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDkbKJqpJJowM-2_Mr4Nb2sr04oJegzvG4",
    authDomain: "home-game-project.firebaseapp.com",
    databaseURL: "https://home-game-project.firebaseio.com",
    projectId: "home-game-project",
    storageBucket: "home-game-project.appspot.com",
    messagingSenderId: "257380066637"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  database.ref().push({
    startDate_d: startDate,
    endDate_d: endDate,
    distance_d: distance,
    userCity_d: userCity,
    destCity_d: destCity, 
});

//Click button function end }); below
});
// *************** END FIREBASE ***************

});