import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import Router from '../navigation/Router';
import Colors from '../constants/Colors';
import Data from '../data/Data';

export default class MuseumScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Artberry',
      tintColor: Colors.tintColor
    },
  }

  render() {


    return (
      <View>
        <Image
          source={require('../assets/images/vgmap.jpg')}
          style={styles.mapStyle}
        />

      </View>
    );
  }


}

var screenWidth = Dimensions.get('window').width; 
var screenHeight = Dimensions.get('window').height; 

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapStyle: {
    width: screenWidth * 1.5,
    height: screenHeight * 1.7,
    top: -300,
    right: 150
  }
});