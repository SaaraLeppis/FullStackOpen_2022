## GIT commands to remember

**don't panic if something goes wrong**

```shell
git log --oneline --all --graph --pretty
```

```shell
git log --oneline --all --graph
```

```git
git soft RESET~1
```

## JEST tests for React

in **components** -folder as **Blog.test.js** -file

```shell
npm test
```

or

```shell
CI=true npm test
```

## Cypress tests (E2E / End to end -tests)

```shell
npm install --save-dev cypress
```

### frontend

"scripts":{
.
.
.
"cypress:open": "cypress open"
},

### backend

"scripts":{
.
.
.
"start:test": "cross-env NODE_ENV=test node index.js"
},

**REMEMBER**
to start backend with

```shell
npm run start:test
```

When front- and backend are running cypress can be started by

```shell
npm run cypress:open
```

### to run tests from terminal

"scripts":{
.
.
.
"test:e2e": "cypress run"
}

```shell
npm run test:e2e
```
