SELECT
  JOB_ID,
  ROUND(AVG(SALARY), 2) AS average_salary
FROM
  hr.employees
GROUP BY
  JOB_ID
HAVING
  JOB_ID <> 'IT_PROG'
ORDER BY
  average_salary DESC;