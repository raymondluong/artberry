import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import Modal from 'react-native-simple-modal';

import { ArtTrackingItem } from '../components/ArtTrackingItem'
import Router from '../navigation/Router';
import Colors from '../constants/Colors';
import Data from '../data/Data';

export default class MuseumScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  static route = {
    navigationBar: {
      title: 'Artberry',
      tintColor: Colors.tintColor
    },
  }

  render() {
    

    let museumsList = Data.museums.map(function(museum, i) {
      return (
        <TouchableOpacity onPress={this._goToMuseumDetail.bind(this, museum)} key={i}>
          <ArtTrackingItem museum={museum} style={styles.museumItem} />
        </TouchableOpacity>
      );
    });

    return (

      <View>

        <Image
          source={require('../assets/images/vgmap.jpg')}
          style={styles.mapStyle}
        />

        

        <TouchableOpacity style={styles.almond} onPress={() => {this.setState({open: true})}}>
          <Image
            source={require('../assets/images/arthere.png')}
            style={styles.artHereStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bedroom} onPress={() => {this.setState({open: true})}}>
          <Image
            source={require('../assets/images/arthere.png')}
            style={styles.artHereStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.flowering} onPress={() => {this.setState({open: true})}}>
          <Image
            source={require('../assets/images/arthere.png')}
            style={styles.artHereStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.irises} onPress={() => {this.setState({open: true})}}>
          <Image
            source={require('../assets/images/arthere.png')}
            style={styles.artHereStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.langlois} onPress={() => {this.setState({open: true})}}>
          <Image
            source={require('../assets/images/arthere.png')}
            style={styles.artHereStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.potato} onPress={() => {this.setState({open: true})}}>
          <Image
            source={require('../assets/images/arthere.png')}
            style={styles.artHereStyle}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sunflowers} onPress={() => {this.setState({open: true})}}>
          <Image
            source={require('../assets/images/arthere.png')}
            style={styles.artHereStyle}
          />
        </TouchableOpacity>


        <Modal
          offset={500}
          open={this.state.open}
          modalDidClose={() => this.setState({open: false})}
        >
          {museumsList}
        </Modal>

      </View>
    );
  }


}

var screenWidth = Dimensions.get('window').width; 
var screenHeight = Dimensions.get('window').height;
var museumItemWidth = screenWidth * .8;

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
  almond: {
    position: 'absolute',
    top: 55,
    left: 52
  },
  bedroom: {
    position: 'absolute',
    top: 53,
    left: 200
  },
  flowering: {
    position: 'absolute',
    top: 51,
    left: 290
  },
  irises: {
    position: 'absolute',
    top: 320,
    left: 320
  },
  langlois: {
    position: 'absolute',
    top: 280,
    left: 190
  },
  potato: {
    position: 'absolute',
    top: 120,
    left: 52
  },
  sunflowers: {
    position: 'absolute',
    top: 370,
    left: 115
  },
  artHereStyle: {
    width: 20,
    height: 20
  },
  museumItem: {
    width: museumItemWidth,
  }
});