const {User, Thought} = require('../models');
// const User = require('../models/User');

module.exports = {
    getUsers(req,res){
        User.find()
        .then(userData => res.json(userData))
        .catch(err => res.json(err));
    },
//single user
    getSingleUser(req,res){
        User.findOne({ _id: req.params.userId })
        .then((userData) =>
        !userData
          ? res.status(404).json({ message: 'No user found with that id' })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
    },
//add user
createUser(req, res) {
    User.create(req.body)
      .then((userData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { users: userData._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'user created, but no users with this ID' })
          : res.json({ message: 'user created' })
      )
      .catch((err) => {
        console.error(err);
      });
  },
  //update
  //delete
  //add friend
  //remove friend
};
