//Create global variables
var startDate;
var endDate;
var city;

//Remember to do input validation
function gatherData() {
$(".startDate").on("input", function(){
    startDate = $(".startDate").val();
    console.log(startDate);
    // alert("You have selected a start date");
});

//Remember to do input validation
$(".endDate").on("input", function(){
    endDate =$(".endDate").val();
    console.log(endDate);
    // alert("You have selected an end date")

$(".citySlct").on("input", function(){
    city = $(".citySlct").val().trim();
})
});
}

gatherData();


//Remember to do input validation
$(".submit-btn").on("click", function(event){
    event.preventDefault();
    gatherData();
    console.log(startDate);
    console.log(endDate);
    console.log(city);

});

