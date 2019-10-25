CREATE TABLE hangman_words (
  word_id SERIAL PRIMARY KEY,
  --word_id uuid DEFAULT uuid_generate_v4(),
  word TEXT NOT NULL,
  difficulty INTEGER NOT NULL
);

ALTER TABLE hangman_solves
  ADD COLUMN 
    word_id INTEGER REFERENCES hangman_words(word_id) ON DELETE CASCADE;