var ruby,rails
var css
var andriod

$(document).ready(function() {
  var course1 = $("input:radio[name=color]:checked").val();
  var course2 = $("input:radio[name=color]:checked").val();
  var course3 = $("input:radio[name=color]:checked").val();
  var course4 = $("input:radio[name=color]:checked").val();
  var course5 = $("input:radio[name=color]:checked").val();
    $("#survey-lang").submit(function(event) {
      var userName = $("#userName").val();
      var userAddress = $("#userAddress").val()
      $(".output-name").text(userName);
      $(".output-address").text(userAddress);
    event.preventDefault();
  });
});
