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

Automatic convert .ts to .js:
yarn add ts-node-dev -D

In package.json, insert:
  "scripts":{
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  },

 --transpile-only : Don't show sintaxe errors, in dev ambient
 --ignore-watch node_modules : Don't verify changes in node_modules
 --respawn : App reload

In tsconfig.json, comment strict, It is use by javascript to verify errors in app, but typescript do this very well:
"strict": true,

#### Configuring VSCode debug
- Run Debug Play
- Select create a launch.json file
- Select Node.js
In launch.json:
type: node,
The option "request": "launch" The debug start with app, we don't want this.
- Change to "request": "attach" to run debug only when it find errors
- Delete or comment "program"

To connect debug in app, to do:
- Insert --inspect in attribute "dev" in package.json archive.

RUN AND DEBUG