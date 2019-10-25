const xss = require('xss')

const UsersService = {

  // getUserDataByID(db, user_id){
  //   return db
  //     .from('hangman_users AS users')
  //     .select(
  //       'users.user_id',
  //       'users.user_name',
  //     )
  //     .where('users.user_id', user_id)
  //     .first()
  // },

  //returns all solved words by the provided user_id
  getSolvesByUserID(db, user_id=1){
    return db
    .from('hangman_solves AS solves')
    .join('hangman_words AS words', 'solves.word_id', '=', 'words.word_id')
    .select('solves.word_id', 'words.word', 'words.difficulty')
    .where({'solves.user_id': user_id})
  },

  //returns leaderboard of the top [number] of users
  getTopUserScores(db, number) {
  return db(
    db
    .select('user_id')
    .sum('difficulty AS total')
    .from('hangman_solves AS solves')
    .join('hangman_words AS words', 'solves.word_id', '=', 'words.word_id').groupBy('user_id').as('scores')
  ).join('hangman_users AS users', 'users.user_id', '=', 'scores.user_id')
    .select('user_name', 'total')
    .orderBy('scores')
    .limit(number)
  },
}


module.exports = UsersService


