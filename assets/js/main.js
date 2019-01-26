//WORK GOSH DORNIT

$(document).ready(function () {

//Create global variables
var startDate;
var endDate;
var city;

//Remember to do input validation
function gatherData() {
    $(".startDate").on("input", function () {
        startDate = $(".startDate").val();
        console.log(startDate);
        // alert("You have selected a start date");
    });

    //Remember to do input validation
    $(".endDate").on("input", function () {
        endDate = $(".endDate").val();
        console.log(endDate);
        // alert("You have selected an end date")
    });

        $(".citySlct").on("input", function () {
            city = $(".citySlct").val().trim();
        });
    };

            // *************** START USER DATA AQUISITION ***************
        // Remember to do input validation - Eric

        gatherData();

        $(".submit-btn").on("click", function (event) {
            event.preventDefault();
            gatherData();
            console.log(startDate);
            console.log(endDate);
            console.log(city);

       


        //clear out city destination box
        $("#city-destination").val("");

    });
        // *************** END USER DATA AQUISITION ***************

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

        // *************** START MAPS QUERY ***************

        var mapsURL = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyBZ-tqiabQTnQLaxbWjeuLU5avoCbDVZm0";

        $.ajax({
            url: mapsURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(mapsURL);
                console.log(response);
            });
        // *************** END MAPS QUERY ***************


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
    // *************** END FIREBASE ***************
    });





