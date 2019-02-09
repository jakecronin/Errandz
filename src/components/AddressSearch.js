import React from 'react';
import { View, Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import theme from '../theme';

const AddressSearch = ({
  onSelect,
  val
}) => {
  console.log('rendering address search w/ address: ', val);
  return (
    <GooglePlacesAutocomplete
      placeholder='Location'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      autoFillOnNotFound={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='true'    // true/false/undefined
      text={val}
      fetchDetails={false}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        //console.log(data, details);
        onSelect(data);
      }}

      getDefaultValue={() => val}

      query={{
        key: 'AIzaSyDO8PDPGJQXjZYMifP34HckT-fAwT8s6-E 	',
        language: 'en', // language of the results
      }}

      styles={{
        container: styles.container,
        textInputContainer: styles.inputStyle,
        textInput: styles.locationInputStyle,
        description: {
          fontWeight: theme.FONT_WEIGHT_LIGHT,
          backgroundColor: 'transparent'
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
          backgroundColor: 'transparent'
        },
      }}

      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    />
  );
};

export default AddressSearch;

const styles = {
  container: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.BACKGROUND_COLOR_LIGHT,
    borderTopColor: null,
    borderBottomColor: null,
    backgroundColor: 'transparent',
    width: '100%',
    padding: 2,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    height: 28,
    margin: 2,
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationInputStyle: {
    fontSize: theme.FONT_SIZE_SMALL, color: theme.COLOR_TEXT_DARK, backgroundColor: 'transparent', paddingTop: 0, paddingLeft: 3, paddingRight: 0, paddingBottom: 0, marginTop: 0, marginLeft: 0, marginRight: 0,
  },

};
