SELECT
  JOB_ID,
  AVG(SALARY) AS average_salary
FROM
  hr.employees
GROUP BY
  JOB_ID
ORDER BY
  average_salary DESC;