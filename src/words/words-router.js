const express = require('express')
const WordsService = require('./words-service')
const { requireAuth } = require('../middleware/jwt-auth')

const wordsRouter = express.Router()

wordsRouter
    .route('/')
    .get((req, res, next) => {
      WordsService.getRandomWord(req.app.get('db'))
        .then(word => {
        res.json(word)
        })
        .catch(next)
});

module.exports = wordsRouter;
