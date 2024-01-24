const { ObjectId } = require('mongoose').Types;
const { User, Thought, Reaction } = require('../models');

module.exports = {
  // Get all students
  async getUsers(req, res) {
    try {
      const users = await User.find();

      const userObj = {
        users
      };

      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single student
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.username })
        .select('-__v')

      if (!user) {
        return res.status(404).json({ message: 'No User with that Username' })
      }

      res.json({
        student
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new student
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a student and remove them from the course
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.username });

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }

      res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add an assignment to a student
  async addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);

    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.username },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that username :(' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // Remove assignment from a student
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.usernmae },
        { $pull: { friends: { username: req.params.friendname } } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that username :(' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
