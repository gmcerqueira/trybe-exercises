-- 1
SELECT
  *
FROM
  sakila.staff;
INSERT INTO
  sakila.staff (
    first_name,
    last_name,
    address_id,
    email,
    store_id,
    active,
    username,
    last_update
  )
VALUES
  (
    'João',
    'Ferreira',
    5,
    'Jpao.Ferreita.sakilastaff.com',
    2,
    0,
    'jfer',
    NOW()
  );
-- 2
SELECT
  *
FROM
  sakila.staff;
INSERT INTO
  sakila.staff (
    first_name,
    last_name,
    address_id,
    email,
    store_id,
    active,
    username,
    last_update
  )
VALUES
  (
    'João',
    'Ferreira',
    5,
    'Joao.Ferreita@sakilastaff.com',
    2,
    0,
    'jfer',
    NOW()
  ),
  (
    'Pedro',
    'Ferreira',
    6,
    'Pedro.Ferreita@sakilastaff.com',
    1,
    1,
    'pedrof',
    NOW()
  );
-- 3
INSERT INTO
  sakila.actor (first_name, last_name)
SELECT
  first_name,
  last_name
FROM
  sakila.customer
LIMIT
  5;
-- 4
INSERT INTO
  sakila.category (name)
VALUES
  ('Sci-Fi'),
  ('Fantasy'),
  ('Biography');
-- 5
INSERT INTO
  sakila.store (manager_staff_id, address_id)
VALUES
  (3, 3);