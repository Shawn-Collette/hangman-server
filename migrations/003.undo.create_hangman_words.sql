DROP TABLE IF EXISTS hangman_words;


ALTER TABLE hangman_solves
  DROP COLUMN IF EXISTS word_id;
  DROP COLUMN IF EXISTS solve_diff;