const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:username
router.route('/:username').get(getSingleUser).delete(deleteUser);

// /api/users/:username/friends/:friendname
router.route('/:username/friends/:friendname').post(addFriend);

// /api/users/:usename/friends/:friendname
router.route('/:username/friends/:friendname').delete(removeFriend);

module.exports = router;
