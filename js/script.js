// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
const playGame = document.querySelector(".play");


playGame.addEventListener("click", function(){
    
    const container = document.querySelector(".grid");

    for (let i = 1; i <= 100; i++){
            
       const square = document.createElement("div");
       square.classList.add("square");
       container.append(square);
       square.append(i);

        square.addEventListener("click", function(){

            console.log("hai cliccato una cella" , i);
            square.classList.add("clicked");
        })

  
    }
       
            
} );




    





