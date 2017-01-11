$(function() {
  $("form#booking").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedDate = $("#date").val();
    var inputtedStart = $("#starttime").val();
    var inputtedEnd = $("#endtime").val();
    var confirmation = alert("HI " + inputtedName + " Your appointment has been booked for " + inputtedDate + " from " + inputtedStart + " to " + inputtedEnd +.);
    });
});
