// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
let outputRng = document.getElementById("rng");
let rng = [];
function randomNumberArrayGenerator(max, timesGenerated){

    const array = [];
    let randomNum;

    while(array.length < timesGenerated){

        randomNum = Math.floor(Math.random() * (max + 1) + 1);
        
        if(!array.includes(randomNum)){
            array.push(randomNum);
        }
        
    }
    return array;
}

outputRng.innerHTML = `ciao i numeri generati sono: ${randomNumberArrayGenerator(100, 5)}`
outputRng.append();


