SELECT
  t.name,
  t.location
FROM
  Pixar.Theater AS t
WHERE
  NOT EXISTS(
    SELECT
      *
    FROM
      Pixar.Movies AS m
    WHERE
      m.theater_id = t.id
  );