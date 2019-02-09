import React from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import theme from '../theme.js';
import AddressRow from './AddressRow';
import SortableListView from 'react-native-sortable-listview';

const HomeComponent = ({
    onRoutePressed,
    destinations, //array of destinatsion: [dest1, dest2, dest3]
}) => {
  const renderLocations = () => {
    var rows = [];
    _.forEach(destinations, (destination, index) => {
      rows.push(<AddressRow destination={destination} index={index} count={destinations.length}
      key={index}
      />);
    });
    return (<View>{rows}</View>);
  };

  return (
    <View style={styles.container}>
      {renderLocations()}
      <TouchableOpacity>
        <Text>Optimize</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    width: '100%',
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  leftText: {
    flex: 0.2,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  locText: {
    flex: 1,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  locationRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 4,
  },
  addressBox: {
      backgroundColor: theme.COLOR_PRIMARY,
      justifyContent: 'flex-start',
      flexDirection: 'column',
      height: 30,
      width: '100%'
  }
};

export default HomeComponent;
