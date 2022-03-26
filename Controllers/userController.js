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
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : User.findOneAndUpdate(
              { videos: req.params.userId },
              { $pull: { users: req.params.userId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'User created but no user with this id!' })
          : res.json({ message: 'User successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  //add friend
  addFriend(req, res) {
    console.log('You have added a friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.body } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //remove friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friend: { friendId: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID' })
          : res.json(student)
      )
      .catch((err) => res.status(500).json(err));
  },
};
