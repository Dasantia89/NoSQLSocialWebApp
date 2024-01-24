const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    //   removeFriend,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:userId/:thoughtId/
router.route('/:userId/:thoughtId').get(getSingleThought).delete(deleteThought)
router.route('/:thoughtId').put(updateThought);

module.exports = router;
