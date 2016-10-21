var rubyScore
var cssScore

$(document).ready(function() {
  $("#survey-lang").submit(function(event) {
    var course = $("input:radio[name=course]:checked").val();
    var course2 = $("input:radio[name=course2]:checked").val();
    var course3 = $("input:radio[name=course3]:checked").val();
    var course4 = $("input:radio[name=course4]:checked").val();
    var course5 = $("input:radio[name=course5]:checked").val();
    var userName = $("#userName").val();
    var userAddress = $("#userAddress").val();
    $(".output-name").text(userName);
    $(".output-address").text(userAddress);
    rubyScore = 0;
    cssScore = 0;

      if(course === "ruby") {
        rubyScore = rubyScore + 1;
      } else {
        cssScore = cssScore + 1;
      }

      if (rubyScore > cssScore) {
        $(".par").fadeIn("slow");
        $(".result").prepend("Ruby!")
      } else if (rubyScore < cssScore){
        $(".par").fadeIn("slow");
        $(".result").text("CSS/Desgin")
      }
    event.preventDefault();
  });
});
