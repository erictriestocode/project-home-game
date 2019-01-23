//JS File
// $(document).ready(function () {
    // $.ajax({
    //     type:"GET",
    //     url:"https://app.ticketmaster.com/discovery/v2/classifications/KZazBEonSMnZfZ7vFE1.json?size=10&apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u",
    //     async:true,
    //     dataType: "json",
    //     success: function(json) {
    //                 console.log(json);
    //                 // Parse the response.
    //                 // Do other things.
    //              },
    //     error: function(xhr, status, err) {
    //                 // This time, we do not end up here!
    //              }
    //   });

    // })

    // $.ajax({
    //     type:"GET",
    //     url:"https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u",
    //     async:true,
    //     dataType: "json",
    //     success: function(json) {
    //                 console.log(json);
    //                 // Parse the response.
    //                 // Do other things.
    //              },
    //     error: function(xhr, status, err) {
    //                 // This time, we do not end up here!
    //              }
    //   });

// })

//This works to pull some of the events we want, need to add in the city search too
$.ajax({
    type: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u",
    async: true,
    dataType: "json",
    success: function (json) {
        for (i = 0; i < json._embedded.attractions.length; i++) {
            if (json._embedded.attractions[i].classifications[0].segment.name == "Sports") {
                console.log(json._embedded.attractions[i]);
            };
            // Parse the response.
            // Do other things.
        }
        // error: function(xhr, status, err) {
        //     // This time, we do not end up here!
        // }
    }
});   

