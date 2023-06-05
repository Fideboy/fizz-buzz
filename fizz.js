/* A program that runs any number, displaying "Fizz" for multiples
of 3, "Buzz" for multiples of 5 and "FizzBuzz" for multiples of both
3 and 5.*/

function fizzBuzz() {

    var output = [];
var count = prompt("Input any number");

 if(count % 3 ===0 && count % 5 === 0 ) {
    output.push("fizzBuzz")
     alert("FizzBuzz");
 }
 else if (count % 3 === 0) {
    output.push("Fizz");
    alert("Fizz");
 }
 else if(count % 5 === 0 ) {
    output.push("Buzz");
    alert("Buzz");
 }
 else{
    output.push(count);
    alert(count);
 }
    count++;
    
    // console.log(output)
} 

fizzBuzz(count)