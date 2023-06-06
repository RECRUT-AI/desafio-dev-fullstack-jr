CREATE SCHEMA IF NOT EXISTS `recruit_petshop` DEFAULT CHARACTER SET utf8 ;
USE `recruit_petshop` ;

CREATE TABLE IF NOT EXISTS `recruit_petshop`.`dono` (
  `iddono` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `telefone` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`iddono`),
  UNIQUE INDEX `iddonos_UNIQUE` (`iddono` ASC) )
ENGINE = InnoDB;

INSERT INTO
  recruit_petshop.dono (nome, telefone)
VALUES
  ("Gabriel Barbosa",  "8134445434"),
  ("Allan Medeiros", "81987654323"),
  ("Raul josé", "81976544323");

CREATE TABLE IF NOT EXISTS `recruit_petshop`.`pet` (
  `idpet` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `idade` INT NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `raca` VARCHAR(45) NOT NULL,
  `id_dono` INT NOT NULL,
  PRIMARY KEY (`idpet`),
  UNIQUE INDEX `idpet_UNIQUE` (`idpet` ASC),
  INDEX `fk_pet_dono_idx` (`id_dono` ASC),
  CONSTRAINT `fk_pet_dono`
    FOREIGN KEY (`id_dono`)
    REFERENCES `recruit_petshop`.`dono` (`iddono`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

INSERT INTO
  recruit_petshop.pet (nome, idade, tipo, raca, id_dono)
VALUES
  ("Bethovem", 12, 'cachorro', 'Golden retriever', 1),
  ("Mel", 2, 'cachorro', 'viralata', 1),
  ("Alemão", 4, 'gato', 'siamês', 2),
  ("Billy", 12, 'gato', 'Ragdoll', 3);
