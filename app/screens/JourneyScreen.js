import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import MapView from 'react-native-maps';
import AwesomeButton from 'react-native-awesome-button';

import Router from '../navigation/Router';
import Colors from '../constants/Colors';

const onButtonPress = () => {
  Alert.alert("Button has been pressed!");
};

export default class JourneyScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      region: {
        latitude: 52.3583,
        longitude: 4.881,
        latitudeDelta: 0.0012,
        longitudeDelta: 0.0011,
      },
    };
    this.startTrackingButtonPressed = this.startTrackingButtonPressed.bind(this)
  }

  static route = {
    navigationBar: {
      title: 'Artberry',
      tintColor: Colors.tintColor
    },
  }  

  startTrackingButtonPressed() {
      this.props.navigator.push(Router.getRoute('tracking'))
  }


  render() {

    return (
      <View>
        <MapView
          style={{height: 600, margin: 0}}
          region={this.state.region}
        >

        <MapView.Marker
          coordinate={{latitude: 52.3583, longitude: 4.881}}
          pinColor={Colors.tintColor}
        />

        </MapView>
        <View style={styles.container}>
          <AwesomeButton
            backgroundStyle = {styles.startTrackingButtonBackground}
            labelStyle = {styles.startTrackingButtonLabel}
            states={{
              default: {
                text: 'Start Journey',
                onPress: this.startTrackingButtonPressed,
                backgroundColor: Colors.redBerry
              }
            }} />
        </View>
      </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    top: -125,
    alignItems: 'center'
  },
  startTrackingButtonBackground : {
    justifyContent: 'center',
    height: 40,
    width: 220,
    borderRadius: 20
  },
  startTrackingButtonLabel : {
    color: 'white',
    fontSize: 18
  }
});
