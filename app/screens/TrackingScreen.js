import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { ArtTrackingItem } from '../components/ArtTrackingItem';
import Router from '../navigation/Router';
import Colors from '../constants/Colors';
import Data from '../data/Data';



export default class MuseumScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      curArt: null
    };
  }

  static route = {
    navigationBar: {
      title: 'Artberry',
      tintColor: Colors.tintColor
    },
  }

  

  render() {

    _showArtwork = (artwork) => {
        this.setState({ curArt: artwork});
    }
    
    
    let artworkList = Data.museums.map(function(museum, i) {
      return (
        <TouchableOpacity onPress={this._goToMuseumDetail.bind(this, museum)} key={i}>
          <ArtTrackingItem museum={museum} style={styles.museumItem} />
        </TouchableOpacity>
      );
    });

    let artLocations = Data.vanGoghArtwork.map(function(artwork, i) {
      return (
        <TouchableOpacity onPress={this._showArtwork.bind(this, artwork)}
          style={{position: 'absolute', top: artwork.top, left: artwork.left}} 
          key={i}>
          <Image
            source={require('../assets/images/arthere.png')}
            style={styles.artHereStyle}
          />
        </TouchableOpacity>

      );
    });

    return (


      <View>

        <Image
          source={require('../assets/images/vgmap.jpg')}
          style={styles.mapStyle}
        />

        {artLocations}
        


          
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
    right: 150,
  },
  infoScreen: {
    position: 'absolute',
    top: screenHeight - 250,
    left: 0,
    height: 5,
    width: screenWidth,
    backgroundColor: 'white',
    padding: 50
  },
  artHereStyle: {
    width: 20,
    height: 20
  }
});