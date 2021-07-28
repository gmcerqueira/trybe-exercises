SELECT
  'Gustavo' AS Nome,
  'Cerqueira' AS Sobrenome,
  'Belo Horizonte' AS 'Cidade natal',
  27 AS Idade,
  13 * 8 AS Multipilcacao,
  NOW() AS 'Data atual';
SELECT
  *
FROM
  sakila.city;
SELECT
  first_name,
  last_name
FROM
  sakila.customer;
SELECT
  *
FROM
  sakila.rental;
SELECT
  title,
  description,
  release_year
FROM
  sakila.film