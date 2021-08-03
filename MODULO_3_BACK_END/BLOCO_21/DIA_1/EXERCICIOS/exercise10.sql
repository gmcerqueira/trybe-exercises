SELECT
  AVG(SALARY),
  COUNT(*) AS total_employees
FROM
  hr.employees
GROUP BY
  DEPARTMENT_ID
HAVING
  total_employees > 10;