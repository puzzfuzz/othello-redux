# <img src="https://raw.githubusercontent.com/puzzfuzz/othello-redux/master/assets/img/Icon-60.png" alt="othello-redux-icon" style="width: 40px;"/> othello-redux

[![Dependency Status](https://david-dm.org/puzzfuzz/othello-redux.svg)](https://david-dm.org/puzzfuzz/othello-redux)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## [Lets Play!](https://othello-redux.herokuapp.com/)

[Othello Rules](http://www.wikihow.com/Play-Othello)

For a long time now, I have used the game Othello as my test-bed problem for trying out new technologies. It incorporates the right mix of rendering, state management, and rules logic to serve as a small yet non-trivial application exercising most aspects of a real-world app stack.

I use a piece of this problem as one of my favorite [interview question](http://jsfiddle.net/chris_puzzo/0e6xo42r/).

## Tech used in this project


- ECMAScript 2015+ with [babeljs.io](https://babeljs.io/)
- [React](https://facebook.github.io/react/), [Redux](https://github.com/rackt/redux), [Immutable.js](https://facebook.github.io/immutable-js/), and a bunch of other components
- [Stylus](https://learnboost.github.io/stylus/), [Pure.css](http://purecss.io/)
- [Gulp](http://gulpjs.com/), [Webpack](https://webpack.github.io/), hot-reload, etc.
- [Node](https://nodejs.org/en/) with [Express](http://expressjs.com/) and a dash of [isomorphic](http://isomorphic.net/)

## TODO

- [React Native](https://facebook.github.io/react-native/)
- Server APIs to store game state and process moves
- Add some flashiness and flare
- Remove "Todo app" sample / boilerplate code

## Prerequisites

- [node.js](http://nodejs.org) (v4 is required).
- [gulp](http://gulpjs.com/) (`npm install -g gulp`)

If you are using different node versions on your machine, use `nvm` to manage them.
## Installing

```shell
git clone https://github.com/puzzfuzz/othello-redux.git othello-redux
cd othello-redux
npm install
```

## Play a game

- run `gulp`
- point your browser to [localhost:8000](http://localhost:8000)
- play a game!


## Credit

Built on the shoulders of the exceptionally comprehensive boilerplate, [Este.js](https://github.com/este/este).
