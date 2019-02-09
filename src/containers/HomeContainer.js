import React from 'react';
import { connect } from 'react-redux'; //allows for mapStateToProps and passing actions creators
import _ from 'lodash';
import { actions } from '../duck';  //where we get actions to change data

import HomeComponent from '../components/HomeComponent';

class HomeContainer extends React.Component {

  onDestinationX(destination){

  }
  render() {
    const { destinations } = this.props;
    return (
      <HomeComponent
        destinations={destinations}
        onDestinationX={this.onDestinationX.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('home container state: ', state);
  const { destinations } = state;
  return { destinations };
}

export default connect(mapStateToProps, actions)(HomeContainer);
