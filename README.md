# reverse-proxy

Reverse proxy to solve the CORS problem.

## Install

```bash
npm install
```

## Start

```bash
npm start
```

## Example request from the frontend

```js
// Proxy server domain name without the slash at the end.
const proxyUrl = 'http://domain-proxy.com:3000'
/*
 * The api link that begins with a slash.
 * Protocol does not need to be specified.
 * The proxy server is currently working with the https protocol.
 */
const apiUrl = '/url_without_protocol'

fetch(proxyUrl + apiUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
```
