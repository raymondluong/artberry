import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

import { MuseumItem } from '../components/MuseumItem';
import { MonoText } from '../components/StyledText';
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

    _goToMuseumDetail = (museum) => {
      this.props.navigator.push(Router.getRoute('museumDetail', museum));
    }

    let museumsList = ent

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          {museumsList}

        </ScrollView>
      </View>
    );
  }


}



var screenWidth = Dimensions.get('window').width; 
var museumItemWidth = screenWidth * .8;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    alignItems: 'center'
  },
  museumItem: {
    width: museumItemWidth,
  }
});