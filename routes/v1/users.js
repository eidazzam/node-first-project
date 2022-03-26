const express = require('express');
const upload = require('../../utils/file-storage');

const { authenticated } = require('../../controllers/auth');
const {
  getAllUsers,
  createUser,
  uploadAvatar,
} = require('../../controllers/users');

const usersRouter = express.Router();

usersRouter.get('/', authenticated, getAllUsers);

usersRouter.post('/', createUser);

usersRouter.patch('/:id', (req, res) => {
  res.send('user updated');
});

usersRouter.delete('/:id', (req, res) => {
  res.send('user deleted');
});

usersRouter.post(
  '/photo',
  authenticated,
  upload.single('avatar'),
  uploadAvatar
);

module.exports = usersRouter;
