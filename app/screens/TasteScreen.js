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

    _goToPlaylistDetail = (playlist) => {
      this.props.navigator.push(Router.getRoute('playlist', playlist));
    }

    let playlistList = Data.playlists.map(function(playlist, i) {
      return (
        <TouchableOpacity onPress={this._goToPlaylistDetail.bind(this, playlist)} key={i}>
          <PlaylistItem playlist={playlist} style={styles.playlistItem} />
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
    flexDirection: 'column',
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