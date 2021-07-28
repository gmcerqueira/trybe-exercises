-- 1
SELECT
  *
FROM
  sakila.customer
WHERE
  email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
-- 2
SELECT
  *
FROM
  sakila.customer
WHERE
  active IS FALSE
  AND store_id = 2
  AND first_name <> 'KENNETH'
ORDER BY
  first_name;
-- 3
SELECT
  title,
  description,
  release_year,
  replacement_cost
FROM
  sakila.film
WHERE
  replacement_cost >= 18
  AND rating <> 'NC-17'
ORDER BY
  replacement_cost DESC,
  title
LIMIT
  100;
-- 4
SELECT
  COUNT(*) AS 'Clientes ativos loja 1'
FROM
  sakila.customer
WHERE
  store_id = 1
  AND active;
-- 5
SELECT
  *
FROM
  sakila.customer
WHERE
  store_id = 1
  AND NOT active;
-- 6
SELECT
  *
FROM
  sakila.film
WHERE
  rating = 'NC-17'
ORDER BY
  rental_rate,
  title
LIMIT
  50;