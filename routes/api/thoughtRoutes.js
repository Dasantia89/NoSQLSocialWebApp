const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:userId/:thoughtId/
router.route('/:userId/:thoughtId').get(getSingleThought).delete(deleteThought)

router.route('/:thoughtId').put(updateThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions/').post(createReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)
module.exports = router;
