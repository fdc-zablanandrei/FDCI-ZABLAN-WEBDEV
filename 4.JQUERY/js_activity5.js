function handler(event) {
  var target = $(event.target);
  if (target.is("li")) {
    target.children().toggle();
  }
}
$("ul").click( handler ).find("ul").hide();



//part2   
$(document).ready(function(){
  $("#two").click(function(){
    var div = $("#idtwo");
    startAnimation();

function startAnimation(){
      div.animate({width: 500}, "slow");
      div.animate({height: 300}, "slow");
      div.animate({left: 100}, "slow");
      div.animate({borderWidth: 6}, "slow", startAnimation);
    }
  });
});


//part3

$(document).ready(function(){
  $("#three").click(function(){
    $("#idthree").animate({
      width: "+=100px",
      height: "+=100px",
      marginTop: "+=50px",
      marginLeft: "+=50px"
    });
  });
});
</script>
</body>
</html>