export default {
  app: {
    footer: {
      madeByHtml: ' '
    },
    links: {
      home: 'Home',
      othello: 'Othello'
    }
  },
  auth: {
    form: {
      button: {
        login: 'Login',
        signup: 'Sign up'
      },
      hint: 'Hint: pass1',
      legend: 'Login / Sign Up',
      placeholder: {
        email: 'your@email.com',
        password: 'password'
      },
      wrongPassword: 'Wrong password.'
    },
    logout: {
      button: 'Logout'
    },
    login: {
      title: 'Login'
    },
    validation: {
      email: 'Email address is not valid.',
      password: 'Password must contain at least {minLength} characters.',
      required: `Please fill out {prop, select,
        email {email}
        password {password}
        other {'{prop}'}
      }.`
    }
  },
  home: {
    // // TODO: Android text.
    // androidInfoText: ``,
    inspiredByHTML: 'Built on the shoulders of the exceptionally comprehensive boilerplate, <a href="https://github.com/este/este">Este.js</a>.',
    title: 'Othello-redux',
    githubLink: '<a href="https://github.com/puzzfuzz/othello-redux">othello-redux</a>',
    byLine: 'by Chris Puzzo',
    letsPlay: 'Lets Play!',
    othelloRulesLinkHTML: '<a href="http://www.wikihow.com/Play-Othello">Rules</a>',
    whatIsThis: `For a long time now, I have used the game Othello as my test-bed problem for trying out new technologies.
                  It incorporates the right mix of rendering, state management, and rules logic to serve as a small yet non-trivial application exercising most aspects of a real-world app stack.`,
    interviewHTML: 'I use a piece of this problem as one of my favorite <a href="http://jsfiddle.net/chris_puzzo/0e6xo42r/">interview question</a>.',
    techUsed: {
      h2: 'Tech used in this project',
      list: [
        {
          key: 'es6',
          text: '<a href="http://es6-features.org/">ES6</a>'
        },
        {
          key: 'react',
          text: '<a href="https://facebook.github.io/react/">React</a>, <a href="https://github.com/rackt/redux">Redux</a>, <a href="https://facebook.github.io/immutable-js/">Immutable.js</a>, and a bunch of other components'
        },
        {
          key: 'css',
          text: '<a href="https://learnboost.github.io/stylus/">Stylus</a>, <a href="http://purecss.io/">Pure.css</a>'
        },
        {
          key: 'build',
          text: '<a href="http://gulpjs.com/">Gulp</a>, <a href="https://webpack.github.io/">Webpack</a>, hot-reload, etc.'
        },
        {
          key: 'server',
          text: '<a href="https://nodejs.org/en/">Node</a> with <a href="http://expressjs.com/">Express</a> and a dash of isomorphic'
        },
      ]
    },
    todo: {
      h2: 'TODO',
      list: [
        {
          key: 'react-native',
          text: '<a href="https://facebook.github.io/react-native/">React Native</a>'
        },
        {
          key: 'server-api',
          text: 'Server APIs to store game state and process moves'
        },
        {
          key: 'style',
          text: 'Add some flashiness and flare'
        }
      ]
    },
  },
  me: {
    title: 'Me',
    welcome: 'Hi {email}. This is your secret page.'
  },
  notFound: {
    continueMessage: 'Continue here please.',
    header: 'This page isn\'t available',
    message: 'The link may be broken, or the page may have been removed.',
    title: 'Page Not Found'
  },
  profile: {
    title: 'Profile'
  },
  settings: {
    title: 'Settings'
  },
  othello: {
    title:'Othello',
    player: 'Player',
  },
  native: {
    othello: {
      title: 'Othello-redux'
    }
  }
};
