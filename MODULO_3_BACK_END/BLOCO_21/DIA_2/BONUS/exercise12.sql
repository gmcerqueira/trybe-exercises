-- SUBQUERY
SELECT
  title
FROM
  Pixar.Movies
WHERE
  id IN (
    SELECT
      movie_id
    FROM
      Pixar.BoxOffice
    WHERE
      international_sales >= 500000000
  )
  AND length_minutes > 110;
-- INNER JOIN
SELECT
  m.title
FROM
  Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id
WHERE
  international_sales >= 500000000
  AND m.length_minutes > 110;