import React from 'react';
import { connect } from 'react-redux'; //allows for mapStateToProps and passing actions creators
import _ from 'lodash';
import { actions } from '../duck';  //where we get actions to change data

import HomeComponent from '../components/HomeComponent';

class HomeContainer extends React.Component {

  render() {
    return (
      <HomeComponent />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state: ', state);
  const { destinations } = state;
  return {};
}

export default connect(mapStateToProps, actions)(HomeContainer);
