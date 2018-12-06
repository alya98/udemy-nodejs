const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const options = {
  titleOptions: {
    describe: 'title of note',
    demand: true,
    alias: 't'
  },
  bodyOptions: {
    describe: 'body of note',
    demand: true,
    alias: 'b'
  }
}
const argv = yargs
  .command('add','add a new note', {
    title: options.titleOptions,
    body: options.bodyOptions
  })
  .command('list', 'list of all notes')
  .command('read', 'read a note', {
    title: options.titleOptions,
  })
  .command('remove', 'remove a note', {
    title: options.titleOptions,
  })
  .help()
  .argv;
const command = argv._[0];

if(command === 'add') {
  const note = notes.addNotes(argv.title, argv.body);
  if (note) {
    console.log('note created');
    notes.logNote(note);
  }
  else console.log('note did not created')
} else if (command === 'list') {
  const notesArray = notes.getAll();
  if(notesArray.length){
    console.log(`list of all ${notesArray.length} notes: `);
    notesArray.forEach(note => notes.logNote(note))
  } else {
    console.log('notes were not found');
  }
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  const message = note ? `note was found: ${note.title}`: 'note was not found';
  console.log(message);
} else if (command === 'remove') {
  const isRemoved = notes.removeNote(argv.title);
  const message = isRemoved ? 'note was removed': 'note was not found';
  console.log(message)
} else {
  console.log('command does not recognized')
}
