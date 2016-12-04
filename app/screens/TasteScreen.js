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
import { PlaylistItem } from '../components/PlaylistItem'
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

    _goToPlaylistDetail = (museum) => {
      this.props.navigator.push(Router.getRoute('museumDetail', museum));
    }

    let playlistList = Data.museums.map(function(museum, i) {
      return (
        <TouchableOpacity onPress={this._goToPlaylistDetail.bind(this, museum)} key={i}>
          <PlaylistItem museum={museum} style={styles.playlistItem} />
        </TouchableOpacity>
      );
    });

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          {playlistList}

        </ScrollView>
      </View>
    );
  }
}



var screenWidth = Dimensions.get('window').width; 
var playlistItemWidth = screenWidth * .45;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15
  },
  playlistItem: {
    width: playlistItemWidth,
  }
});