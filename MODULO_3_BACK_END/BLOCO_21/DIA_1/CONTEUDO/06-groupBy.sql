SELECT
  first_name
FROM
  sakila.actor
GROUP BY
  first_name;
SELECT
  first_name
FROM
  sakila.actor;
SELECT
  first_name,
  COUNT(*) AS repeti ç õ es
FROM
  sakila.actor
GROUP BY
  first_name;
-- Média de duração de filmes agrupados por classificação indicativa
SELECT
  rating,
  AVG(length)
FROM
  sakila.film
GROUP BY
  rating;
-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT
  rating,
  MIN(replacement_cost)
FROM
  sakila.film
GROUP BY
  rating;
-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT
  rating,
  MAX(replacement_cost)
FROM
  sakila.film
GROUP BY
  rating;
-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT
  rating,
  SUM(replacement_cost)
FROM
  sakila.film
GROUP by
  rating;
-- Praticando GROUP BY
  -- 1
SELECT
  active,
  COUNT(*)
FROM
  sakila.customer
GROUP BY
  active;
-- 2
SELECT
  active,
  store_id,
  COUNT(*)
FROM
  sakila.customer
GROUP BY
  store_id,
  active;
-- 3
SELECT
  rating,
  AVG(rental_duration) AS avg_rental_duration
FROM
  sakila.film
GROUP BY
  rating
ORDER BY
  avg_rental_duration DESC;
-- 4
SELECT
  district,
  COUNT(*) AS total
FROM
  sakila.address
GROUP BY
  district
ORDER BY
  total DESC;