import React from 'react';
import { Text, View } from 'react-native';
import theme from '../theme.js';
import AddressSearch from './AddressSearch'

const HomeComponent = ({
    onRoutePressed,
    destinations, //array of destinatsion: [dest1, dest2, dest3]
}) => {


  return (
    <View style={styles.container}>
      <View style={styles.addressBox}>
        <Text>476 english ivy court</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: 'gray',
    borderBottomWidth: 5,

  },
  addressBox: {
      backgroundColor: theme.COLOR_PRIMARY,
      justifyContent: 'flex-start',
      flexDirection: 'column',
      borderColor: '#ddd',
      height: 30,
      width: '100%'
  }
};

export default HomeComponent;
