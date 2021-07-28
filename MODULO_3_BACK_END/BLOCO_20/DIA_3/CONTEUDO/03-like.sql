-- Encontra qualquer resultado finalizando com "don"
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '%don';
-- Encontra qualquer resultado iniciando com "plu"
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE 'plu%';
-- Encontra qualquer resultado que contém "plu"
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '%plu%';
-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE 'p%r';
-- Encontra qualquer resultado em que o segundo caractere da frase é "C"
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '_C%';
-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '________';
-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE 'E__%';
-- 1
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '%ace%';
-- 2
SELECT
  *
FROM
  sakila.film
WHERE
  description LIKE '%china';
-- 3
SELECT
  *
FROM
  sakila.film
WHERE
  description LIKE '%girl%'
  AND title like '%lord';
-- 4
SELECT
  *
FROM
  sakila.film
WHERE
  title like '___gon%';
-- 5
SELECT
  *
FROM
  sakila.film
WHERE
  title like '___gon%'
  AND description LIKE '%Documentary%';
-- 6
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '%academy'
  OR title LIKE 'mosquito%';
--7
SELECT
  *
FROM
  sakila.film
WHERE
  description LIKE '%monkey%'
  AND description LIKE '%sumo%';