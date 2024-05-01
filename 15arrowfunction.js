// Función de flecha implícita de una sola línea SUBIDO A GITHUB
const sumaArrowImplicita = (a, b) => a + b;


const calcAge3 = birthYear => 2037 - birthYear;
const age4 = calcAge3 (1991);
console.log (age4);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age ;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log (yearsUntilRetirement (1991, "Alejandro"));

// Functions called other functions

function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces (apples);
    const orangePieces = cutFruitPieces (oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
 }
console.log (fruitProcessor (2,3));

function funcionExterna() {
    var variableExterna = "Externa";
  
    function funcionInterna() {
      var variableInterna = "Interna";
      console.log("Variable interna:", variableInterna);
      console.log("Variable externa:", variableExterna);
    }
  
    funcionInterna();
  }
  
  funcionExterna();
  