import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';
import {Link} from 'react-router';


export default class Header extends Component {

  static propTypes = {
    msg: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired
  }

  render() {
    const {msg: {app: {links: msg}}} = this.props;

    return (
      <header className="pure-menu pure-menu-horizontal">
        <Link className="pure-menu-heading pure-menu-link" to="/">

          <img src="/img/Icon-76@3x.png" style={{'height':'40px'}} />
        </Link>
        <ul className="pure-menu-list">
          <li className="pure-menu-item"><Link activeClassName="active" className="pure-menu-link" to="/othello">{msg.othello}</Link></li>
        </ul>
      </header>
    );
  }

}
