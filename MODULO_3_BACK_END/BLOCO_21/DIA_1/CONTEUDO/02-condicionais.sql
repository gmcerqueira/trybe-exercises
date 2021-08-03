SELECT
  first_name,
  IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM
  sakila.customer
LIMIT
  20;
SELECT
  first_name,
  email,
  CASE
    WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
    WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
    WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
    ELSE 'não classificado'
  END AS valor
FROM
  sakila.customer
LIMIT
  10;
-- 1
SELECT
  film_id,
  title,
  IF (
    title = 'ACE GOLDFINGER',
    'Já assisti a esse filme',
    'Não conheço o filme'
  ) AS 'conheço o filme?'
FROM
  sakila.film;
-- 2
SELECT
  title,
  rating,
  CASE
    rating
    WHEN 'G' THEN "Livre para todos"
    WHEN 'PG' THEN 'Não recomendado para menores de 10 anos'
    WHEN 'PG-13' THEN 'Não recomendado para menores de 13 anos'
    WHEN 'R' THEN 'Não recomendado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
  END AS 'público alvo'
FROM
  sakila.film;