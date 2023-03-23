# 🚀 Lab365 Fullstack Trindade - Node Express Rest API with Typescript and Sequelize

###

DEMO: https://lab-365-fullstack-node-api-production.up.railway.app/
API: https://lab-365-fullstack-node-api-production.up.railway.app/api/

### Setup

```bash
$ npm install
```

### Run local

```bash
$ npm run serve
```

### Setup Database

> Install MySQL locally and create a database and then update database information into connection.ts file like this;

```ts
export const sequelize = new Sequelize("node-ts-db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  logging: true,
});
```

### Author

© 2023 Copyright Reynaldo Ariel Duarte
