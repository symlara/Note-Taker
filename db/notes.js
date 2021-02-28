const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes  {
    constructor() {
        this.id = 0;
    }
    read() {
        return readFileAsync("db/db.json");
    }
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }

    getNotes() {
        return this.read().then(notes => {
            let notesArray;
            try{
                notesArray = [].concat(JSON.parse(notes));
            }
            catch(err) {
                notesArray = [];
            }
            return notesArray;
        })
    }

    // add note and also generate a new id with each
    addNotes(note) {
        const { title, text } = note;
        const newNote = { title, text, id: ++this.id }
        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updateNotes => this.write(updateNotes))
        .then(() => newNote)
    }
}
// add removeNote call here later

module.exports = new Notes();