
//JS File

var city = "Chicago";
var dateStart = "2019-04-01"
var dateEnd = "2019-04-30"
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
  url: qurlMLS,
  async: true,
  dataType: "json",
  success: function (json) {
    console.log(json);
  },
  error: function (xhr, status, err) {
  }
=======
//Create global variables
var startDate;
var endDate;

//Remember to do input validation
function gatherDates() {
$(".startDate").on("input", function(){
    startDate = $(".startDate").val();
    console.log(startDate);
    alert("you have selected a start date");
});

//Remember to do input validation
$(".endDate").on("input", function(){
    endDate =$(".endDate").val();
    console.log(endDate);
    alert("you have selected an end date")
});
}

gatherDates();


//Remember to do input validation
$(".submit-btn").on("click", function(event){
    event.preventDefault();
    gatherDates();
    console.log(startDate);
    console.log(endDate);

});