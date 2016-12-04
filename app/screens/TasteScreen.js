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
import {
  ExponentLinksView,
} from '@exponent/samples';
import Grid from 'react-native-grid-component';
import GridView from "react-native-easy-grid-view";
import { MuseumItem } from '../components/MuseumItem'
import Router from '../navigation/Router';
import Colors from '../constants/Colors';
import Data from '../data/Data';

export default class TasteScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Playlists',
      tintColor: Colors.tintColor
    },
  }

  render() {

    _goToMuseumDetail = (museum) => {
      this.props.navigator.push(Router.getRoute('museumDetail', museum));
    }

    let museumsList = Data.museums.map(function(museum, i) {
      return (
        <TouchableOpacity onPress={this._goToMuseumDetail.bind(this, museum)} key={i}>
          <MuseumItem museum={museum} style={styles.museumItem} />
        </TouchableOpacity>
      );
    });

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
var museumItemWidth = screenWidth * .4;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between'
  },
  museumItem: {
    width: museumItemWidth,
  }
});