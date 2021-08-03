-- 1
SELECT
  id,
  title
FROM
  hotel.Books as b
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      hotel.Books_Lent
    WHERE
      b.id = book_id
  );
-- 2
SELECT
  id,
  title
FROM
  hotel.Books as b
WHERE
  EXISTS (
    SELECT
      *
    FROM
      hotel.Books_Lent
    WHERE
      b.id = book_id
      AND returned = 0
      AND b.title Like '%lost%'
  );
-- 3
SELECT
  `name`
FROM
  hotel.Customers AS cs
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      hotel.CarSales
    WHERE
      cs.CustomerId = CustomerId
  );
-- 4
SELECT
  cs.name,
  car.name
FROM
  hotel.Cars AS car
  INNER JOIN hotel.Customers AS cs
WHERE
  EXISTS (
    SELECT
      *
    FROM
      hotel.CarSales
    WHERE
      cs.CustomerId = CustomerId
      AND car.id = CarID
  );