import Component from 'react-pure-render/component';
import React, {PropTypes} from 'react';


export default class Tile extends Component {

  static propTypes = {
    owner: PropTypes.string.isRequired
  }

  render() {
    const {owner} = this.props;

    return (
        <div className={`piece ${owner}`} />
    );
  }
}
