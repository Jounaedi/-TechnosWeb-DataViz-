# Evolution des technologies web

Darkmode only

Bienvenue sur le README du projet de datavizualisaton du Groupe 11.

# L'équipe :
L'équipe, composée de 6 membres, est divisée en sous équipes, plus la tâche est technique, moins de gens y sont assignés.  

Il y a au total 6 équipes dont certaines ne sont composées que d'un membre :

* L'équipe design (UI / UX / conception / graphisme) : **Dorian & Jeremy**
* L'équipe front-end (intégration, développement de features et amélioration du code) : **Gabriel & Cyril**
* L'équipe back-end (création de la BDD et de l'API) : **Amin**
* L'équipe data (création de la data, recherche, calculs) : **Dorian, Jeremy et Amin**
* L'équipe missions ponctuelles (recherches et calculs) : **Argan**
* L'équipe gestion de projet (organisation, review, conception globale, product owning) : **Dorian**


Les équipes se remodelaient en fonction de l'avancement du projet. Certains intégraient d'autres équipes le temps d'un dépannage, mais toujours sur leur temps libre.

<br><br><br>

## Les membres (par ordre alphabetique) :

## Jeremy Abdoelsomad :
![alt text](https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/Images/Projet%20datavis/Jeremy%20kiviat.png)
### Tâches : 
* Design
* interviews
* calcul de data
* assistance en back-end
<br><br>


## Amin Bentani :
![alt text](https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/Images/Projet%20datavis/Amin_kiviat.png)
### Tâches : 
* BDD
* API
* assistance V2
* gestion continue du back-end
* calcul de data
<br><br>


## Dorian Canonne :
![alt text](https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/Images/Projet%20datavis/Dorian_kiviat.png)
### Tâches : 
* conception & gestion de projet
* direction artistique
* design
* conception et calcul de la data
<br><br>


## Argan Delaire :
![alt text](https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/Images/Projet%20datavis/Argan_kiviat.png)
### Tâches : 
* Calcul de données
* recherche de sources
<br><br>


## Cyril Gable :
![alt text](https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/Images/Projet%20datavis/Cyril_kiviat.png)
### Tâches : 
* Assistance V1
* développement de la V2
* calculs pour l'intégration
<br><br>


## Gabriel Goldbronn :
![alt text](https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/Images/Projet%20datavis/Gabriel_kiviat.png)
### Tâches : 
* Développement de la V1, de la V3 et de la V4
* Assistance en design
* Assistance en conception
<br><br>

# Conception :
Concernant la conception, nous avons choisis de traiter du sujet suivant :
"Quels sont les grands boulversements qui ont forgé l'écosystème web d'aujourd'hui ?"

Pour cela, nous avons décidé de suivre les axes suivants :
* Traiter de l'évolution des technos web
* Observer et analyser les changements de tendance
* Expliquer ces changements
* Afficher toutes ces informations de façon interactive et intuitive

A partir de là nous avons pu suivre une ligne rouge jusqu'à la fin du projet.

<br><br><br>

## Features

### V1 : Les grands bouleversements de l'histoire du web :

L'histoire du web et de ses technologies a déjà une quarantaine d'années. L'écosystème que l'on connait aujourd'hui est le résultats de besoins à la fois du côté des développeurs et des utilisateurs ainsi que de grands évènements ayant forcé le domaine tout entier à regarder dans une nouvelle direction.

La question est alors : Quels sont ces bouleversements ? Et quel changements ont-ils entraînés a l'échelle de l'écosystème ?

Pour répondre à cela, nous amettons en place un nuage de points interactif, donnant des informations sur chaque techno populaire. Il est possible de naviguer entre les "époques" et constater en direct de l'évolution des technos avant et après chaque bouleversement. 

Concernant le nquadrant en particulier, il est fait à la manière de celui des Malt tech trend annuels, avec un rapport croissance (abscisses) / points de popularité (ordonnées). Nous aurons alors 4 catégories de technos :

