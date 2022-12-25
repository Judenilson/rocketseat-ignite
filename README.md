# Rocketseat Ignite Course

## Node.js
---
Starting package.json:
<code>yarn init -y</code>

Install dev tools:
<code>yarn add express</code>

Installing server to run application:
<code>yarn add nodemon -D</code>

Put in package.json:

<code>
  "scripts": {
    "dev": "nodemon src/index.js"
  },
</code>

Run nodemon:
<code>yarn dev</code>


## TypeScript
---
The archive type is .ts now.

Node don't know .TS, so you must install typescript dependencies, to run the server.
<code>yarn add typescrypt -D</code>

Express is work, if you install types.
<code>yarn add @types/express -D</code>

Starting typescript
<code>yarn tsc --init</code>

Install Nodemon!

Changing .ts for .js:
<code>yarn tsc</code>
! Remember ! 
To create archives .js in another directory, configure tsconfig.json, outDIR:
"outDir": "./dist"

Automatic convert .ts to .js:
<code>yarn add ts-node-dev -D</code>

In package.json, insert:
<code>
  "scripts":{
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  },</code>


> --transpile-only : Don't show sintaxe errors, in dev ambient<br>
> --ignore-watch node_modules : Don't verify changes in node_modules<br>
> --respawn : App reload


In tsconfig.json, comment strict, It is use by javascript to verify errors in app, but typescript do this very well:
"strict": true,

Change const express = require("express"); for import express from 'express';

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
- Insert --inspect in attribute "dev" in package.json archive.

RUN AND DEBUG

### ESLint and Prettier Config

https://www.notion.so/judenilson/ESLint-e-Prettier-Trilha-Node-js-acaec106bad8480db04ca6038fc77bcd

### UUID
<code>yarn add uuid</code>
<code>yarn add @types/uuid -D</code>

## S.O.L.I.D
S => SRP - Single Responsability Principle <br>
O => OCP - Open-Closed Principle <br>
L => LSP - Liskov Substitution Principle <br>
I => ISP - Interface Segregation Principle <br>
D => DIP - Dependency inversion Principle <br>
