-- SUBQUERY
SELECT
  rating
FROM
  Pixar.BoxOffice
WHERE
  movie_id IN (
    SELECT
      id
    FROM
      Pixar.Movies
    WHERE
      year > 2009
  );
-- INNER JOIN
SELECT
  b.rating
FROM
  Pixar.Movies AS m
  INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id
WHERE
  m.year > 2009;