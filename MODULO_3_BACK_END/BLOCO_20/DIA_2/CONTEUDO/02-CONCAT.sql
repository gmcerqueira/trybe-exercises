SELECT
  CONCAT(first_name, ' ', last_name) AS 'Full name'
FROM
  sakila.actor;
SELECT
  CONCAT(title, ' ', release_year) AS 'Film launch'
FROM
  sakila.film;
SELECT
  CONCAT(title, ' ', rating) AS 'Film launch'
FROM
  sakila.film;
SELECT
  CONCAT(address, ' - ', district) AS address
FROM
  sakila.address;