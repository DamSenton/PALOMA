   new function(drinkMatcher){
   
   var flavourSweet = document.getElementById("#flavour-sweet").checked

    var flavourBitter = document.getElementById("#flavour-bitter").checked

    var flavourFruity = document.getElementById("#flavour-fruity").checked

    var spiritRum = document.getElementById("spirit-rum").checked

    var spiritVodka = document.getElementById("spirit-vodka").checked

    var spiritTequila = document.getElementById("spirit-tequila").checked

    var spiritLiqueur = document.getElementById("spirit-liqueur").checked

    var spiritGin = document.getElementById("spirit-gin").checked


document.getElementById("#matcher-button").addEventListener("click", function(result){
    if(".flavour-questions" == flavourSweet && ".spirit-questions" == spiritRum){
        result = document.getElementsByClassName(".drink-result").addClass(".zombie-result")
    }


    });
console.log(spiritGin);
  
}  
