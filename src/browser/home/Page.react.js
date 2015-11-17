import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';

if (process.env.IS_BROWSER)
  require('./Page.styl');

export default class Page extends Component {

  static propTypes = {
    // Why not PropTypes.object.isRequired? Because:
    // https://github.com/rackt/react-router/issues/1505
    msg: PropTypes.object
  }

  render() {
    const {msg: {home: msg}} = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div className="home-page">
          <h1>{msg.title} <FormattedHTMLMessage defaultMessage={msg.byLine} /></h1>
          <h3><Link activeClassName="active" to="/othello">{msg.letsPlay}</Link></h3>
          <h3><FormattedHTMLMessage defaultMessage={msg.othelloRulesLinkHTML} /></h3>
          <p>
            {msg.whatIsThis}
          </p>
          <p><FormattedHTMLMessage defaultMessage={msg.interviewHTML} /></p>
          <p className="footer">
            <FormattedHTMLMessage defaultMessage={msg.inspiredByHTML} />
          </p>
        </div>
      </DocumentTitle>
    );
  }

}
