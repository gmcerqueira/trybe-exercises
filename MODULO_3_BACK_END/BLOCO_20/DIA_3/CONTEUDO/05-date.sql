-- Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos
SELECT
  *
FROM
  sakila.payment
WHERE
  DATE(payment_date) = '2005-07-31';
-- Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos
SELECT
  *
FROM
  sakila.payment
WHERE
  payment_date LIKE '2005-07-31%';
-- Encontra um pagamento com dia e hora exatos
SELECT
  *
FROM
  sakila.payment
WHERE
  payment_date LIKE '2005-08-20 00:30:52';
-- Encontra pagamentos especificando um valor mínimo e um valor máximo para a data
SELECT
  *
FROM
  sakila.payment
WHERE
  payment_date BETWEEN '2005-05-26 00:00:00'
  AND '2005-05-27 23:59:59';
-- YYYY-MM-DD
SELECT
  DATE(payment_date)
FROM
  sakila.payment;
-- Ano
SELECT
  YEAR(payment_date)
FROM
  sakila.payment;
-- Mês
SELECT
  MONTH(payment_date)
FROM
  sakila.payment;
-- Dia
SELECT
  DAY(payment_date)
FROM
  sakila.payment;
-- Hora
SELECT
  HOUR(payment_date)
FROM
  sakila.payment;
-- Minuto
SELECT
  MINUTE(payment_date)
FROM
  sakila.payment;
-- Segundo
SELECT
  SECOND(payment_date)
FROM
  sakila.payment;
-- 1
SELECT
  COUNT(*) Payments
FROM
  sakila.payment
WHERE
  DATE(payment_date) = '2005-05-25';
-- 2
SELECT
  COUNT(*) Payments
FROM
  sakila.payment
WHERE
  payment_date BETWEEN '2005-07-01'
  AND '2005-08-22';
-- 3
SELECT
  DATE(rental_date) AS Data,
  YEAR(rental_date) AS Ano,
  MONTH(rental_date) AS Mes,
  DAY(rental_date) AS Dia,
  HOUR(rental_date) AS Hora,
  MINUTE(rental_date) AS Minuto,
  SECOND(rental_date) AS Segundo
FROM
  sakila.rental
WHERE
  rental_id = 10330;
-- 4
SELECT
  *
FROM
  sakila.payment
WHERE
  DATE(payment_date) = '2005-07-28'
  AND HOUR(payment_date) >= 22
ORDER BY
  HOUR(payment_date);