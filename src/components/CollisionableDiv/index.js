import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WithLayout from '../../HOCs/WithLayout';

class CollisionableDiv extends Component {
  state = { translateX: 0 };

  render() {
    return (
      <div
        style={{
          background: this.props.isCollisioning ? 'blue' : 'red',
          height: 50,
          width: 50,
          transform: `translateX(${this.state.translateX}px)`
        }}
        ref={this.props.refProp}
      />
    );
  }
}

CollisionableDiv.propTypes = {
  refProp: PropTypes.func.isRequired,
  isCollisioning: PropTypes.bool
};

export default WithLayout(CollisionableDiv);
