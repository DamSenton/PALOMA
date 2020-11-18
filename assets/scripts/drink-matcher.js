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
    $(".drink-result").append(`<h1>ZOMBIE</h1>`);
  }
  setTimeout(function(){
    $("#drink-result-submit").addClass("result-background").removeClass("zombie-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

 if (flavourFruity == true && spiritRum == true) {
    $("#drink-result-submit").addClass("daiquiri-result").removeClass("result-background");
    $(".drink-result").append(`<h1>STRAWBERRY DAIQUIRI</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("daiquiri-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

  if (flavourBitter == true && spiritRum == true) {
    $("#drink-result-submit").addClass("rum-sour-result").removeClass("result-background");
    $(".drink-result").append(`<h1>RUM SOUR</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("rum-sour-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

  /*----------------- Gin Results -------------- */

  if (flavourSweet == true && spiritGin == true) {
    $("#drink-result-submit").addClass("gin-fizz-result").removeClass("result-background");
    $(".drink-result").append(`<h1>GIN FIZZ</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("gin-fizz-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }
  


  if (flavourFruity == true && spiritGin == true) {
    $("#drink-result-submit").addClass("bit-of-me-result").removeClass("result-background");
    $(".drink-result").append(`<h1>BIT OF ME</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("bit-of-me-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

  if (flavourBitter == true && spiritGin == true) {
    $("#drink-result-submit").addClass("negroni-result").removeClass("result-background");
    $(".drink-result").append(`<h1>NEGRONI</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("negroni-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

  /*----------------- Vodka Results -------------- */

 if (flavourSweet == true && spiritVodka == true) {
    $("#drink-result-submit").addClass("russian-result").removeClass("result-background");
    $(".drink-result").append(`<h1>RUSSIAN SPRING PUNCH</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("russian-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

  if (flavourFruity == true && spiritVodka == true) {
    $("#drink-result-submit").addClass("rude-boy-result").removeClass("result-background");
    $(".drink-result").append(`<h1>RUDE BOY</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("rude-boy-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

  if (flavourBitter == true && spiritVodka == true) {
    $("#drink-result-submit").addClass("vodka-sour-result").removeClass("result-background");
    $(".drink-result").append(`<h1>VODKA SOUR</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("vodka-sour-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

  /*----------------- Liqueur Results -------------- */

  if (flavourSweet == true && spiritLiqueur == true) {
    $("#drink-result-submit").addClass("bueno-result").removeClass("result-background");
    $(".drink-result").append(`<h1>BUENO</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("bueno-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

  if (flavourFruity == true && spiritLiqueur == true) {
    $("#drink-result-submit").addClass("yuzu-result").removeClass("result-background");
    $(".drink-result").append(`<h1>YUZU SCREWDRIVER</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("yuzu-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

  if (flavourBitter == true && spiritLiqueur == true) {
    $("#drink-result-submit").addClass("americano-result").removeClass("result-background");
    $(".drink-result").append(`<h1>AMERICANO</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("americano-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

  /*----------------- Tequila Results -------------- */

  if (flavourSweet == true && spiritTequila == true) {
    $("#drink-result-submit").addClass("apple-pie-result").removeClass("result-background");
    $(".drink-result").append(`<h1>APPLE PIE</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("apple-pie-result");
    $(".drink-result").children("h1").remove();    
  }, 3000);
  {
  }

  if (flavourFruity == true && spiritTequila == true) {
    $("#drink-result-submit").addClass("paloma-result").removeClass("result-background");
    $(".drink-result").append(`<h1>PALOMA</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("paloma-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }

  if (flavourBitter == true && spiritTequila == true) {
    $("#drink-result-submit").addClass("tommy-result").removeClass("result-background");
    $(".drink-result").append(`<h1>TOMMY'S</h1>`);
  }
  setTimeout(function () {
    $("#drink-result-submit").addClass("result-background").removeClass("tommy-result");
    $(".drink-result").children("h1").remove();
  }, 3000);
  {
  }
}