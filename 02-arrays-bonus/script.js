const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

//reverse function reverse the entire array
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
let longNames = [];

for (let i = 0; i < teachers.length; i++){

  //if the array's element has a length of 5 or more, it will be pushed in longNames
  if (teachers[i].length >= 5){
    longNames.push(teachers[i])
  }
}
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers

//without creating a var for indexOf
//I can use splice() function to remove an element of the array
teachers.splice(teachers.indexOf('Ed'),1)
console.log(teachers)