DROP DATABASE IF EXISTS todo;
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

INSERT INTO carte (etat, titre, description) VALUES
(1, 'Acheter du pain', 'Aller à la boulangerie avant 18h'),
(1, 'Finir le projet NextJS', 'Compléter la partie Prisma et finaliser le CRUD'),
(0, 'Appeler le dentiste', 'Prendre rendez-vous pour le mois prochain'),
(1, 'Faire une pause café', 'Important pour rester productif'),
(0, 'Relire le README', 'Corriger les fautes et améliorer la structure'),
(1, 'Préparer une démo', 'Faire une vidéo ou une présentation à montrer'),
(1, 'Tester les boutons', 'Vérifier que les tâches peuvent être cochées ou supprimées');