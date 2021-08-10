CREATE INDEX index_first_name ON sakila.actor(first_name);
DROP INDEX index_first_name ON sakila.actor;
SELECT
  *
FROM
  sakila.actor
WHERE
  first_name = 'RITA';