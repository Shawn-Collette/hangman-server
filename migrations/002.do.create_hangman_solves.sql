CREATE TABLE hangman_solves (
    solve_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES hangman_users(user_id) ON DELETE CASCADE,
    date_solved TIMESTAMP DEFAULT now() NOT NULL
);