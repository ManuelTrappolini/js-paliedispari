console.log('it works');

//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


//0. Tools
//  -variables
//  - math.floor and math.random
//  - function

//.1 stabilisco funzione per far generare un numero random alla Cpu ed eventuali variabili per il prompt che serviranno dopo


  
function userNumber(){
   let chooseNumber = Number(prompt('inserisci un numero da 1 a 5'))
   return chooseNumber
}

function randomNumberCpu(){
    let numbRandomCpu = Math.floor((Math.random() * 5) + 1)
    console.log(numbRandomCpu);
    return numbRandomCpu;
}
//.2 creo una funzione per chiedere all'utente pari o dispari,sommare il numero dell'utente al numero del cpu e verificare se sia pari o dispari e dichiarare vincitore di conseguenza
function is_even_or_odd () {
    let askToUser = prompt('Scegli pari o dispari')
    if(askToUser === 'pari'){
      let chooseNumber = userNumber()
      let numbersSum = randomNumberCpu() + chooseNumber;
      console.log(`La somma è: ${numbersSum}`)
      if(numbersSum % 2 === 0){
        console.log('Even');
        alert("Il risultato e' Pari! Complimenti! Hai vinto!!")
        return 'Even'

      } else {
        console.log('Odd');
        let odd = alert("Il risultato e' Dispari, Mi Dispiace hai perso...")
        return 'Odd'
        
      }
    } else if(askToUser === 'dispari') {
      let chooseNumber = userNumber()
      let numbersSum = randomNumberCpu() + chooseNumber;
      console.log(`La somma è: ${numbersSum}`)
      if(numbersSum % 2 !== 0){
        alert("Il risultato e' Dispari, Complimenti! Hai vinto!!")
        return 'Odd'
        
      } else {
        alert("Il risultato e' pari, Mi Dispiace hai perso...")
        return 'Even'
      }
    } else {
      alert("Inserisci 'pari' o 'dispari'")
      return null
    }
  }


  is_even_or_odd()
