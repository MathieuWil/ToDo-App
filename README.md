<!-- A Propos -->
## A Propos du Projet

Numéro de projet : 01
But du projet : Construire une simple ToDo App tout en découvrant de nouveaux frameworks :
__NextJS, Prisma, tailwind css__

Ce ReadMe ainsi que le projet est ammené à évoluer dans le temps.

***
<!-- Pourquoi ce projet -->
## Pourquoi ce projet ?

Ce projet entre dans le cadre de ma montée en compétences, je souhaite améliorer mes bases et mon appétences à différents environnements de développement afin de consolider mes bases et me préparer au mieux à la suite de mes études.
Cela me permet de prendre un nouveau départ, travailler sur des projets de niveau 0 avec les connaissances que j'ai aujourd'hui.
C'est le premier d'une longue série que j'espère faire évoluer dans le temps.


***
<!-- Liste des Tech -->
### Liste des Tech'

Cette section rassemble toutes les technos touchées dans le cadre de ce projet :

* [![Next][Next.js]][Next-url]

***
<!-- Conception -->
## Conception

Dans le cadre de ce projet qui se doit de rester très simple, on va créer un BDD 'todo' avec une seule table 'carte' on est encore au stade de découverte et d'apprentissage, je me documente et je pratique !

***
<!-- Prérequis -->
### Prérequis

Voici les prérequis au bon fonctionnement de notre application :
- npm
- nodejs

***
<!-- Installation -->
### Installation

Cette partie retrace les commandes utilisées pour initialiser notre projet :

1. Exécuter le fichier db.sql afin de mettre en place notre BDD

2. Depuis l'endroit ou l'on souhaite créer notre projet sur notre terminal vscode : 'npx create-next-app@latest'

3.  Effectuer les choix suivants :
   ```sh
    √ What is your project named? ... todo
    √ Would you like to use TypeScript? ...Yes
    √ Would you like to use ESLint? ...Yes
    √ Would you like to use Tailwind CSS? ...Yes
    √ Would you like your code inside a `src/` directory? ...No
    √ Would you like to use App Router? (recommended) ...Yes
    √ Would you like to use Turbopack for `next dev`? ... Yes
    √ Would you like to customize the import alias (`@/*` by default)? ...No
    Creating a new Next.js app in C:\Users\mathi\Desktop\src\projets\02 - To Do App\todo...
   ```

4. Une fois notre application buildé on peut lancer notre wampp et se rendre sur 'http://localhost:3000' pour
 vérifier que tout fonctionne

5. Pour l'installation de Prisma, taper la commande ''

6. Se rendre dans le .env nouvellement créé et entrer les informations de connexion à la BDD

***
<!-- Scripts utiles -->
### Scripts utiles

Cette partie regroupe des scripts ou commandes utiles au projet :

***
<!-- Structure du projet -->
## Structure du projet

Cette partie va nous permettre d'expliquer la structure de notre projet nextjs :
- `/app/` → Composants du App Router
- `/components/` → Composants réutilisables (ex: Form, Card)
- `/lib/` → Fonctions d'accès aux données (Prisma)
- `/styles/` → Fichiers CSS globaux
- `.env` → Variables d'environnement (connexion BDD)

***
<!-- Exemple -->
## Exemple

Cette partie sert à présenter un exemple d'utilisation de notre app :

***
<!-- Roadmap -->
## Roadmap - Fonctionnalités prévues

- [ ] Ajouter une carte
- [ ] Modifier une carte
- [ ] Supprimer une carte
- [ ] Marquer une carte comme terminée
- [ ] Filtrer par statut
- [ ] Stockage en BDD via Prisma

***
<!-- Bilan du projet -->
## Bilan du projet

Cette partie sera remplie à la fin du projet afin d'y indiquer de manière globale mon ressentie ou mes acquis durant la vie de ce projet.

***
<!-- Licence -->
## Licence

L'utilisation, la reproduction, la modification ou la distribution de ce code sont strictement interdites sans autorisation écrite de l'auteur.

***
<!-- Contact -->
## Contact

- [Mon Linkedin](https://www.linkedin.com/in/mathieu-wilkosz/)
- [Mon GitHub](https://github.com/MathieuWil)

***
<!-- Remerciements -->
## Remerciements

Un grand Merci à moi même, qui essaye de me prouver que le syndrome de l'imposteur n'est qu'un syndrome