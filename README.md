# node-server

Basic node server using express and typescript

### Installation

1. Install dependencies

```
npm install
```

### Run local dev server

1. Follow "Installation" to install dependencies

2. Run dev server

```
npm run dev
```

### Hitting server local

1. Follow "Run local dev server".

2. Post to localhost:3000. You should get 401 status.

3. This app has some basic auth middleware, add `token` as a header to your request with any value.

4. You should now get `Please provide both numbers.`. In the request body, add 2 props, `num1` and `num2`. Post again and you should get a valid response.
