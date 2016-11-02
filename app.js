$(document).ready(function() {
  var colorArray = ["Azure", "Chartreuse", "Gainsboro", "Peru", "Thistle"];
  var random = randomNumber(0, colorArray.length - 1);

  var randomColor = colorArray[random];

  $('h2').append("<div class=random>Please select " + randomColor + "</div>");

  $('.boxAzure').append("<div class='azure'></div>");
  $('.boxChartreuse').append("<div class='chartreuse'></div>");
  $('.boxGainsboro').append("<div class='gainsboro'></div>");
  $('.boxPeru').append("<div class='peru'></div>");
  $('.boxThistle').append("<div class='thistle'></div>");

  function newRandomColor () {
    random = randomNumber(0, colorArray.length - 1);
    randomColor = colorArray[random];
    $('h2').html("<div class=random>Please select " + randomColor + "</div>");
  }

  function colorDecider (color) {
    if (color == randomColor) {
      alert("Correct!");
      newRandomColor();
    } else {
      alert("Not quite!")
    }
  }

  $('.boxAzure').click(function() {
    colorDecider("Azure");
  });

  $('.boxChartreuse').click(function() {
    colorDecider("Chartreuse");
  });

  $('.boxGainsboro').click(function() {
    colorDecider("Gainsboro");
  });

  $('.boxPeru').click(function() {
    colorDecider("Peru");
  });

  $('.boxThistle').click(function() {
    colorDecider("Thistle");
  });

console.log("pls");

  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }
});
