# Pourquoi les web apps ?

### Avant (et tjrs maintenant), il y a les pages rendues côté server :

**Comme JSP**

Inconvénient principale : recharger la page entière quand on souhaite recupérer ou envoyer des données.

Parfait quand on veux simplement afficher du contenu avec un minimum d'interaction utilisateur.

Mais celà devient compliqué quand on veux que l'utilisateur interagisse plus avec la page.

Les cas d'utilisation sont légion : module de recherche, filtres, ordonnancement, formulaires, jeux temps réel, etc ...

## Histoire

### Avant

PHP, JSP, ASP .NET (et d'autres) permettent de rendre des pages HTML dynamiques côté server.

L'alternative principale pour mettre de l'intelligence côté navigateur est Flash player.

### 2004 : Démocratisation de Document Object Model

Document Object Model est né en 1998 mais c'est en 2004 que son utilisation se standardise avec l'arrivée de Firefox. Les navigateurs deviennent intelligents. Ce sont les prémisses du web 2.0.

### 2005 : C'est en 2005 qu'on parle pour la premiere fois d'ajax

On commence à donner des responsabilités au code destiné à être executer sur le navigateur. **Le javascript** commence a être pris au sérieux.

### 2006 : Jquery

Jquery est la librairie javascript la plus connu et le plus répandu sur le web.
Elle a eu pratiquement le monopole pendant 7 ans environ (2006 - 2013). Elle est encore très utilisée (Wordpress, Drupal, Materialize, ...)

### 2007 : Applications mobiles (le 1er iPhone)

Un besoin est né. Les cartes sont redistribuées.

### 2012 : AngularJS (1.0.0) [par google]

Grâce à son système de templating novateur et le concept de `two-ways data-binding`, c'est un formidable outils de prototyping. Mais ses avantages sont aussi des inconvénients et la performance sur les grosses applications est difficilement au rendez-vous (en cause la magie du dirty-checking).

### 2013 : ReactJS [par Facebook]

Un concurrent sérieux et performant (virtual DOM vs dirty-checking)

### 2016 : Angular (2, 4, 5, 5.1)

### Conclusion : Les applications éxécutées sur le navigateur deviennent de plus en plus complexes

Les applications web se rapprochent de plus en plus des applications mobile. Les développeurs front ont besoin de vrai frameworks et de librairie permettant de mettre en place des web apps robustes, complexes et performantes.

C'est dans ce contexte que sont nés les librairies et les frameworks que nous utilisons actuellement.

<hr/>

## A noter : 

* Les acteurs principaux du moments sont : **ReactJS, VueJS et Angular**.

* Le **shadom DOM et les web components** qui sont supportés nativement par les nouveaux navigateurs.

* **Polymer** : librairie qui permet d'utiliser les web components sur tous les navigateurs (par Google). La librairie n'a pas connu d'essor et son utilisation reste confidentiel.

* Des acteurs secondaires :

  * BackboneJS : librairie historique qui existait avant AngularJS. Il doit rester quelques gros projets développés avec cette librairie.
  * EmberJS : Comme Backbone, c'est une librairie ancienne. Mais à l'inverse de Backbone, elle est encore développée et utilisée parce que très robuste et structurée.
  * AureliaJS : assez récente. C'est un framework complet comme Angular.

* **les librairies qui transpile vers javascript** : Angular Dart, React clojureScript, React ELM, React ReasonML, ...Le code généré est en général très performant. Mais la gestion des erreurs à l'éxécution et le débuggage du code compilé peut être un frein à leur adoption. Néanmoins ces librairies ont une communauté très active et la phase de compilation permet d'éliminer une grande partie des potentielles erreurs à l'éxécution.

## A garder a l'oeil : 

**Web assembly (wasm)** qui "doit" remplacer javascript.











