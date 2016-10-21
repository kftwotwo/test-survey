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

      if(course1 == "ruby") {
      ruby,rail = ruby,rails + 1;
      } else if (course1 = "css") {
      css = css + 1;
      } else if (course1 = "andriod") {
        andriod = andriod + 1;
      }


      if(course2 == "ruby") {
      ruby,rail = ruby,rails + 1;
      } else if (course2 = "css") {
      css = css + 1;
    } else if (course2 = "andriod") {
        andriod = andriod + 1;
      }

      if(course3 == "ruby") {
      ruby,rail = ruby,rails + 1;
      } else if (course3 = "css") {
      css = css + 1;
      } else if (course3 = "andriod") {
        andriod = andriod + 1;
      }

      if(course4 == "ruby") {
      ruby,rail = ruby,rails + 1;
      } else if (course4 = "css") {
      css = css + 1;
      } else if (course4 = "andriod") {
        andriod = andriod + 1;
      }

      if(course5 == "ruby") {
      ruby,rail = ruby,rails + 1;
      } else if (course5 = "css") {
      css = css + 1;
      } else if (course5 = "andriod") {
        andriod = andriod + 1;
      };


    event.preventDefault();
  });
});