- Les grandissantes (en bas à droite : croissance forte et popularité faible)
- Les menacées (en bas à gauche : croissance faible et popularité faible)
- Les établies (en haut à gauche : croissance faible et popularité forte)
- Les tendances (en haut à droite : croissance forte et popularité forte)

L'interactivité est en plusieurs dimensions car il est possible de naviguer entre les ères du web mais aussi d'avoir des informations un peu plus précises pour chaque technos, comme leur rôle, leur côte de popularité ainsi que leur côte de croissance. Elle sera représentée par une bulle survolant le point au click (pour le responsive).
<br><br>

### V2 : Quelles sont les technologies les plus impactées et comment le sont-elles ? :

Seulement afficher le nuage de points serait exposer bêtement des données sans entrer dans le coeur du sujet (ce qui fait de la V2 une part essentielle de la V1).

Cette V2 consiste alors en une contextualisation de la période à travers des données liées ou non aux technologies elles mêmes, prenons un exemple.

Cette partie est mise en scène par un scroll vers le bas, dont le contenu change pour chaque point temporel et qui nous affiche au fil de la navigation les datas les plus importantes pour nous permettre de saisir l'enjeu de l'évènement ciblé plus haut avec le quadrant.

En bas se trouvera un bouton pour revenir directement au nuage de points.
<br><br>

### V3 : Précisions au click :

La V3 est une feature ajoutant des précisions sur la techno au click. Elle affiche le nom, le nombre de points de popularité,
la croissance et le type de techno.
<br><br>

### V4 : Système d'affinage :

La V4 correspond à la possibilité de choisir quel type de techno afficher.
Les critères sont :
* Front-end
* Back-end
* Langage
* Framework
* Serveur
* BDD
* Outils

<br><br><br>

# Direction artistique :

## Inspiration générale

Le design graphique prend son inspiration dans les vieux rapports de la première moitié du XXème siècle.

La volonté est de pouvoir mélanger simplicité graphique et sémantique, en ne délivrant qu'un minimum d'éléments graphiques, en limitant un maximum les couleurs et en se séparant du superflu.
<br><br>

## Aspect graphique

L'aspect graphique du projet ce centre autour de la simplicité, peu de contours, de soulignages, on ce concentre sur l'info et seulement l'info, on épure le style de tout élément superflu. 

Le but est encore une fois d'avoir l'impression de consulter un vieux rapport de recherche de la première moitié du XXème siècle, mais avec le coté épuré et précis du web.
<br><br>

## Typographie et police

Dans la ligne droite des couleurs et de l'inspiration, nous allons utiliser une typo serif copiant les typographies de machines à écrire.

Le choix de la police principale est la RM Typerighter, fine et aérée, elle peut rappeler des vieux documents déclassifiés. Elle est aussi très facile à lire.

Concernant l'épaisseur de la police, il y en aura deux : la regular et la medium
<br><br>

## Choix des couleurs

Le site ne sera composé que de 2 couleurs en majorité : 

- Un gris / crème pâle : #E2E0D9. Symbolisant la feuille de papier à machine à écrire. Une couleur proche du blanc mais moins agressive pour les yeux. représente 90 à 95% de la palette.
- Le gris noir : #1E1E1E : Directement inspiré de l'ancre des machines à écrire, ce gris noir donne l'impression d'ancre séchée, faisant le contraste total avec la couleur majoritaire symbolisant la feuille. Ce sera la couleur principale de la police et des graphiques.

Ces deux couleurs principales veulent rappeler le noir et blanc par leur contraste toute en leur donnant un sens réel faisant appel à nos souvenirs rattachés à l'inspiration principale. L'une est pale et l'autre pas totalement noire, pour donner un aspect un peu vieilli ou ancien.

Les autres couleurs ne seront que de simples détails :

