const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log(fourthTeacher);


// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

//Didn't use indexOf because I need to change the 5th element, not a specified string
//With splice() I can change an element content
teachers.splice(4,1,'Patrick')
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

//pop() remove the last element of the array and returns it
const lastTeacher = teachers.pop();
console.log(lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

//shift() remove the first element of the array and it returns that element
const firstTeacher = teachers.shift();
console.log(firstTeacher);
console.log(teachers);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

//push() add the element at the end of the array 
teachers.push('Vanessa')
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

//unshift() add the element at the start of the array 
teachers.unshift('Sarah')
console.log(teachers);


// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const isFabioPresent = teachers.indexOf('Fabio');

//indexOf() returns -1 if the element is not in the array
if (isFabioPresent !== -1){

  //+1 because js is a zero-based language, so indexes start from 0
  console.log(`Fabio è nella lista nella posizione ${isFabioPresent + 1}`)
} else {
  console.log('Fabio non è nella lista')
}

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis');
if (lewisIndex !== -1){
  console.log(`Lewis è nella lista nella posizione ${lewisIndex + 1}`)
} else {
  console.log('Lewis non è nella lista')
}

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString

//join() is used to put all array's elements in a string, u can choose the separator too
const teachersString = teachers.join(', ');
console.log(teachersString)

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
let isTeachersEmpty = false;

if (!teachers.length){
  isTeachersEmpty = true
}

console.log(isTeachersEmpty);
