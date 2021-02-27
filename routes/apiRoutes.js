var router = require('express').Router();
var notes = require('../db/notes.js');

router.get("/notes", (req, res) => {
    notes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).jsonp(err));
})

router.post("/notes", (req, res) => {
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json(err));
})

// add delete call here later

module.exports = router;