- Du vert #7EA477
- Du rouge #9B6262
- Du bleu #55618B
- Du jaune #D1902E

Ces couleurs symboliseront respectivement des augmentations, des diminutions et des stagnations.

Leur couleur penche vers le gris pour garder cet aspect délavé et ancien. Renforçant l'aspect papier en conservant des couleurs proches de celles du 4 couleurs.
<br><br>

## Effet recherché

L'effet recherché est le contraste entre direction artistique rétro d'habitude statique et l'interactivité et les animations du web.

De la même manière que les vieilles photos animés dans le monde d'Harry Potter, le but ici est d'amplifier le wow effect et l'agréabilité des animations par une simplicité attendue aux premiers abords. Ca doit paraître magique et déboussoler l'utilisateur qui s'attend a des simples informations posées sur papier.
<br><br>

## MoodBoard

![alt text](https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/Images/Projet%20datavis/moodboard.png)
<br><br><br>

# Data :
La data est rassemblée manuellement.
Compte tenu de la nature de notre quadrant, la meilleure solution était non pas de trouver de la data en masse mais bien de la créer nous mêmes.
Pour cela il nous fallait un outil respectant 2 principes hérités de la recherche:
* la validité : Exactitude des valeurs
* la fidélité : fidèle au réel (relativement)

Ne pouvant pas organiser un gigantesque questionnaire pour les donner à des développeurs de 2004 nous avons décidé de prioriser la fidélite,
en nous basant sur des valeurs relatives, toutes indéxées de la même manière. Nous avons augmenté la validité en penant comme valeur de référence une
estimation, 10 millions d'utilisateurs Python en 2020. Les autres valeurs ont été calculées via des pourcentages de popularité sur google trends.

Nous avons choisis Google Trends pour la significativité inégalable de ses résultats. Le graphique se basant sur des milions de recherches, les données d'origine rentrent sans aucun soucis au dessus du 95ème percentile de marge d'erreur.

Pour calculer les points de popularité nous avons pris la valeur de python en 2020, 10 000 000.
Nous avons ensuite comparé python avec chacune des 40 autres technos pour attribuer une valeur sur leur point le plus haut .

```Ex : 100% de Ruby = 25% de python, donc on a 2 500 000 pts au point le plus haut de Ruby.```

Chaque techno a alors été divisée en 4 periodes : 2004, 2012, 2017 et 2020. Et en calculant la moyenne de pourcentage relatif au maximum de la techno concernée, on se retrouve avec une valeur relative en points.

```Ex : 100% de C# = 8 300 000, en 2017, C# était à 38.5% de sa popularité maximale, donc 8 300 000 x 0.385 = 3 200 000 pts.```

Notre quadrant voulant montrer une comparaison sur le temps, des valeurs absolues n'étaient pas nécessaires. Nous avons donc maximisé la réalité relative entre toutes les technos. 

Toute la Data a alors été rassemblée dans un grand tableau répertoriant toutes les technos, les années et les pourcentages de croissance entre chaque année et le Développeur back n'avait qu'à tout intégrer à la base de donnée.

<br><br><br>

# Production :
Concernant la production, les technos utilisées en front ont été :
- Vue.js
- JavaScript
- HTML
- CSS

Au vue de l'ambition technique du projet, nous avons choisis de n'utiliser que Vue.js pour limiter la découverte et travailler avec des technos habituelles.

Côté back, les technos suivantes ont été utilisées :
- MySQL (PHPmyadmin)
- PHP
- Postman
<br><br><br>

