-- Resultado inteiro de uma divisão
SELECT
  10 DIV 3;
-- Resto(modulo) de uma divisão
SELECT
  10 MOD 3;
-- Desafios com DIV e MOD
SELECT
  IF(15 MOD 2, 'ímpar', 'par') AS 'Par ou Ímpar';
SELECT
  220 DIV 12;
SELECT
  220 MOD 12;
-- Arredondamento
SELECT
  ROUND(10.4925);
SELECT
  CEIL(10.51);
SELECT
  FLOOR(10.51);
-- Exponenciação e Raiz Quadrada
SELECT
  POW(2, 4);
SELECT
  SQRT(9);
-- Para gerar um valor aleatório entre 0 e 1:
SELECT
  RAND();
-- Para gerar um valor entre 7 e 13:
  -- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))
SELECT
  ROUND(7 + (RAND() * 6));
-- 1
SELECT
  ROUND(RAND() * 5 + 15);
-- 2
SELECT
  ROUND(15.7515971, 5);
-- 3
SELECT
  FLOOR(39.494);
-- 4
SELECT
  CEIL(85.234);