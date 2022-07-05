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

## Testing backend - supertest

```shell
npm install --save-dev cross-env
```

to work also in windows

### Installing supertest

```shell
npm install --save-dev supertest
```

### To get rid of try-catch

Installing express-async-errors

```shell
npm install express-async-errors
```

Add to app.js

```js
require("express-async-errors");
```

## Creating users and passwords

### to hash passwords

```shell
npm install bcrypt
```

### JSON Web Tokens

```shell
npm install jsonwebtoken
```

[About JSON Web Token](https://github.com/auth0/node-jsonwebtoken)
[JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.](https://jwt.io/)

set _SECRET_ to _.env_ file
