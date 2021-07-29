DELETE FROM
  sakila.film_text
WHERE
  title = 'ACADEMY DINOSAUR';
DELETE FROM
  sakila.actor
WHERE
  first_name = 'GRACE';
DELETE FROM
  sakila.film_actor
WHERE
  actor_id = 7;
-- 1
SELECT
  actor_id
FROM
  sakila.actor
WHERE
  first_name = 'karl';
DELETE FROM
  sakila.film_actor
WHERE
  actor_id = 12;
DELETE FROM
  sakila.actor
WHERE
  actor_id = 12;
-- 2
SELECT
  actor_id
FROM
  sakila.actor
WHERE
  first_name = 'matthew';
DELETE FROM
  sakila.film_actor
WHERE
  actor_id in (8, 103, 181);
DELETE FROM
  sakila.actor
WHERE
  actor_id in (8, 103, 181);
-- 3
DELETE FROM
  sakila.film_text
WHERE
  description LIKE '%saga%';
-- 4
  TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;