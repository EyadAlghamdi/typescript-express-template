# Typescript Express Template

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

typescript Express Template is an easy to use (create-react-app style) template that you can use on the fly to create your app.

it is based on the MVC framwork, without the V for View. the View is usually used in a SPA (react or angular or vue)

The concept is to use the latest and best libraries in the market to make development more about the code and less about the setup procedure and have a uniform structure accross your team!
### Installation

typescript express template requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

Clone this template into your local environemnt
Write all your code inside the ``` ./src ``` directory

There must always be an ``` index.js``` file inside the ``` ./src``` directory (starting point)

```sh
$ cd typescript-express-tempalte
$ npm install
$ npm start
```
For production environments...

```sh
$ npm install --production
$ npm run test
$ npm run build
```

# NPM scripts

These are short commands to help you run your app quickly and without any effeort.

run ``` npm start ``` to start your development server

run ``` npm run test ``` to perform any tests in your projects (all tests are done using JEST library)

run ``` npm run build ``` after you pass all tests to build a production bundle (using webpack)


### Tech

typescript-express-template uses a number of open source projects to work properly:

* [Node.js] - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Typescript] - TypeScript extends JavaScript by adding types.
* [Express] - Fast, unopinionated, minimalist web framework for Node.js
* [Jest] - a delightful JavaScript Testing Framework
* [Webpack] - Javascript bundler for production


And of course typescript-express-template itself is open source with a [public repository][typescript-express-template]
 on GitHub.



**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Express]: <http://expressjs.com>
   [jest]: <https://jestjs.io/>
   [typescript]: <https://www.typescriptlang.org>
   [webpack]: <https://webpack.js.org>
   [node.js]: <hhttps://nodejs.org>
[typescript-express-template]: <https://github.com/EyadAlghamdi/typescript-express-template>