## Fonctionnement de la V1
La V1 est un quadrant composé de deux axes:
- Un axe des abscisses symbolisant la croissance positive ou négative d'une techno
- Un axe des ordonnées symbolisant une échelle croissante de points de popularité, allant de 0 au 3ème maximum de chaque année (les 3 plus grosses valeurs ont été fixées manuellement pour éviter des trop gros ecarts entre les valeurs donc un risque d'applatir toutes les valeurs au même endroit)

Chaque techno récupère ses valeurs depuis l'API et les transforment pour se placer dans la Div du quadrant. Voici la doc résumant les calculs :
<br><br><br><br>
![alt text](https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/Images/Projet%20datavis/ordonnées.png)
<br><br><br><br><br><br>
![alt text](https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/Images/Projet%20datavis/abscisses.png)
<br><br><br>


## Fonctionnement de la V2
La V2 consiste en un string HTML brut stocké dans la BDD et récupérée via l'API variant selon l'année que l'on a séléctionné.
<br><br><br>

## Fonctionnement de la V3
La V3 consiste en une div apparaissant au dessus du point selectionné, le code récupère les infos de la BDD via une requête API et les fetch dans la div.
<br><br><br>

## Fonctionnement de la V4
La V4 est un système d'affinage permettant d'afficher ce que l'on souhaite. Chaque bouton est un toggle qui active ou désactive les points visés.
<br><br><br>

# Gestion de projet :

## Planning
<br><br>

![alt text](https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/Images/Projet%20datavis/planning.png)

<br><br><br>

## Grands axes gestion de projet

### Centralisation de la responsabilité : 
Ayant une équipe composée de membre aux compétences différente, diluer la responsabilité aurait été un trop grand risque.
Le plus simple à été de centraliser la direction autour d'un product owner, responsable de toute la partie conception et consultant sur la partie production. Concernant La production, la responsabilité est donnée aux développeurs.
<br>

### Cohésion avant toute chose :
La première semaine à été dédiée à trois choses :
* Chacun finit son projet front avant d'attaquer la préprod
* Creuser un maximum nos idées de sujet
* Team building en discutant ou en jouant. Ca nous a permi d'avoir une très bonne cohesion avant même le début du projet.
<br>

### Validation régulière de l'ensemble de l'équipe :
En complémentarité avec le premier point, même si une seule et même personne à la responsabilité de la conception, tout choix doit être débattu et accepté avant d'être conçu. La priorité était donnée au plaisir de travailler sur udu materiel motivant et intéressant.
<br>

### Confiance :
Connaître les membres de son équipe c'est savoir les jauger objectivement, sans jugement.
Mais avoir confiance en les capacités d'un membre peut accroitre sa motivation et sa productivité.
<br>

### Adaptation et prévision :
Allant de paire avec le point précédent, il est nécessaire de s'adapter aux capacités de chacun, et effectuer un suivi régulier pour éviter tout écart avec le plan de base. Le but absolu étant que chacun finisse sa tâche dans le temps donné avec un peu de temps libre pour aider ceux en difficulté.
La prévision est surement la meilleure arme dans ce projet. l'équipe a été selectionnée sur mesure sur un rapport motivation / capacités / sympathie. Chaque membre à déjà travaillé avec au moins un des autres. Pouvoir prendre de l'avance sur l'organisation c'est gagner du temps en projet. Le plus important est de avoir quels membres fourniront une masse de travail moindre, s'en accomoder et s'adapter.
Au final on a réussi à boucler le projet en un mois sans retard particulier tout en travaillant des heures constantes du début à la fin (garanti sans nuit blanches !)
<br>

### Respect absolu du processus de prod :
Simple et explicite, le designer design, le développeur développe. Sortir de ces rôles c'est potentiellement perdre du temps.
<br>

### Le moins font le mieux :
2 personnes maximum par tâche, sinon c'est vite le chaos.
<br>

### Gestion du temps en priorité :
L'unique ligne rouge est composée de l'organisation du projet, des délais et de l'ordre des tâches. 
Si une feature arrive tard, on s'adapte et on downgrade pour rentrer dans les clous.

# MERCI ET BONNE VISITE !

![alt text](https://raw.githubusercontent.com/Eyvve/doriancanonne.dev/main/Images/Projet%20datavis/Equipe11.png)
