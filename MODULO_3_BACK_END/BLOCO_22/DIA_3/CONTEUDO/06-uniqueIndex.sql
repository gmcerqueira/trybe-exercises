SHOW INDEX FROM sakila.actor;

CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

DROP INDEX unique_name_index ON sakila.language;

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';