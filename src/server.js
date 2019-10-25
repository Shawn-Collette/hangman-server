const knex = require('knex')
const app = require('./app')
const { PORT, DB_URL } = require('./config')
const UsersService = require('./users/user-service')
const WordsService = require('./words/words-service')

const db = knex({
  client: 'pg',
  connection: DB_URL,
})

app.set('db', db)

app.listen(PORT, () => {

//   UsersService.getUserDataByID(db, 1)
//   .then(res => {
//     console.log(res)
//   }
// );
  
//   UsersService.getSolvesByUserID(db, 3)
//     .then(res => {
//       console.log(res)
//     }
//   );

//   UsersService.getTopUserScores(db, 4)
//   .then(res => {
//     console.log(res)
//   }
// );

//   WordsService.getRandomWord(db, 1, 3)
//   .then(res => {
//     console.log(res)
//   }
// );

    console.log(`Server listening at http://localhost:${PORT}`);

})
