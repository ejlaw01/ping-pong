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
    $("ul").empty();
    $(".form-group").removeClass("has-error");
    var userInput = parseInt($("input#number").val());
    if (userInput <= 0) {
      $("#output ul").append("Please enter a positive integer.");
      $(".form-group").addClass("has-error");
    }
    pingPongifier(userInput);
    var outputStyle1 = pingPongified.forEach(function(input){
      $("#view1 ul").append("<li>" + input + "</li>");
    });
    var outputStyle2 = function(input) {
      for (var i=0; i < input.length; i++) {
        if ((i+1)%3 === 0) {
          $("#column3 ul").append("<li>" + input[i] + "</li>");
        } else if ((i+2)%3 === 0) {
          $("#column2 ul").append("<li>" + input[i] + "</li>");
        } else if (i%3 === 0){
          $("#column1 ul").append("<li>" + input[i] + "</li>");
        }
      }
    }
    outputStyle2(pingPongified);
    $("#input").val("");
  });
  $("#viewToggle").click(function() {
    $("#view2").toggle();
    $("#view1").toggle();
  });
});
