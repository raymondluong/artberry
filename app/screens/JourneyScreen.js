import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';
import MapView from 'react-native-maps';

import Router from '../navigation/Router';
import Colors from '../constants/Colors';

export default class JourneyScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Artberry',
      tintColor: Colors.tintColor
    },
  }
  render() {
    return (
      <MapView
        style={{height: 600, margin: 0}}
        initialRegion={{
          latitude: 52.3583,
          longitude: 4.881,
          latitudeDelta: 0.0012,
          longitudeDelta: 0.0011,
        }}>
        <MapView.Marker
          coordinate={{latitude: 52.3583, longitude: 4.881}}
          pinColor={Colors.tintColor}
        />
      </MapView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
