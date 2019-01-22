//JS File
$(document).ready(function () {
    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/classifications/KZazBEonSMnZfZ7vFE1.json?size=10&apikey=Vvr4nxUQd9eJW45jli8KXF14XyVHA74u",
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json);
                    // Parse the response.
                    // Do other things.
                 },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
      });

})