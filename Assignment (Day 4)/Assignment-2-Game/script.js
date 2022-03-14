var againButton = document.getElementById('againButton');
var getNum = document.getElementById("a");

document.getElementById("submitguess").onclick = function(){

            // random value generated

    var randomNum = Math.floor(Math.random() * 6 + 1 );

            // counting the number of guesses

    var userGuess;
     userGuess = document.getElementById ("guessField").value;
     document.getElementById("b").innerHTML = ("User Guess: " + userGuess);
     
     document.getElementById ("random").innerHTML = ("Random Number: " + randomNum);      
     
   if(userGuess == randomNum)
   {    
    getNum.innerHTML = ("You Have Got 2 Marks");
   }

   else if(userGuess > 6)  
   {    
    getNum.innerHTML = ("You Have Got 0 Mark <BR> Please Enter A Number Between 1 and 6 ");
   }
   else if(userGuess<1){
     getNum.innerHTML=("Please Enter A Number Between 1 and 6");
      }
   else
   {
    getNum.innerHTML = ("You Have got 1 Marks");
   }
}
   againButton.addEventListener('click', function(){
      location.reload();
   })
