# osa 4

## Blogilista

**installed:**

- express
- cors
- mongoose
- nodemon (--save-dev)
- dotenv
  <br />

**scripts:**

```js
"start": "node index.js"
```

can be run

```shell
npm start
```

<br />
```js
"dev": "nodemon index.js"
```
can be run 
```shell
npm run dev
```
(full path would be node.modules/.bin/nodemon)

## Moduls

- **controllers** used for the routes

## 4.3 testing

JEST

```shell
npm install --save-dev jest
```

<br />

**scripts:**

```js
"test": "jest --verbose"
```

['verbose': Display individual test results with the test suite hierarchy.
](https://jestjs.io/docs/cli#--verbose)

add to end of package.json:

```js
 "jest":{
    "testEnvironment":"node"
  }
```
