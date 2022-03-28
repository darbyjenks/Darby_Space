const router = require('express').Router();

const {
  getSingleThought,
  getThoughts,
  createThought,
  deleteThought,
  addThoughtReaction,
  deleteThoughtReaction,
  updateThought,
} = require('../../Controllers/thoughtController');;

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
// /api/thoughts/:id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
// /api/thoughts/:thoughtId
// router
//   .route('/:thoughtId')
//   .get(getSingleThought)
//   .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reaction').post(addThoughtReaction);

// /api/thoughts/:thoughtId/responses/:responseId
router.route('/:thoughtId/reaction/:reactionId').delete(deleteThoughtReaction);

module.exports = router;