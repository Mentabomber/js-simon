// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
let outputRng = document.getElementById("rng");
let rng, divSelector = document.getElementById("counter-grid");
let seconds = 30;
divSelector.innerHTML = `<span id="timer">${seconds} secondi rimanenti </span>`;
timerSelector = document.getElementById("timer");
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
 
rng = randomNumberArrayGenerator(100, 5);
outputRng.innerHTML = `ciao i numeri generati sono: ${rng}`;
outputRng.append();
console.log(rng);

// Da lì parte un timer di 30 secondi.

let clock = setInterval(() => {
    if(seconds === 0){
        timerSelector.innerHTML = "";
        outputRng.innerHTML ="";
        divSelector = document.getElementById("grid");
        divSelector.innerHTML += `<input type="button" id="submit" value="Verifica!">`;
        divSelector.append();
        for(let i = 0; i < rng.length; i++){
            // Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
            // userSelectedNums.push(parseInt(prompt("inserisci il " + contatoreScelta[i])));
            divSelector.innerHTML += `<input type="number" id="${contatoreScelta[i]}" value="${contatoreScelta[i]}" class="btn-num">`;
            divSelector.append();
            
        }
        divSelector = document.getElementById("submit");
            console.log(divSelector);
            divSelector.addEventListener("click", 
            function(){
                let btnNumValue;
                let userSelectedNums = [];
                for(let i = 0; i < rng.length; i++){
                    btnNumValue = parseInt(document.getElementById(contatoreScelta[i]).value);
                    console.log(btnNumValue);
                    userSelectedNums.push(btnNumValue);      
                }
        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
        let userNumsCorrectGuess = [];
        
        for(let i = 0; i < rng.length; i++ ){
            console.log(userSelectedNums + "numeri user");
            console.log(rng + "rng");
            console.log(userNumsCorrectGuess);
            if(userSelectedNums.includes(rng[i])){
                userNumsCorrectGuess.push(rng[i]);
                
            }
            divSelector = document.getElementById("contenitore");
            divSelector.innerHTML = `<span> I numeri selezionati dall'utente sono ${userSelectedNums}, i numeri corretti selezionati dallo user sono ${userNumsCorrectGuess}, i numeri generati dalla funzione sono ${rng}, la quantità di numeri indovinata dallo user è ${userNumsCorrectGuess.length} </span>`;
            console.log("numeri selezionati dallo user " + userNumsCorrectGuess, "numeri generati dalla funzione " + rng, "quantità di numeri indovinata dallo user " + userNumsCorrectGuess.length);
    }
            }
            );
        clearInterval(clock);
    }
    else{
        seconds--;
        console.log(seconds + 1);
        timerSelector.innerHTML = `${seconds} secondi rimanenti`;
        
    }
    
}, 1000);







