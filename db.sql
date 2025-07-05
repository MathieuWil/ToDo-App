CREATE DATABASE todo;
USE todo;

CREATE TABLE carte (
  id INT PRIMARY KEY AUTO_INCREMENT, -- identifiant unique de la carte
  etat TINYINT NOT NULL DEFAULT 1, -- 1 = active, 0 = archivée
  titre VARCHAR(255) NOT NULL, -- titre de la carte
  description TEXT, -- description de la carte
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- date de création de la carte
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- date de dernière mise à jour de la carte
);