console.log('it works');

//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


//0. Tools
//  -variables
//  - math.floor and math.random
//  - function

//.1 stabilisco funzione per far generare un numero random alla Cpu ed eventuali variabili per il prompt che serviranno dopo
/* let userEvenOrOdd = prompt('scegli pari o dispari')
let user_number = Number(prompt('inserisci un numero')) */

function userNumber(number){
   let chooseNumber = Number(prompt('inserisci un numero da 1 a 5'))
   return chooseNumber
}

function randomNumberCpu(){
    let numbRandomCpu = Math.floor((Math.random() * 5) + 1)
    console.log(numbRandomCpu);
    return numbRandomCpu
}
//2 creo una funzione per sommare il numero dell'utente al numero del cpu e verificare se sia pari o dispari
function is_even () {
        let numbersSum = randomNumberCpu() + userNumber;
        if(numbersSum % 2 === 0){
        console.log( 'Even');
        return even
        }
    }
        else{
        console.log('Odd');
        return odd
    }


