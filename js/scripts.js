//business logic
var pingPongifier = function(input) {
  pingPongified = [];
  var i = 1;
  for (var i=1; i <= input; i++) {
    if (i%3 === 0 && i%5 === 0) {
      pingPongified.push("ping-pong!");
    } else if (i%3 === 0) {
      pingPongified.push("ping");
    } else if (i%5 === 0) {
      pingPongified.push("pong");
    } else {
      pingPongified.push(i);
    }
  }
}

//user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#output ul").empty();
    $(".form-group").removeClass("has-error");
    var userInput = parseInt($("input#number").val());
    if (userInput <= 0) {
      $("#output ul").append("Please enter a positive integer.");
      $(".form-group").addClass("has-error");
    }
    pingPongifier(userInput);
    var outputArray = pingPongified.forEach(function(input){
      $("#output ul").append("<li>" + input + "</li>");
    });
    $("#input").val("");
  });
});
