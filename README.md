# Starter V2
- React
- React-Router
- Redux
- Auth0

## Start application

- Install packages `npm install` or `yarn install`
- Run app: `npm start` or `yarn start`
- By default, the application starts on http://localhost:8080
- You can point to the local backend with the file **app/config/settings.js**
- You can set or update cross values in **app/resources/constants.js**

### Commands

**install packages**

```ssh
npm install
```

**start app**

```ssh
npm start
```

## Live URL
```https://nexton-react-starter-v2.netlify.com```
- We're hosting the starterV2 on [netlify.com](https://app.netlify.com/teams/cristiansoria/sites). 

- ```npm run deploy:dev```
- ```npm run deploy:prod```

### Dev tools

**run tests**

```ssh
npm test
```

**run test with watch**

```ssh
test:dev
```

**linter rules**

```ssh
npm run lint
```

**sass rules**

```ssh
npm run sass-lint
```

**build from production**

```ssh
npm run build
```

## Prerequisites

## IDE

the linter uses pretify `eslint-config-prettier`

## Ubuntu

**install npm version, node >= 8**

- `sudo apt-get update`
- `sudo apt-get install nodejs`
- `sudo apt-get install npm`

Also, you can use [nvm node version management tool](https://github.com/creationix/nvm)

**install yarn latest**

- `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
- `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
- `sudo apt-get update && sudo apt-get install yarn`

## Windows

- [Install npm](http://blog.teamtreehouse.com/install-node-js-npm-windows)
- [Install yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)
