var router = require('express').Router();
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
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json(err));
})

router.delete("/notes/:id", (req, res) => {
    notes.removeNote(req.params.id)
    .then(() => res.join({ok: true}))
    .catch(err => res.status(500).json(err));
})



module.exports = router;
