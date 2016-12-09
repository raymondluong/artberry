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
//import { PlaylistItem } from '../components/PlaylistItem'
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
        <View
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          {playlistList}

        </View>
      </View>
    );
  }
}



var screenWidth = Dimensions.get('window').width; 
var playlistItemWidth = screenWidth * .40;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0
  },
  playlistItem: {
    width: playlistItemWidth,
  }
});