import React, { Component } from 'react';

import WithLayout from '../../HOCs/WithLayout';

class CollisionableDiv extends Component {
  render = () => <div style={{ background: 'red', height: 50, width: 50 }} />;
}

export default WithLayout(CollisionableDiv);
