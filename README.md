[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
<a href="http://www.gnu.org/licenses/">
    <img src="https://img.shields.io/badge/License-GNU-blue.svg?longCache=true"
        alt="License">
  </a>

# TinyDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.
## Responsive, no bootstrap, no material, just 1kb of CSS

### Desktop
![Alt text](demo2.PNG?raw=true "Demo 1")

### Mobile
![Alt text](demo1.PNG?raw=true "Demo 2")

## Commands 

### Prerequisistes

1. nodejs
2. npm

### Installing 

```sh
npm i -g @angular/cli
git clone ...
cd tinyDashboard 
npm i
ng serve --port 4201
```

### Commit linter

there is a hook called commitlint to prevent incorrect messages in order to follow semver for angular.

Options available

```json
[
  'build',
  'ci',
  'chore',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
]
```

*Valid examples

```sh
git commit -am "chore: add a hook"
git commit -am "test: add unit tests for grid panel"
git commit -am "feat(core): change the way contract is displayed"
git commit -am "fix: TOP-111 solve loop problem "
git commit -am "feat: TOP-600 alternate bg colors"
```

### Build process 

When we build an app, it will create a dist/ folder and inside of this our loadguard project

```sh
#test build
ng build
#prod build
ng build --prod
```


### Npm hooks 

We use hooks to prevent some behaviors, they are as follows: 

- commit linter, it enforces correct messages in your commits ([Commit lint](https://github.com/marionebl/commitlint))
- prepush, it run lint and tests before we push
- prerelease, it is activated when we use npm run release, it will build an production artifact ([StandarVer](https://github.com/conventional-changelog/standard-version))
- precommit, it is going to change your code if you are not following our clean-code rules. ([Prettier tool](https://github.com/prettier/prettier)) 


### TODO List

- [ ] sidebar menu 
- [ ] put how to change the theme into the readme file

### Author(s), maintainers and contributors

- **Mauricio Joost** - _Initial work_ - [Email](mauriciojoostwolff@gmail.com)
