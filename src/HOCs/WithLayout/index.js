import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import LayoutHandler from '../../redux/LayoutHandler';

const WithLayoutWrapper = WrappedComponent => {
  class WithLayout extends Component {
    constructor(props) {
      super(props);
      this.id = v4();
    }

    componentDidMount() {
      this.props.measure(this.id, this.wrappedComponent.getBoundingClientRect());
    }

    componentDidUpdate() {
      this.props.measure(this.id, this.wrappedComponent.getBoundingClientRect());
    }

    render() {
      return <WrappedComponent {...this.props} refProp={ref => (this.wrappedComponent = ref)} />;
    }
  }
  const mapDispatchToProps = dispatch => ({
    measure: (id, specs) => dispatch(LayoutHandler.measure(id, specs))
  });

  WithLayout.propTypes = {
    measure: PropTypes.func.isRequired
  };

  return connect(null, mapDispatchToProps)(WithLayout);
};

export default WithLayoutWrapper;
