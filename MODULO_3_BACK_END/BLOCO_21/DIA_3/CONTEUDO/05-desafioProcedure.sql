USE sakila;

DELIMITER $$ 

CREATE PROCEDURE exibirTop10Atores()
BEGIN
  SELECT
    CONCAT(a.first_name, ' ', a.last_name) AS Actor,
    COUNT(*) AS Films
  FROM
    sakila.actor AS a
    INNER JOIN sakila.film_actor AS f ON a.actor_id = f.actor_id
  GROUP BY
    a.actor_id
  ORDER BY
    FILMS DESC,
    Actor
  LIMIT
    10;
END $$

CREATE PROCEDURE buscarFilmesDeUmaCategoria(IN category VARCHAR(50))
BEGIN
  SELECT
    f.film_id,
    f.title,
    c.category_id,
    c.name
  FROM
    sakila.film AS f
    INNER JOIN sakila.film_category AS fc ON f.film_id = fc.film_id
    INNER JOIN sakila.category AS c ON fc.category_id = c.category_id
  WHERE
    c.name = category;
END $$

CREATE PROCEDURE retornaSeClienteEstaAtivo(IN emailBuscado VARCHAR(80), OUT ativo VARCHAR(30))
BEGIN
  SELECT
    IF(active, 'Cliente Ativo', 'Cliente Inativo') INTO ativo
  FROM
    sakila.customer
  WHERE email = emailBuscado;  
END $$

DELIMITER ;


CALL exibirTop10Atores();
--
CALL buscarFilmesDeUmaCategoria('action');
--
CALL retornaSeClienteEstaAtivo('JIMMIE.EGGLESTON@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;