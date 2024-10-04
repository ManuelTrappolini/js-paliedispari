console.log('it works');
//Palidroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//0. Tools
 //-variables
 //-function
 //-prompt
 
//1. preparazione dati - stabilisco funzione per vedere se una parola e' palindroma usando i metodi split reverse e join


 function palindromeWord (word){
        let reverseWord = word.split("").reverse().join("");
        if(reverseWord === word){
            console.log(true);
            
        }
        else{
            console.log(false);
            
        }
    }
 
   //2. creo una costante per il prompt ed invoco funzione
   
   const checkword = prompt ('inserisci una parola')
   
   if(palindromeWord(checkword)){
    alert("La parola e' palindroma ")
   }
   
   

  
    