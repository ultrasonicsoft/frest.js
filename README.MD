# frest.js

> Send multiple HTTP REST requests in a single request and get aggregated response. Just 2kb.

## Why

A typical web application generally needs to sends multiple HTTP REST requests one by one and then process their response. Managing multiple promise callbacks is tedious.  

That's why frest.js exists.

## Install

You can get it on npm.

```
npm install frest --save
```

Or if you're not into package management, just [download a ZIP](https://raw.githubusercontent.com/ultrasonicsoft/frest.js/master/archieve/frest.zip) file.

## Setup

First, include the script located on the `dist` folder.

```html
<script src="dist/frest.js"></script>
```

# Usage

### getAll() - Sends multiple GET requests

A pretty common use case is to fetch multiple resources from different REST APIs.

`getAll()` accepts array of REST API urls and returns a `promise` object whose response contains aggregated response of all REST APIs.

#### Example

```js
function getAll() {
            let urls = ['https://jsonplaceholder.typicode.com/posts/1',
                'https://jsonplaceholder.typicode.com/posts/2',
                'https://jsonplaceholder.typicode.com/posts/3']
            let result = frest.getAll(urls);
            result.then(response => {
                console.log(JSON.stringify(response, null, 4));
            });
        }
```

### putAll() - sends multiple PUT requests

It is similar to `postAll()` requests.

### deleteAll() - Sends multiple DELETE requests

`deleteAll()` accepts array of REST API urls and returns a `promise` object whose response contains aggregated response of all REST APIs.

#### Example

```js
function deleteAll() {
            let urls = ['https://jsonplaceholder.typicode.com/posts/1',
                'https://jsonplaceholder.typicode.com/posts/2',
                'https://jsonplaceholder.typicode.com/posts/3']
            let result = frest.deleteAll(urls);
            result.then(response => {
                console.log(JSON.stringify(response, null, 4));
            });
        }
```

## Browser Support

Iternally frestjs uses `fetch()` API. This library will support all browsers which supports `fetch()`.

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

## License

[MIT License](https://github.com/ultrasonicsoft/frest.js/blob/master/LICENSE) © Balram Chavan
