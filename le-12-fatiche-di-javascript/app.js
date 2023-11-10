const input = document.querySelector('input');
// const array = null;
const array = []; // Gli array si diachiarano così, non con null

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return;

    // array.add(input.value);
    array.push(input.value); // Si usa push per aggiungere un elemento ad un array
    console.log(array)

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    // li.text = input.value;
    li.innerText = input.value; // La corretta sintassi è innerText e non solo text   
    // document.querySelector('ul').push(li);
    document.querySelector('ul').append(li); // Per mettere un elemento js in html serve .append 

    // let counter = '';
    let counter = 0; // Una variabile usata come CONTATORE deve essere numerica e non una stringa
    let item    = array[0];
    // const max   = 1;
    let max   = 1; // Max verrà modificata nel corso del programma quindi deve essere inizializzata con let e non come costante const
    const elems = [];

    // for (let i = 0; i < array; i++) {
       for (let i = 0; i < array.length; i++) { // La lunghezza dell'array si ottiene con il method .length e non solo con array
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        // for (let j = i; j < array.length; i++) {
           for (let j = i; j < array.length; j++) {    // Il vaolre da incrementare adesso è j non i
            if (array[i] == array[j]) {
                counter++;
                if (max < counter){ // Mancavano le {}
                max  = counter;
                item = array[i];
                }
            }
        }

        counter = 0;
    }

    const alert = document.getElementsByClassName('alert');

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    // console.log('${item} trovato ${max} volte');
       console.log(`${item} trovato ${max} volte`); // sono stati usati gli apici singoli invece dei backtick
});