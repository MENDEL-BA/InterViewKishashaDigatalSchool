// function qui prend en parametre  un tableau de int et retoune la somme des valeurs pairs

var sumOfElementPair = function(arrays) {

  if(arrays.length === 0) {
   console.log("Le tableau en parametre est vide");
  }

  var sum = 0;

  for(var i = 0; i < arrays.length; i++) {
    if(arrays[i] % 2 === 0) {
      sum += arrays[i];
    }
  }

console.log("La somme est ", sum)
};


var sumOfFirstPairBigElementOfArray = function(arrays) {

  var newArray = [];

  if(arrays.length === 0 ){
    console.log("Le tableau en parametre est vide");
  }

  for(var i =0; i < arrays.length; i++){
  
    if(arrays[i] % 2 === 0) {
      newArray.push(arrays[i]);
    }
  
  }

console.log("Les elmts pairs ", newArray);

const reducer = (accumulator, currentElemnt ) => accumulator + currentElemnt;

console.log(newArray.sort((a,b) => a - b).slice(Math.max(newArray.length - 3,0)).reduce(reducer));

};


var sumOfDiagonaleOfMatrix = function(matrix) {

  if(matrix.length === 0 ){
    console.log("La matice est vide");
  }

  var sumOfFirstDiagonale = 0;

  var sumOfSecondDiagonale = 0;

  var tailleOfMatrix = matrix.length;


  for(var i = 0; i < matrix.length; i++){
     sumOfFirstDiagonale += matrix[i][i];
     sumOfSecondDiagonale += matrix[i][tailleOfMatrix-i-1]
  }
    
  console.log("elmt sumOfFirstDiagonale ", sumOfFirstDiagonale)

  console.log("elmt sumOfSecondDiagonale ", sumOfSecondDiagonale)
 

};


sumOfDiagonaleOfMatrix([[1,3,4],[2,5,4],[1,3,4]])

//const matrix = [
//   [1,3,4],
//   [2,5,4],
//   [1,3,4]
//]

//diag1 = 1 + 5 + 4
//diag2 = 4 + 5 + 1
