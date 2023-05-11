// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
let outputRng = document.getElementById("rng");
let rng;
let seconds = 5;
const contatoreScelta = ["primo", "secondo", "terzo", "quarto", "quinto"];
function randomNumberArrayGenerator(max, timesGenerated){

    const array = [];
    let randomNum;

    while(array.length < timesGenerated){

        randomNum = Math.floor(Math.random() * (max + 1));
        
        if(!array.includes(randomNum)){
            array.push(randomNum);
        }
        
    }
    return array;
}

function timerScomparsaNumeri(){
    for(let i = 0; i < seconds; i++){

        console.log(i + 1);
    }
}


    

// Visualizzare in pagina 5 numeri casuali.
const userSelectedNums = []; 
rng = randomNumberArrayGenerator(100, 5);
outputRng.innerHTML = `ciao i numeri generati sono: ${rng}`
outputRng.append();







// Da lì parte un timer di 30 secondi.

// setTimeout(timerScomparsaNumeri, seconds);

let clock = setInterval(() => {
    if(seconds === 0){
        outputRng.innerHTML =""
        for(let i = 0; i < rng.length; i++){
            // Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
            userSelectedNums.push(parseInt(prompt("inserisci il " + contatoreScelta[i])));
        
        }
        clearInterval(clock);
          // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
        const userNumsCorrectGuess = [];
        for(let i = 0; i < rng.length; i++ ){
        
        
            if(userSelectedNums.includes(rng[i])){
                userNumsCorrectGuess.push(rng[i]);
            }
    
        
    }
    console.log("numeri selezionati dallo user " + 0 + userNumsCorrectGuess, "numeri generati dalla funzione " + rng, "quantità di numeri indovinata dallo user " + userNumsCorrectGuess.length);
    }
    else{
        seconds--;
        console.log(seconds + 1);
    }

}, 1000);







