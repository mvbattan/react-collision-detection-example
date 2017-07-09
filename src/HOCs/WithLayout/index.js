import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import LayoutHandler from '../../redux/LayoutHandler';

const WithLayoutWrapper = WrappedComponent => {
  class WithLayout extends Component {

    componentDidMount() {
      // eslint-disable-next-line react/no-find-dom-node
      this.props.measure(this.props.id, ReactDOM.findDOMNode(this.wrappedComponent).getBoundingClientRect());
    }

    render() {
      return <WrappedComponent {...this.props} ref={ref => (this.wrappedComponent = ref)} />;
    }
  }
  const mapDispatchToProps = dispatch => ({
    measure: (id, specs) => dispatch(LayoutHandler.measure(id, specs))
  });

  return connect(null, mapDispatchToProps)(WithLayout);
}

export default WithLayoutWrapper;
