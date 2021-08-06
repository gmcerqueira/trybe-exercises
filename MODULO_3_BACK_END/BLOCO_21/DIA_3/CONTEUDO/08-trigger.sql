USE rede_social;

DELIMITER $$

-- INSERT
CREATE TRIGGER trigger_perfil_insert
  BEFORE INSERT ON perfil
  FOR EACH ROW
BEGIN
  SET NEW.ultima_atualizacao = NOW(),
    NEW.acao = 'INSERT';
END $$

-- UPDATE
CREATE TRIGGER trigger_perfil_update
  BEFORE UPDATE ON perfil
  FOR EACH ROW
BEGIN
  SET NEW.ultima_atualizacao = NOW(),
    NEW.acao = 'UPDATE';
END $$

-- DELETE
CREATE TRIGGER trigger_perfil_delete
  AFTER DELETE ON perfil
  FOR EACH ROW
BEGIN
  INSERT INTO log_perfil(acao, data_acao)
  VALUES ('DELETE', NOW());
END $$

DELIMITER ;

SELECT * FROM rede_social.perfil;
INSERT INTO rede_social.perfil(saldo) VALUES (2500);
SELECT * FROM rede_social.perfil;
UPDATE rede_social.perfil
SET saldo = 3000
WHERE perfil_id = 1;
SELECT * FROM rede_social.perfil;
DELETE FROM rede_social.perfil WHERE perfil_id = 2;
SELECT * FROM rede_social.log_perfil;
