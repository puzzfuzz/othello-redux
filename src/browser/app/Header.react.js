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
    const {msg: {app: {links: msg}}, viewer} = this.props;

    return (
      <header className="pure-menu pure-menu-horizontal">
        <Link className="pure-menu-heading pure-menu-link" to="/"><h3>{msg.home}</h3></Link>
        <ul className="pure-menu-list">
          <li className="pure-menu-item"><Link activeClassName="active" className="pure-menu-link" to="/todos">{msg.todos}</Link></li>
          <li className="pure-menu-item"><Link activeClassName="active" className="pure-menu-link" to="/me">{msg.me}</Link></li>
          {!viewer &&
            <li className="pure-menu-item" ><Link activeClassName="active" className="pure-menu-link" to="/login">{msg.login}</Link></li>
          }
          <li className="pure-menu-item"><Link activeClassName="active" className="pure-menu-link" to="/othello">{msg.othello}</Link></li>
        </ul>
      </header>
    );
  }

}
