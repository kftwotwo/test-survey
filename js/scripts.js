var rubyScore
var cssScore
var android

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

      if(course == "ruby") {
        rubyScore = rubyScore + 1;
      } else {
        cssScore = cssScore + 1;
      }

      if(course2 == "ruby2") {
        rubyScore = rubyScore + 3;
      } else {
        cssScore = cssScore + 1;
      }

      if(course3 == "ruby3") {
        rubyScore = rubyScore + 1;
      } else {
        cssScore = cssScore + 1;
      }

      if(course4 == "ruby4") {
        rubyScore = rubyScore + 1;
      } else {
        cssScore = cssScore + 1;
      }

      if(course5 == "ruby5") {
        rubyScore = rubyScore + 1;
      } else {
        cssScore = cssScore + 1;
      }

      if (rubyScore > cssScore) {
        $(".par").fadeIn("slow");
        $(".result").text("Ruby!")
      } else if (rubyScore < cssScore){
        $(".par").fadeIn("slow");
        $(".result").text("CSS/Desgin")
      }
    event.preventDefault();
  });
});
