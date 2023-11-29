// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.




const playGame = document.querySelector(".play");

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
playGame.addEventListener("click", function(){
    
    const container = document.querySelector(".grid");

    // Il computer deve generare 16 numeri casuali
    const newArrNum = genArrayRandomNum(1, 100, 16);
    console.log(newArrNum);

    // Ogni cella ha un numero progressivo, da 1 a 100.
    for (let i = 1; i <= 100; i++){
            
       const square = document.createElement("div");
       square.classList.add("square");
       container.append(square);
       square.append(i);

        // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        square.addEventListener("click", function(){

            console.log("hai cliccato una cella" , i);
            square.classList.add("clicked");
        });
    }

});




    
// funzioni

// funzione che crea un array di numeri randomici
function genArrayRandomNum(minNum, maxNum , lunghezzaArr){
    // array da popolare
    const arrayToGen = [];

    // ciclo che popola l'array
    while (arrayToGen.length < lunghezzaArr){
        // generare un numero random in un range (min,max)
        let newNumber = genArrayRandomNumMinMax(minNum, maxNum);
            // se il numero generato non è gia presente nell'array
            if (!arrayToGen.includes(newNumber)){
                // lo pusho nell'array
                arrayToGen.push(newNumber);
            }
    }

    return arrayToGen;
}


// funzione che crea un array di numeri randomici (min,max)
function genArrayRandomNumMinMax(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





