import React from 'react';
import _ from 'lodash';

import HomeComponent from '../components/HomeComponent';

class HomeContainer extends React.Component {

  render() {
    return (
      <HomeComponent />
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default HomeContainer; 
