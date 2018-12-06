const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes) )
}

const addNotes = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title, body,
  }
  const duplicateNotes = notes.filter(note => note.title === title);

  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
}

const getNote = title => {
  const notes = fetchNotes();
  return notes.find(note => note.title === title);
}

const removeNote = title => {
  let notes = fetchNotes();
  const notesWithoutRemovedOne = notes.filter(note => note.title !== title);
  saveNotes(notesWithoutRemovedOne);
  return notes.length !== notesWithoutRemovedOne.length;
}

const logNote = (note) => {
  console.log('--');
  console.log('title: '+note.title)
  console.log('body: '+note.body)
}
module.exports = {
  addNotes,
  getAll,
  getNote,
  removeNote,
  logNote,
}
