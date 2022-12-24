## Rocketseat Ignite Course

### Node.js
---
Starting package.json:
- yarn init -y 

Install dev tools:
- yarn add express

Installing server to run application:
- yarn add nodemon -D

Put in package.json:

<code>
  "scripts": {

    "dev": "nodemon src/index.js"

  },
</code>

Run nodemon:
- yarn dev


### TypeScript
---
Starting package.json:
- yarn init -y 

Install dev tools:
- yarn add express

The archive type is now .ts

Change const express = require("express"); for import express from 'express';

Express is work, if you install types.
yarn add @types/express -D

Node don't know .TS, so you must install typescript dependencies, to run the server.
yarn add typescrypt -D

Starting typescript
yarn tsc --init

Changing .ts for .js
yarn tsc
! Remember ! 
To create archives .js in another directory, configure tsconfig.json, outDIR:
"outDir": "./dist"

Install Nodemon!