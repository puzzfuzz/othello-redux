import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    viewer: PropTypes.object
  }

  render() {
    const {msg: {app: {links: msg}}} = this.props;

    return (
      <header className="pure-menu pure-menu-horizontal">
        <Link className="pure-menu-heading pure-menu-link" to="/"><img src="https://avatars2.githubusercontent.com/u/4961772?v=3&s=40" /></Link>
        <ul className="pure-menu-list">
          <li className="pure-menu-item"><Link activeClassName="active" className="pure-menu-link" to="/othello">{msg.othello}</Link></li>
        </ul>
      </header>
    );
  }

}
