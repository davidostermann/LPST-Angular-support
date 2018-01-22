# Installation Angular-cli

```shell
npm i -g @angular/cli
```
*`-g` : Option permettant d'installer globalement un package. Angular-cli est donc installé globalement. Vous allez pouvoir appeler la commande `ng` de n'importe quel endroit de votre ordi*

## Generer le projet

```shell
ng new monpremierprojet
```

*Cette commande génére votre dossier projet avec tout ce qu'il faut à l'intérieur.*

## Démarrer le projet

```shell
cd monpremierprojet
ng serve
```

* `ng serve` : Cette commande démarre un server local et le watcheur qui va permettre de relancer (live-reload) la page du navigateur à chaque modification d'un fichier.*

## Ressources :

https://angular.io/guide/quickstart

### N'oublier pas d'améliorer votre IDE avec les extensions appropriées : [Extensions VSCode](./vscode.md)