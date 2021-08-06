USE sakila; 

DELIMITER $$

CREATE FUNCTION totalPagamentosClientePorID(id INT)
RETURNS DOUBLE READS SQL DATA
BEGIN
  DECLARE total DOUBLE;
  SELECT
    SUM(amount)
  FROM
    sakila.payment
  WHERE
    customer_id = id INTO total;
  RETURN total;
END $$

CREATE FUNCTION nomeFilmeInventario(id INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
  DECLARE titulo VARCHAR(50);
  SELECT 
    f.title
  FROM
    sakila.film AS f
  INNER JOIN
    sakila.inventory AS i ON f.film_id = i.film_id
  WHERE
    i.inventory_id = id INTO titulo;
  RETURN titulo;
END $$

CREATE FUNCTION totalFilmesPorCategoria(categoria VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
  DECLARE total INT;
  SELECT
    COUNT(*)
  FROM
    sakila.film_category AS fc 
    INNER JOIN sakila.category AS c ON fc.category_id = c.category_id
  WHERE
    c.name = categoria
  INTO
    total;
  RETURN total;
END $$

DELIMITER ;

SELECT totalPagamentosClientePorID(12);
--
SELECT nomeFilmeInventario(351);
--
SELECT totalFilmesPorCategoria('horror');



