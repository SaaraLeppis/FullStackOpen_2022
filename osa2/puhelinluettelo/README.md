# osa 2

## puhelinluettelo

### notes:

komponentit omassa kansiossa (src/components)

#### JSON server

```shell
npm install -g json-server
```

```shell
json-server --watch db.json
```

by default localhost:3000.

**Change to localhost:3001:**

```shell
json-server --port=3001 --watch db.json
```

**go to browsers localhost:3001/persons**

- json server to dev-dependencies
  ('sovelluskehityksen aikainen riippuvuus')

```shell
npm install json-server --save-dev
```

- add package.json's "scripts"

```js
    "server": "json-server -p3001 --watch db.json"
```

**run the db.json on localhost 3001 by writing**

```shell
npm run server
```

#### AXIOS

- axios added

```shell
npm install axios
```

#### PROMISE

- stages: _pending_, _fullfilled_ (or _resolved_) = success, _rejected_
