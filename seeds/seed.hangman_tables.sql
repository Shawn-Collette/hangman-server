BEGIN;

TRUNCATE
  hangman_words,
  hangman_solves,
  hangman_users
  RESTART IDENTITY CASCADE;

INSERT INTO hangman_users (user_name, user_hash)
VALUES
  ('test1', '$2y$12$aMTQxPkj9UkrW3h/SKFpOOM46SKy8dJ7U.SN4wuZIU4bJLuRYVOX.'),
  ('test2', '$2y$12$aMTQxPkj9UkrW3h/SKFpOOM46SKy8dJ7U.SN4wuZIU4bJLuRYVOX.'),
  ('test3', '$2y$12$aMTQxPkj9UkrW3h/SKFpOOM46SKy8dJ7U.SN4wuZIU4bJLuRYVOX.'),
  ('test4', '$2y$12$aMTQxPkj9UkrW3h/SKFpOOM46SKy8dJ7U.SN4wuZIU4bJLuRYVOX.');


INSERT INTO hangman_words (word, difficulty)
VALUES
  ('chicken', 2),
  ('meatball', 2),
  ('spam', 1),
  ('egg', 1),
  ('spaghetti', 3),
  ('espresso', 3),
  ('tuna', 1),
  ('bread', 2),
  ('rice', 1),
  ('icecream', 3),
  ('steak', 2),
  ('potato', 3),
  ('banana', 3),
  ('apple', 2),
  ('grape', 1),
  ('salad', 1),
  ('squash', 2);


INSERT INTO hangman_solves (word_id, user_id)
VALUES
  (1, 4),
  (2, 4),
  (3, 3),
  (4, 4),
  (5, 3),
  (6, 2),
  (7, 1),
  (8, 3),
  (9, 4),
  (10, 3),
  (11, 1),
  (12, 2),
  (1, 2),
  (2, 1),
  (3, 4),
  (5, 2),
  (6, 1),
  (7, 3),
  (8, 4),
  (10, 1);
 

COMMIT;
