<!-- A Propos -->
## A Propos du Projet

**Projet n°01 — ToDo App**

L’objectif de ce projet est de construire une application de type *ToDo List* simple et fonctionnelle, dans une démarche d'apprentissage et d'exploration de nouvelles technologies.

Ce projet me permet de découvrir et de pratiquer les outils suivants :
- **Next.js**
- **Tailwind CSS**
- **Prisma ORM**

Ce dépôt est évolutif : le code, l'organisation et même ce README seront amenés à évoluer au fil de l'avancement de ce projet.


***
<!-- Pourquoi ce projet -->
## Pourquoi ce projet ?

Ce projet s'inscrit dans une démarche de montée en compétences. Il me permet de consolider mes bases en développement web tout en explorant de nouveaux outils et frameworks modernes.

Plutôt que de reprendre des projets trop ambitieux ou mal structurés réalisés dans le passé, j’ai choisi de repartir de zéro, avec mes connaissances actuelles, et de bâtir des projets simples mais solides, étape par étape.

Cette ToDo App marque le début d’une série de projets d’apprentissage. L’idée est de progresser à mon rythme, de prendre confiance, et de démontrer que le syndrome de l’imposteur ne doit pas freiner l’envie de créer.


***
<!-- Liste des Tech -->
## Technologies utilisées

Cette partie liste les différentes techno utilisées dans le cadre de ce projet :

- [**Next.js**](https://nextjs.org/) — Framework React full-stack (avec App Router)
- [**Tailwind CSS**](https://tailwindcss.com/) — Framework CSS utilitaire pour une mise en page rapide et responsive
- [**Prisma**](https://www.prisma.io/) — ORM moderne pour Node.js, connecté ici à une base de données MySQL
- [**TypeScript**](https://www.typescriptlang.org/) — Superset typé de JavaScript
- [**ESLint**](https://eslint.org/) — Linting du code pour maintenir une bonne qualité
- [**WampServer**](https://www.wampserver.com/) — Environnement local pour la base de données MySQL (dans ce cas précis)

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