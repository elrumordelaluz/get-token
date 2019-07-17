# get-token

> Get token from Request

## Install

```
$ yarn add get-token
```

## Usage

```js
const getToken = require('get-token')

app.post((req, res, next) => {
  req.token = getToken(req)
  next()
}, …)
```

## API

### getToken(req)

#### req

Type: `object`

Request Object
