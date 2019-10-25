const xss = require('xss')

//returns all words in hangman_words table
const WordsService = {
  getAllWords(db) {
    return db
      .from('hangman_words AS words')
      .select(
        'words.word',
        'words.difficulty',
        'words.word_id'
    )
  },


  //returns random word the user has not solved at a specified difficulty
  getRandomWord(db, user_id, difficulty){
    return db
      .from('hangman_solves AS solves')
      .join('hangman_words AS words', 'words.word_id', '=', 'solves.word_id')
      .whereNot({'solves.user_id': user_id})
      .where({'words.difficulty': difficulty})
      .select('words.word_id', 'words.word')
      .orderByRaw('random()')
      .limit(1)

    },
}

module.exports = WordsService