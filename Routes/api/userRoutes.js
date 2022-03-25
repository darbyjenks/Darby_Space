const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
  } = require('../../Controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:user
router.route('/:userId').get(getSingleUser);

module.exports = router;