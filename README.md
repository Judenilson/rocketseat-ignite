> # Rocketseat Ignite Course

# Node.js

---

Starting `package.json`:

```
yarn init -y
```

Install dev tools:

```
yarn add express
```

Installing server to run application:

```
yarn add nodemon -D
```

Put in `package.json`:

```json
  "scripts": {
    "dev": "nodemon src/index.js"
  },
```

Run nodemon:

```
yarn dev
```

# TypeScript

The archive type is `.ts` now.<br>
Node don't know .ts, so you must install typescript dependencies, to run the server.

```
yarn add typescrypt -D
```

Express is work, if you install types.

```
yarn add @types/express -D
```

Starting typescript

```
yarn tsc --init
```

Install Nodemon, if you don't did, yet!

Changing .ts for .js:

```
yarn tsc
```

! Remember !
To create archives .js in another directory, configure tsconfig.json, outDIR:
"outDir": "./dist"

Automatic convert .ts to .js:

```
yarn add ts-node-dev -D
```

In `package.json`, insert:

```json
  "scripts":{
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  },
```

> --transpile-only : Don't show sintaxe errors, in dev ambient<br>
> --ignore-watch node_modules : Don't verify changes in node_modules<br>
> --respawn : App reload

In `tsconfig.json`, comment strict, It is use by javascript to verify errors in app, but typescript do this very well:
"strict": true,

Change `const express = require("express")` for `import express from 'express'`;

### VSCode debug config

- Run Debug Play
- Select create a launch.json file
- Select Node.js
  In launch.json:
  type: node,
  The option "request": "launch" The debug start with app, we don't want this.
- Change to "request": "attach" to run debug only when it find errors
- Delete or comment "program"

To connect debug in app, to do:

- Insert --inspect in attribute "dev" in `package.json` archive.

RUN AND DEBUG

### ESLint and Prettier Config

https://www.notion.so/judenilson/ESLint-e-Prettier-Trilha-Node-js-acaec106bad8480db04ca6038fc77bcd

### UUID

```
yarn add uuid
yarn add @types/uuid -D
```

# S.O.L.I.D

S => SRP - Single Responsability Principle <br>
O => OCP - Open-Closed Principle <br>
L => LSP - Liskov Substitution Principle <br>
I => ISP - Interface Segregation Principle <br>
D => DIP - Dependency inversion Principle <br>

# Import Archive

```
yarn add multer
yarn add @types/multer -D
```

Use: import fs from "fs"; _This is Node.JS default install._

# Working with CSV

```
yarn add csv-parse
```

Use: import { parse as csvParse } from "csv-parse";

# Documentation

Tool => Swagger

```
yarn add swagger-ui-express
yarn add @types/swagger-ui-express -D
```

In `tsconfig.json` enable : "resolveJsonModule": true

Create a `swagger.json` in src folder.

Remember! Import swagger in index.ts and create one route for api.

```typescript
import swaggerUi from "swagger-ui-express";
//after import route:
import swaggerFile from './swagger.json';
//route:
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
```

# Docker and Docker Compose

- Install Docker to desktop in: https://www.docker.com/get-started/
- Add the flag --poll in "dev" script, for app restart to work.
- Dock Composer is default in Windows Version

For install Docker Compose in Linux, run:

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

After that, run docker-compose --version to ensure the installation was successful. If it returns an error (even restarting the terminal), create a symbolic link to usr/bin with the following command:

```
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

After configs in Dockerfile, run:

- imagemName without quotes;
- . is a local, the root folder in this case.

```
docker build -t "imagemName" .
```

to run Docker do:

```
docker run -p 3333:3333 "imagemName"
// -p is to mapping dockers ports with the windows, in specific port.
```

<table>
<tr>
<th>Description</th>
<th>Terminal Command</th>
</tr>
<tr>
<td>list all containes running</td>
<td>docker ps</td>
</tr>
<tr>
<td>list all containes</td>
<td>docker ps -a</td>
</tr>
<tr>
<td>enter in container</td>
<td>docker exec -it "container name" /bin/bash</td>
</tr>
<td>To stop a containter</td>
<td>docker stop "Container ID"</td>
</tr>
<tr>
<td>To start a containter</td>
<td>docker start "Container ID"</td>
</tr>
<tr>
<td>Remove the exists container</td>
<td>docker rm "Container ID"</td>
</tr>
<tr>
<td>To start a containter</td>
<td>docker start "Container ID"</td>
</tr>
<tr>
<td>To run compose in background</td>
<td>docker-compose up -d</td>
</tr>
<tr>
<td>After put in background to see logs</td>
<td>docker logs "Container_Name" -f</td>
</tr>
<tr>
<td>to stop dock-composer</td>
<td>docker-compose stop</td>
</tr>
<td>to remove docker-compose</td>
<td>docker-compose down</td>
</tr>
</table>

---
**<h3>For run with Docker Compose, you must create a `docker-compose.yml` file, with Docker configurations, and run the command:</h3>**

```
docker-compose up
//recreating the container
docker-compose up --force-recreate
```
---

# Database

## tool -> TypeORM
Install:

```
yarn add typeorm
yarn add reflect-metadata
```

install PostgreSQL BD Driver:

```
yarn dev pg
```

TypeScript configuration
> Also, make sure you are using TypeScript version 4.5 or higher, and you have enabled the following settings in `tsconfig.json`:

```json
"emitDecoratorMetadata": true,
"experimentalDecorators": true,
```

The configuration must stay in `ormconfig.json`

### TypeORM

Create a line instruction in scripts in `package.json`

```json
"typeorm": "ts-node-dev ./node_modules/typeorm/cli"
```

Creating a migration:

```
yarn ts-node-dev ./node_modules/typeorm/cli migration:create src/database/migrations/"Migration Name"
```

To execute a migration to do:

```
yarn typeorm-ts-node-commonjs migration:run -d src/database/
```

To undo the migration run:

```
yarn ts-node-dev ./node_modules/typeorm/cli migration:revert
```

# TSyringe

Auxiliary Tool to inject dependency in project
https://github.com/microsoft/tsyringe

## Installation

Install by `npm`

```sh
npm install --save tsyringe
```

**or** install with `yarn` (this project is developed using `yarn`)

```sh
yarn add tsyringe
```

Modify your `tsconfig.json` to include the following settings

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

Add a polyfill for the Reflect API (examples below use reflect-metadata). You can use:

- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [core-js (core-js/es7/reflect)](https://www.npmjs.com/package/core-js)
- [reflection](https://www.npmjs.com/package/@abraham/reflection)

The Reflect polyfill import should only be added once, and before DI is used:

```typescript
// main.ts
import "reflect-metadata";

// Your code here...
```
# Password Cryptography
```
yarn add bcryptjs
yarn add @types/bcryptjs -D
```
```json
import { hash } from "bcryptjs";
```