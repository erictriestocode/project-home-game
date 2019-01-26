//JS File

var place = "Chicago";
var dateInput = "2019-03-03"

$.ajax({
  type: "GET",
  url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u&startDateTime=2019-03-01T00:00:00Z&endDateTime=2019-03-04T23:59:00Z&countryCode=US&segmentName=Sports&subGenreId=KZazBEonSMnZfZ7vFJA",
  async: true,
  dataType: "json",
  success: function (json) {
    console.log(json);
     for (i = 0; i < json._embedded.events.length; i++){
        if (json._embedded.events[i]._embedded.venues[0].city.name == place && json._embedded.events[i].dates.start.localDate == dateInput) {
       console.log(json._embedded.events[i]);
        };
     };
    // Parse the response.
    // Do other things.
  },
  error: function (xhr, status, err) {
    // This time, we do not end up here!
  }
});











// url: "https://app.ticketmaster.com/discovery/v2/events?apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u&startDateTime=2019-03-01T00:00:00Z&endDateTime=2019-03-04T00:59:00Z&city=Philadelphia&countryCode=US"

   //  "https://app.ticketmaster.com/discovery/v2/events?apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u&countryCode=US&segmentName=Sports&subGenreID=KZazBEonSMnZfZ7vFJA",
   //  "https://app.ticketmaster.com/discovery/v2/events?apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u&city=Philadelphia&countryCode=US&segmentName=Sports",

   // "https://app.ticketmaster.com/discovery/v2/suggest.json?&apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u",


//   json._embedded.events[i].classifications[0].subGenre.name == "NHL" && 

//This works to pull some of the events we want, need to add in the city search too
// $.ajax({
//     type: "GET",
//     url: "https://app.ticketmaster.com/discovery/v2/attractions.json?size=200&apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u",
//     async: true,
//     dataType: "json",
//     success: function (json) {
//         for (i = 0; i < json._embedded.attractions.length; i++) {
//             if (json._embedded.attractions[i].classifications[0].segment.name == "Sports") {
//                 console.log(json._embedded.attractions[i]);
//             };
//             // Parse the response.
//             // Do other things.
//         }
//         // error: function(xhr, status, err) {
//         //     // This time, we do not end up here!
//         // }
//     }
// });   

// this works to pull "suggestions" but it may be the best option as it has the most information
// need to iterate through this like the one above 