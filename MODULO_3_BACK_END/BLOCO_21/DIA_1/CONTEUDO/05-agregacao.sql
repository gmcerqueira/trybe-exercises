-- 19.984000 (Média entre todos registros)
SELECT
  AVG(replacement_cost)
FROM
  sakila.film;
-- 9.99 (Menor valor encontrado)
SELECT
  MIN(replacement_cost)
FROM
  sakila.film;
-- 29.99 (Maior valor encontrado)
SELECT
  MAX(replacement_cost)
FROM
  sakila.film;
-- 19984.00 (Soma de todos registros)
SELECT
  SUM(replacement_cost)
FROM
  sakila.film;
-- 1000 registros encontrados (Quantidade)
SELECT
  COUNT(replacement_cost)
FROM
  sakila.film;
-- PARA FIXAR
SELECT
  AVG(length) AS 'Média de Duração',
  MIN(length) AS 'Duração Mínima',
  MAX(length) AS 'Duração Máxima',
  SUM(length) AS 'Tempo de Exibição Total',
  COUNT(length) AS 'Filmes Registrados'
FROM
  sakila.film