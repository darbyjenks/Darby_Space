const {User, Thought} = require('../models');

module.exports = {
    getUsers(req,res){
        User.find()
        .then(userData => res.json(userData))
        .catch(err => res.json(err));
    },
//single user
    getSingleUser(req,res){
        User.findOne({ _id: req.params.commentId })
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
        return Post.findOneAndUpdate(
          { _id: req.body.postId },
          { $push: { users: userData._id } },
          { new: true }
        );
      })
      .then((post) =>
        !post
          ? res
              .status(404)
              .json({ message: 'user created, but no users with this ID' })
          : res.json({ message: 'user created' })
      )
      .catch((err) => {
        console.error(err);
      });
  },
};
//update
//delete
//add friend
//remove friend

// module.exports = userController