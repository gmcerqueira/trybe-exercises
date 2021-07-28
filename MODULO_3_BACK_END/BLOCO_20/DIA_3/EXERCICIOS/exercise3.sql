SELECT
  peca,
  preco,
  fornecedor
FROM
  PecasFornecedores.Fornecimentos
WHERE
  Fornecedor LIKE '%N%'