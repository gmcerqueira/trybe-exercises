SELECT
  ROUND(MAX(SALARY), 2),
  ROUND(MIN(SALARY), 2),
  ROUND(SUM(SALARY), 2),
  ROUND(AVG(SALARY), 2)
FROM
  hr.employees;