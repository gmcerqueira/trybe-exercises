-- IN
SELECT
  *
FROM
  sakila.actor
WHERE
  first_name = 'PENELOPE'
  OR first_name = 'NICK'
  OR first_name = 'ED'
  OR first_name = 'JENNIFER';
-- Melhor forma:
SELECT
  *
FROM
  sakila.actor
WHERE
  first_name IN ('PENELOPE', 'NICK', 'ED', 'JENNIFER');
SELECT
  *
FROM
  sakila.customer
WHERE
  customer_id in (1, 2, 3, 4, 5);
SELECT
  *
FROM
  sakila.customer
WHERE
  customer_id IN (269, 239, 126, 399, 142);
SELECT
  *
FROM
  sakila.address
WHERE
  district IN (
    'QLD',
    'Nagasaki',
    'California',
    'Attika',
    'Mandalay',
    'Nantou',
    'Texas'
  );
-- BETWEEN
  -- Note que o MySQL inclui o valor inicial e o final nos resultados
SELECT
  title,
  length
FROM
  sakila.film
WHERE
  length BETWEEN 50
  AND 120;
-- Usando o BETWEEN com strings
SELECT
  *
FROM
  sakila.language
WHERE
  name BETWEEN 'Italian'
  AND 'Mandarin'
ORDER BY
  name;
-- Usando o BETWEEN com datas
SELECT
  rental_id,
  rental_date
FROM
  sakila.rental
WHERE
  rental_date BETWEEN '2005-05-27'
  AND '2005-07-17';
-- 1
SELECT
  first_name,
  last_name,
  email
FROM
  sakila.customer
WHERE
  last_name IN (
    'hicks',
    'crawford',
    'henry',
    'boyd',
    'mason',
    'morales',
    'kennedy'
  )
ORDER BY
  first_name;
-- 2
SELECT
  email
FROM
  sakila.customer
WHERE
  address_id BETWEEN 172
  AND 176
ORDER BY
  first_name;
--3
SELECT
  COUNT(*) 'Total pagamentos'
FROM
  sakila.payment
WHERE
  payment_date BETWEEN '2005-05-01'
  AND '2005-08-01';
-- 4
SELECT
  title,
  release_year,
  rental_duration
FROM
  sakila.film
WHERE
  rental_duration BETWEEN 3
  AND 6
ORDER BY
  rental_duration DESC,
  title;
-- 5
SELECT
  title,
  rating
FROM
  sakila.film
WHERE
  rating IN ('G', 'PG', 'PG-13')
ORDER BY
  title
LIMIT
  500;