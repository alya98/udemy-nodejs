// const obj = {
//   name: 'Alina'
// }
// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// const personString = '{"name": "Alina", "age": 20}';
// console.log(typeof personString);
// console.log(JSON.parse(personString));

const fs = require('fs');

const originalNote = {
  title: 'some title',
  body: 'some body',
}

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString)
console.log(note)