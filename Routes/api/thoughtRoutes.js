const router = require('express').Router();

const {
  getSingleThought,
  getThoughts,
  createThought,
  addReaction,
  deleteReaction,
} = require('../../Controllers/thoughtController');;

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
// /api/thoughts/:id
router.route('/:thoughtId').get(getSingleThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addThoughtReaction);

// /api/thoughts/:thoughtId/responses/:responseId
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;