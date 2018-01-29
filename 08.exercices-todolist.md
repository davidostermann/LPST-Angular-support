# Services : Todolist

Cette application permet de gérer une liste de todo :

- Lister les todos
- Ajouter une todo
- Modifier une todo
- Supprimer une todo

## Creation des composants

### Un composant add.component.ts

* Un champ de saisie
* Un bouton 'valider' 

=> Quand je saisie un texte et que je clique sur 'valider', le texte saisi est ajouté à la liste.

### Un composant list.component.ts

Une liste de todo :

  * Chaque élément de la liste comporte :

    - le nom de la todo
    - un bouton 'supprimer'
    - un bouton 'editer'

* => Quand je clique sur 'supprimer', l'element est supprimé de la liste
* => Quand je clique sur 'editer', l'element se tranforme en champ de saisi (avec un bouton 'valider') afin d'être modifier.
* => Quand je clique sur 'valider, l'element se transforme en texte simple et le texte correspondant est mis à jour dans la liste

### Un service pour stocker la liste de façon unique dans l'application

Dans le service, on va donc stocker la liste.

### Exemple de resolution

https://github.com/davidostermann/LPST-Angular-todolist