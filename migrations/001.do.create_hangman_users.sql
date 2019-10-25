CREATE TABLE hangman_users (
  user_id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL UNIQUE,
  user_hash TEXT NOT NULL
  user_token TEXT,
);