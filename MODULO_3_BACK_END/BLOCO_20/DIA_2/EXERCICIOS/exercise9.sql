SELECT
  CONCAT(
    'O projeto ',
    Name,
    ' precisou de ',
    Hours,
    ' horas para ser concluído.'
  ) AS 'Tempo/Projeto'
FROM
  Scientists.Projects;