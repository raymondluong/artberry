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

      </View>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});