/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) { // < non >
    console.log(i);
}
// mostra in console i numeri da 0 a 4


// ESERCIZIO 2
function addIfEven(num) {
    // if (num % 2 = 0) { 
       if (num % 2 === 0) { // Per comparare si usano 3 =
        return num + 5;
    }
    return num;
}
addIfEven(2)
// Funzione che controlla se un numero è pari e lo ritorna aumentato di 5 -- altrimenti ritorna il numero stesso


// ESERCIZIO 3
function loopToFive() {
    // for (let i = 0, i < 5, i++) {
       for (let i = 0; i < 5; i++) { // tra gli elementi del for ci va il ;
        console.log(i);
    }
}
//stampa in console i primi 5 numeri


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    // for (let i = 0; i < numbers.length - 1; i++;) {
    for (let i = 0; i <= numbers.length - 1; i++) { //non va messo ; dopo i++ e se si usa length - 1 bisogna mettere <=
        // if (numbers % 2 = 0);
        if (numbers[i] % 2 === 0) { // Per comparare si usano 3 =
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]