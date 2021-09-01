# ES6 Experiments Series: Buffon's needle

![Buffon's needle](https://image.ibb.co/eJ02Qz/buffons_needle_github.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f2ff2cae-871a-44a5-bd49-1fc3070acb74/deploy-status)](https://app.netlify.com/sites/es6-experiments-series-buffons-needle/deploys)

Suppose we have a floor made of parallel strips of wood, each the same width, and we drop a needle onto the floor. What is the probability that the needle will lie across a line between two strips? [Wikipedia](https://en.wikipedia.org/wiki/Buffon%27s_needle)

Project architecture mainly based on [Yet Another And Really Basic Webpack ES6 Starterkit](https://github.com/jonathanlinat/yet-another-and-really-basic-webpack-es6-starterkit).

## Installation

Clone this repository locally...

```
$ git clone https://github.com/jonathanlinat/es6-experiments-series-buffons-needle.git
$ cd es6-experiments-series-buffons-needle/
```

...and install the required NPM packages.

```
$ npm install
```

### Start a Development server

Start a local Web Server.

```
$ npm run dev
```

### Build a Production version

Create a Production version of the project.

```
$ npm run build
```

The _compiled_ version of the project will be available into the `dist` folder.

###

It is also possible to lint code.

```
$ npm run lint
```

## Usage

When a local Web Server is created and a new tab in your browser is opened, discover what's the Magical Number.

Press the `F5` key in order to regenerate the needles and vertical lines.

## Features

* Webpack 4
* ES6 Support via [babel-loader](https://github.com/babel/babel-loader)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)
* JavaScript Standard Style via [eslint-config-standard](https://github.com/standard/eslint-config-standard)
