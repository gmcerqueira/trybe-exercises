USE betrybe_automoveis;

DELIMITER $$

-- INSERT
CREATE TRIGGER trigger_carros_insert
BEFORE INSERT ON betrybe_automoveis.carros
FOR EACH ROW
BEGIN 
  SET NEW.data_atualizacao = NOW(),
  NEW.acao = 'INSERÇÃO',
  NEW.disponivel_em_estoque = 1;
END $$

-- UPDATE
CREATE TRIGGER trigger_carros_update
BEFORE UPDATE ON betrybe_automoveis.carros
FOR EACH ROW
BEGIN 
  SET NEW.data_atualizacao = NOW(),
  NEW.acao = 'ATUALIZAÇÃO';
END $$

-- DELETE
CREATE TRIGGER trigger_carros_delete
  AFTER DELETE ON betrybe_automoveis.carros
  FOR EACH ROW
BEGIN
  INSERT INTO log_operacoes(acao, data_acao)
  VALUES ('EXCLUSÃO', NOW());
END $$

DELIMITER ;
