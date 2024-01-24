const router = require('express').Router();
const {
    
    createThought,
    deleteThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:userId/:thoughtId/
router.route('/:userId/:thoughtId').delete(deleteThought)


module.exports = router;
