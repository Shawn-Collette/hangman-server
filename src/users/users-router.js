const express = require('express')
const UsersService = require('./user-service')
const { requireAuth } = require('../middleware/jwt-auth')

const usersRouter = express.Router()

usersRouter
    .route('/scoreboard')
    .get((req, res, next) => {
      UsersService.getTopUserScores(req.app.get('db'))
        .then(userscores => {
        res.json(userscores)
        })
        .catch(next)
});

usersRouter
  .route('/:user_id/solves/')
  .all(requireAuth)
  .all(checkUserExists)
  .get((req, res, next) => {
    UsersService.getScoreByUser(req.app.get('db'), req.params.user_id)
      .then((score) => {
        res.json(UsersService.serializeThingReviews(reviews));
      })
      .catch(next);
  });


async function checkUserExists(req, res, next) {
  try {
    const user = await UsersService.getUserDataByID(req.app.get('db'), req.params.thing_id);

    if (!user)
      return res.status(404).json({
        error: `User doesn't exist`,
      });

    res.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = usersRouter;
