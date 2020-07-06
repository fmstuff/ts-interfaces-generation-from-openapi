# Using Typescript interfaces & types generated from an OpenAPI specification

This is a sample project setup for a ExpressJs app which uses Typescript interfaces and types that
have been auto-generated from an OpenAPI (formerly Swagger) file to
ensure consistency between specification & implementation.

Project structure:
```
.
├── docs
│   └── openapi
│       ├── config
│       ├── generatedTypes  <- the generated types
│       └── specs  <- the OpenAPI spec
└── src
    ├── domain  <- domain model & services
    ├── jellyBeansApi
    │   ├── controllers  <- ExpressJs controllers
    │   └── routes
    └── persistence  <- fake data source
```

To start the Express server:

```sh
$ yarn start
```

To (re-) generate the TS interfaces and types from the OpenAPI:

```sh
$ yarn openapi
```

For bundling & validating the OpenAPI specification the project relies on [`swagger-cli`](https://www.npmjs.com/package/swagger-cli), for generating the Typescript interfaces and types [`dts-generator`](https://www.npmjs.com/package/dtsgenerator) is used.