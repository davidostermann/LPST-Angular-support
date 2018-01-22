# Angular architecture

Angular is an opinionated framework.
Means that it orientates the way you structure your code base.

About Angular architecture : https://angular.io/guide/architecture

### About Angular 4 to 5 : 

* https://blog.angular.io/version-5-0-0-of-angular-now-available-37e414935ced
* https://alligator.io/angular/angular-5/

### Cours videos

* https://codecraft.tv/courses/angular/quickstart/overview/
* https://coursetro.com/courses/12/Learn-Angular-4-from-Scratch
* https://www.youtube.com/user/programmingwithmosh/videos

### 1. templating

* https://angular.io/guide/template-syntax#property-binding-or-interpolation
* https://coursetro.com/posts/code/52/Trying-out-the-New-Angular-4-If-Else-Conditionals
* https://alligator.io/angular/style-binding-ngstyle-angular/ (style binding)
* https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/ (styles & classes)

### 2. Les cycles de vie

* http://www.learn-angular.fr/le-cycle-de-vie-dun-component/
* NGOnInit : https://toddmotto.com/angular-constructor-ngoninit-lifecycle-hook

### 2. Communication between components

* https://www.youtube.com/watch?v=289-D_CLRYM&lc=z124cxgaszithppje04cj1gqylesd5xpb40
* https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/

## module

* https://angular.io/guide/dependency-injection-pattern#the-dependency-injection-pattern

## Dependency injections

* https://toddmotto.com/angular-dependency-injection

## Decorators (@ContentChild, @ViewChild) & life cycle hook :

* https://netbasal.com/understanding-viewchildren-contentchildren-and-querylist-in-angular-896b0c689f6e

## StateFull / StateLess

* https://toddmotto.com/stateful-stateless-components

## Async pipe

* http://blog.novanet.no/angular-pitfall-multiple-http-requests-with-rxjs-and-observable-async/

## forms

### template driven form :

* https://codecraft.tv/courses/angular/forms/template-driven/

* Two-way data binding : https://blog.thoughtram.io/angular/2016/10/13/two-way-data-binding-in-angular-2.html

### rective forms (model driven form) : 

* https://medium.com/aviabird/complete-angular2-guide-reactive-forms-in-depth-part-1-21a8e2428904
* https://scotch.io/@ibrahimalsurkhi/match-password-validation-with-angular-2
* dynamic forms  : https://www.concretepage.com/angular-2/angular-2-formcontrol-example
* https://egghead.io/courses/create-dynamic-forms-in-angular
* https://angular.io/guide/form-validation#custom-validators (custom form validation)

## HTTP requests

* http://www.learn-angular.fr/httpclient-une-refonte-du-module-historique/

* https://egghead.io/courses/learn-http-in-angular

## Performances :

* https://blog.oasisdigital.com/2017/angular-runtime-performance-guide/

## Change detection :

* https://blog.angularindepth.com/he-who-thinks-change-detection-is-depth-first-and-he-who-thinks-its-breadth-first-are-both-usually-8b6bf24a63e6

## RxJS

Manage async data streams with observable sequences (reactive programming).

* [ressources](./rxjs.md)

## zone.js 

Helper to debugging, profiling, testing : https://www.youtube.com/watch?v=3IqtmUscE_U. Don't care about it at beginning. It's for advanced usage.

## Exemples

* https://github.com/gothinkster/angular-realworld-example-app

## Build your own atttribut directive

* https://angular.io/guide/attribute-directives