const router = require('express').Router();

const {
  getSingleThought,
  getThoughts,
  createThought,
} = require('../../Controllers/thoughtController');;

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);
// /api/thoughts/:id
router.route('/:thoughtId').get(getSingleThought);

module.exports = router;