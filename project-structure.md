# Understand bootsprapped project by angular-cli

## Listing des fichiers et de leur utilité

* tsconfig.json : config de transpiler typescript
* tslint.json : linter
* .editorconfig : homogenisation des config IDE (fonctionne sur tous les ide)
* Karma, jasmine, protractor : tests U et E2E
* rxjs : manage async data streams with observable sequences (reactive programming).
  * UI events
  * HTTP requests
  * File system
  * Array-like objects
  * Memory-cache
* zone.js : Helper to debugging, profiling, testing : https://www.youtube.com/watch?v=3IqtmUscE_U. Don't care about it at beginning. It's for advanced usage.

## ./src/app :

`./src/app` : Where your code goes

## app.component.ts

`./src/app/app.module.ts` : Where you declare the modules, services, components, pipes, values, factories you want to inject for all your app.

NB : *If you want to declare a specific provider (service, factory or value) for a component and its children, you can do it in a component. More at https://angular.io/guide/hierarchical-dependency-injection#injector-bubbling*

## app.component.ts

`./src/app/app.component.ts` : The ancestor component for all your app.

## Ressources

About Angular architecture : https://angular.io/guide/architecture




