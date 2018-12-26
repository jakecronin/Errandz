import React from 'react';
import { Text, View } from 'react-native';

const HomeComponent = () => {

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
};

export default HomeComponent;
