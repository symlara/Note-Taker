var router = require('express').Router();
const { RSA_NO_PADDING } = require('constants');
var notes = require('../db/notes.js');

router.get("/notes", (req, res) => {
    notes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json(err));
})

router.get("/notes/:id", (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    }else {
        res.send(404);
    }
});

router.post("/notes", (req, res) => {
   res.send(req.id).status(200);

    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json(err));
})

// add delete call here later

module.exports = router;
