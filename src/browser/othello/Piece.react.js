import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';


export default class Tile extends Component {

  static propTypes = {
    isEmpty: PropTypes.bool.isRequired,
    owner: PropTypes.string.isRequired
  }

  render() {
    const {isEmpty, owner} = this.props;

    return (
        <div className={`piece ${owner} ${isEmpty ? 'empty' : ''}`} />
    );
  }
}
