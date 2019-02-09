import React from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'; //allows for mapStateToProps and passing actions creators

import theme from '../theme.js';

import {actions} from '../duck';
import AddressSearch from './AddressSearch';

class AddressRow extends React.Component {

  selectedAddress(data) {
    //parse data into destination
    const { index } = this.props;
    this.props.addDestination({ destination: data, index });
  }
  deleteAddress() {
    console.log('deleting address with this: ', this);
    console.log('and props: ', this.props);
    const { index } = this.props;
    console.log('and index: ', index);
    this.props.removeDestination({ index });
  }

  render() {
    const { destination, index, count } = this.props;
    console.log(index, ' rendering with dest: ', destination);
    const leftText = (index===0) ? 'Start' : index;
    const rightButton = () => {
      if (index===0 || count===(index+1)) return null;
      return (
        <TouchableOpacity
          onPress={this.deleteAddress.bind(this)}>
          <Text>X</Text>
        </TouchableOpacity>
      );
    };
    const addressSearchBar = (
      <AddressSearch
        onSelect={this.selectedAddress.bind(this)}
        val={destination.description || ''}
      />
    )


    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text>{leftText}</Text>
        </View>

        {addressSearchBar}

        <View style={styles.rightContainer}>{rightButton()}</View>
      </View>
    );
  };
}

const styles = {
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  leftContainer: {
    width: 40
  },
  middle: {
    flex: 1,
  },
  rightContainer: {
    width: 40,
  },
}

export default connect(null, actions)(AddressRow);
