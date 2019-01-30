function forLoop(array){
  var newArray = [];
  for (var i=0; i< 25; i++){
    if (i===0){
      newArray.push("I am 1 strange loop.");
    } else {
      newArray.push(`I am ${i + 1} strange loops.`);
    }
  }
return newArray;
}


function whileLoop(n){
  while (n > 0){
    console.log(n); 
    n--;
  }
  return 'done';
}



function doWhileLoop(array){
  var i = 0;
 
function incrementVariable() {
  i += 1;
}
do{
  console.log("Have you tried turing it off and on again?");
  incrementVariable();
  array.pop();
} while (i <= 10);
return array;
}