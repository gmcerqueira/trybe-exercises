SELECT
  first_name,
  COUNT(*)
FROM
  sakila.actor
GROUP BY
  first_name
HAVING
  COUNT(*) >= 2;
-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
  -- melhorando a leitura do resultado
SELECT
  first_name,
  COUNT(*) AS nomes_cadastrados
FROM
  sakila.actor
GROUP BY
  first_name
HAVING
  nomes_cadastrados > 2;
-- Observação: o alias não funciona com strings para o HAVING,
  -- então use o underline ("_") para separar palavras
  -- Ou seja, o exemplo abaixo não vai funcionar
SELECT
  first_name,
  COUNT(*) AS 'nomes cadastrados'
FROM
  sakila.actor
GROUP BY
  first_name
HAVING
  'nomes cadastrados' > 2;
-- 1
SELECT
  rating,
  AVG(length) AS average_length
FROM
  sakila.film
GROUP BY
  rating
HAVING
  average_length BETWEEN 115.0
  AND 121.5
ORDER BY
  average_length DESC;
-- 2
SELECT
  rating,
  SUM(replacement_cost) AS total_replacement_cost
FROM
  sakila.film
GROUP by
  rating
HAVING
  total_replacement_cost > 3950.5
ORDER BY
  total_replacement_cost;