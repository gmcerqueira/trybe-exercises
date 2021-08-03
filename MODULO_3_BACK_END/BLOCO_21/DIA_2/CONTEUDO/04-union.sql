-- 1
SELECT
  first_name,
  last_name
FROM
  sakila.staff
UNION ALL
SELECT
  first_name,
  last_name
FROM
  sakila.actor;
-- 2
SELECT
  first_name
FROM
  sakila.customer
WHERE
  first_name LIKE '%tracy%'
UNION
SELECT
  first_name
FROM
  sakila.actor
WHERE
  first_name LIKE '%je%';
-- 3
  (
    SELECT
      first_name
    FROM
      sakila.actor
    ORDER BY
      actor_id DESC
    LIMIT
      5
  )
UNION
  (
    SELECT
      first_name
    FROM
      sakila.staff
    LIMIT
      1
  )
UNION
  (
    SELECT
      first_name
    FROM
      sakila.customer
    LIMIT
      5 OFFSET 15
  )
ORDER BY
  first_name;
-- 4
  (
    SELECT
      first_name,
      last_name
    FROM
      sakila.actor
    LIMIT
      60
  )
UNION ALL
  (
    SELECT
      first_name,
      last_name
    FROM
      sakila.customer
    LIMIT
      60
  )
ORDER BY
  first_name,
  last_name
LIMIT
  15 OFFSET 45;