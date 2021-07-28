SELECT
  *
FROM
  sakila.payment
WHERE
  amount = 0.99
  OR amount = 2.99
  AND staff_id = 2;
-- operador AND tem preferência sobre OR, então será executado primeiro.
SELECT
  *
FROM
  sakila.payment
WHERE
  (
    amount = 0.99
    OR amount = 2.99
  )
  AND staff_id = 2;