export default {
  app: {
    footer: {
      madeByHtml: ' '
    },
    links: {
      home: 'Home',
      login: 'Login',
      me: 'Me (protected)',
      todos: 'Todos',
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
    iosInfoText: `Este.js dev stack.\n\nOpen left menu and check todos!\n\nPress CMD+R to reload.\nPress CMD+D for debug menu.`,
    title: 'Othello-redux',
    byLine: 'by <a href="https://github.com/puzzfuzz/othello-redux">Chris Puzzo</a>',
    letsPlay: 'Lets Play!',
    othelloRulesLinkHTML: '<a href="http://www.wikihow.com/Play-Othello">Rules</a>',
    whatIsThis: `For a long time now, I have used the game Othello as my test-bed problem for trying out new tecnologies.
                  It encorporates the right mix of rendering, state management, and rules logic to serve as a small yet non-trivial application exercising most aspects of a real-world app stack.`,
    interviewHTML: 'Also, I use a piece of this problem as one of my favorite <a href="http://jsfiddle.net/chris_puzzo/0e6xo42r/">interview question</a>.'
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
  todos: {
    add100: 'Add 100 Todos',
    clearAll: 'Clear All',
    clearCompleted: 'Clear Completed',
    empty: `It's rather empty here...`,
    leftList: `{size, plural,
      =0 {Nothing, enjoy}
      one {You are almost done}
      other {You have {size} tasks to go}
    }`,
    newTodoPlaceholder: 'What needs to be done?',
    title: 'Todos'
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
  }
};
