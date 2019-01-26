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