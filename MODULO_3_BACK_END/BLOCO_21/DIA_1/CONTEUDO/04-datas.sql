SELECT
  CURRENT_DATE();
-- Data atual
  -- YYYY-MM-DD
SELECT
  NOW();
-- Data e hora atual
  -- YYYY-MM-DD HH:MM:SS
SELECT
  DATEDIFF('2020-01-31', '2020-01-01');
-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT
  DATEDIFF('2020-01-01', '2020-01-31');
-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT
  TIMEDIFF('08:30:10', '09:30:10');
-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT
  YEAR(CURRENT_DATE());
SELECT
  HOUR(NOW());
-- 1
SELECT
  DATEDIFF('2030-01-20', CURRENT_DATE());
-- 2
SELECT
  TIMEDIFF('10:25:45', '11:00:00')