import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';
import { PlaylistItem } from '../components/PlaylistItem'
import Router from '../navigation/Router';
import Colors from '../constants/Colors';
import Data from '../data/Data';

export default class TasteScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Art Taste',
      tintColor: Colors.tintColor
    },
  }

  render() {

    _goToPlaylistDetail = (playlist) => {
      this.props.navigator.push(Router.getRoute('playlist', playlist));
    }

    let playlistGrid = Data.playlists.map(function(playlist, i) {
      return (
        <TouchableOpacity onPress={this._goToPlaylistDetail.bind(this, playlist)} key={i}>
          <PlaylistItem playlist={playlist} style={styles.playlistItem} />
        </TouchableOpacity>
      );
    });

    return (
      <View style={styles.container}>
          {playlistGrid}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playlistItem: {
    margin: 8
  }
});