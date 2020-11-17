document
  .getElementById("matcher-button")
  .addEventListener("click", drinkMatcher);

function drinkMatcher() {
  var flavourSweet = document.getElementById("flavour-sweet").checked;
  console.log(flavourSweet);

  var flavourBitter = document.getElementById("flavour-bitter").checked;
  console.log(flavourBitter);

  var flavourFruity = document.getElementById("flavour-fruity").checked;
  console.log(flavourFruity);

  var spiritRum = document.getElementById("spirit-rum").checked;
  console.log(spiritRum);

  var spiritVodka = document.getElementById("spirit-vodka").checked;
  console.log(spiritVodka);

  var spiritTequila = document.getElementById("spirit-tequila").checked;
  console.log(spiritTequila);

  var spiritLiqueur = document.getElementById("spirit-liqueur").checked;
  console.log(spiritLiqueur);

  var spiritGin = document.getElementById("spirit-gin").checked;
  console.log(spiritGin);

  var drinkResult = document.getElementsByClassName("drink-result");
  console.log(drinkResult);

  /*----------------- Rum Results -------------- */

  if (flavourSweet == true && spiritRum == true) {
    $("#drink-result-submit").addClass("zombie-result").removeClass("result-background");
  }
  setTimeout(function(){
    $("#drink-result-submit").addClass("result-background").removeClass("zombie-result");
  }, 3000);
  {
  }

 if (flavourFruity == true && spiritRum == true) {
    $("#drink-result-submit").addClass("daiquiri-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("daiquiri-result");
  }, 3000);
  {
  }

  if (flavourBitter == true && spiritRum == true) {
    $("#drink-result-submit").addClass("rum-sour-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("rum-sour-result");
  }, 3000);
  {
  }

  /*----------------- Gin Results -------------- */

  if (flavourSweet == true && spiritGin == true) {
    $("#drink-result-submit").addClass("gin-fizz-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("gin-fizz-result");
  }, 3000);
  {
  }
  


  if (flavourFruity == true && spiritGin == true) {
    $("#drink-result-submit").addClass("bit-of-me-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("bit-of-me-result");
  }, 3000);
  {
  }

  if (flavourBitter == true && spiritGin == true) {
    $("#drink-result-submit").addClass("negroni-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("negroni-result");
  }, 3000);
  {
  }

  /*----------------- Vodka Results -------------- */

 if (flavourSweet == true && spiritVodka == true) {
    $("#drink-result-submit").addClass("russian-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("russian-result");
  }, 3000);
  {
  }

  if (flavourFruity == true && spiritVodka == true) {
    $("#drink-result-submit").addClass("rude-boy-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("rude-boy-result");
  }, 3000);
  {
  }

  if (flavourBitter == true && spiritVodka == true) {
    $("#drink-result-submit").addClass("vodka-sour-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("vodka-sour-result");
  }, 3000);
  {
  }

  /*----------------- Liqueur Results -------------- */

  if (flavourSweet == true && spiritLiqueur == true) {
    $("#drink-result-submit").addClass("bueno-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("bueno-result");
  }, 3000);
  {
  }

  if (flavourFruity == true && spiritLiqueur == true) {
    $("#drink-result-submit").addClass("yuzu-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("yuzu-result");
  }, 3000);
  {
  }

  if (flavourBitter == true && spiritLiqueur == true) {
    $("#drink-result-submit").addClass("americano-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("americano-result");
  }, 3000);
  {
  }

  /*----------------- Tequila Results -------------- */

  if (flavourSweet == true && spiritTequila == true) {
    $("#drink-result-submit").addClass("apple-pie-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("apple-pie-result");
  }, 3000);
  {
  }

  if (flavourFruity == true && spiritTequila == true) {
    $("#drink-result-submit").addClass("paloma-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("paloma-result");
  }, 3000);
  {
  }

  if (flavourBitter == true && spiritTequila == true) {
    $("#drink-result-submit").addClass("tommy-result").removeClass("result-background");
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("tommy-result");
  }, 3000);
  {
  }
}