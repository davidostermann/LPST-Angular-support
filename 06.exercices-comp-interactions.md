# Components interaction

## Parent vers enfants

Faire passer une donnée du parent vers l'enfant

Documentation : https://angular.io/guide/component-interaction#pass-data-from-parent-to-child-with-input-binding

1. Reprendre la liste de users de l'exercice précédent
2. Créer un composant 'user-item'
3. Remplacer le tag 'li' par 'app-user-item' (le selector du composant 'user-item')
4. Faire passer chaque user aux composants 'user-item'

  * Pour ce faire, vous devez créer un attribut 'userInfo' sur le selector 'app-user-item' et lui passer la donnée user. (ex. ```<app-user-item [userInfo]="u" *ngFor="let u of users"></app-user-item>```)
  * Afin de récupérer la donnée de l'attribur dans le composant enfant, vous devez créer une propriété qui correspond au nom de l'attribut avec le decorator '@Input()'. (ex. ```@Input() userInfo```)

### Exemple de resolution @Input

https://github.com/davidostermann/LPST-Angular-templates/tree/master/src/app

## Enfants vers parent

A partir de l'exercice précédent, nous desirons déclencher la fonction 'selectUser' du parent 'users' à partir d'un click sur une partie de 'user-item'.

Documentation :  https://angular.io/guide/component-interaction#parent-listens-for-child-event

Pour ce faire :

1. Reprenez l'exercice précédent
2. Modifier le composant 'user-item' afin de poser un (click) sur une partie de l'element.
3. Exposer un eventEmitter avec @output
4. Associer une fonction du parent à l'eventEmitter exposé.

### Exemple de resolution @Output

https://github.com/davidostermann/LPST-Angular-templates/tree/master/src/app

## Communication entre 2 composants frère

A partir de l'exercice précédent, nous desirons isoler le detail de user dans un composant 'user-detail' afin de pouvoir placer ce composant où bon nous semble (par exemple à l'extérieur du composant 'users').

Afin que notre application continue à fonctionner, il faut partager une variable 'selectedUser' entre 'users' et 'user-detail'. 

Pour ce faire, vous devez :

1. Créer un service 'users'
2. Ajouter une propriété 'selectedUser' au service
3. Injecter le service dans les composant 'users' et 'user-detail'
4. remplacer this.selectedUser par userService.selectedUser dans les 2 composants

### Exemple de resolution avec un service

https://github.com/davidostermann/LPST-Angular-templates/tree/master/src/app

