SET
  SQL_SAFE_UPDATES = 1;
-- 1
UPDATE
  sakila.actor
SET
  first_name = 'JULES'
WHERE
  first_name = 'JULIA';
-- 2
UPDATE
  sakila.category
SET
  name = 'Science Fiction'
WHERE
  name = 'Sci-Fi';
-- 3
UPDATE
  sakila.film
SET
  rental_rate = 25.0
WHERE
  length > 100
  AND rating IN ('g', 'pg', 'pg-13')
  AND replacement_cost > 20.0;
-- 4
UPDATE
  sakila.film
SET
  rental_rate = (
    CASE
      WHEN length BETWEEN 0
      AND 100 THEN 10
      WHEN length > 100 THEN 20
      ELSE rental_rate
    END
  );