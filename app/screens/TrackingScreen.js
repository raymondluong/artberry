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

import ArtTrackingTimer from '../components/ArtTrackingTimer';
import Router from '../navigation/Router';
import Colors from '../constants/Colors';
import Data from '../data/Data';
import AwesomeButton from 'react-native-awesome-button';


export default class TrackingScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Artberry',
      tintColor: Colors.tintColor
    },
  }

  state = {
    open: false,
    curArt: null
  }

  render() {

    _closeModal = () => {
      this.setState({
        open: false
      })
    }

    _showArtwork = (artwork) => {
      this.setState({ 
        open: true,
        curArt: artwork
      });
    }
    
    let artworkList = Data.museums.map(function(museum, i) {
      return (
        <TouchableOpacity onPress={this._goToMuseumDetail.bind(this, museum)} key={i}>
          <ArtTrackingTimer museum={museum} style={styles.museumItem} />
        </TouchableOpacity>
      );
    });

    let createCurArtModal = (artwork) => {
      return (
        <View>
          <ArtTrackingTimer artwork={artwork} />
        </View>
      );
    }

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

        <View style={styles.finishJourneyButtonContainer}>
          <AwesomeButton
            backgroundStyle = {[styles.button, styles.finishJourneyButton]}
            labelStyle = {styles.finishJourneyButtonLabel}
            states={{
              default: {
                text: 'Finish Journey',
                onPress: this.startTrackingButtonPressed,
                backgroundColor: Colors.redBerry
              }
            }} />
        </View>

        <Modal
          offset={500}
          open={this.state.open}
          modalDidClose={() => this.setState({open: false})}
        >
          {createCurArtModal(this.state.curArt)}
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity onPress={_closeModal}>
              <AwesomeButton
                backgroundStyle = {[styles.button, styles.doneButton]}
                labelStyle = {styles.doneButtonLabel}
                states={{
                  default: {
                    text: 'Done Viewing',
                    backgroundColor: Colors.blueBerry,
                  }
                }} />
            </TouchableOpacity>
              <AwesomeButton
                backgroundStyle = {[styles.button, styles.elseButton]}
                labelStyle = {styles.elseButtonLabel}
                states={{
                  default: {
                    text: 'I\'m Viewing Something Else',
                    backgroundColor: 'white'
                  }
                }} />
          </View>
        </Modal>

        {/*<Animatable.View ref="infoScreen" animation = "slideOutUp" style={styles.infoScreen}>
          <Text>Hello world</Text>
        </Animatable.View>*/}

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
  infoScreen: {
    position: 'absolute',
    top: 250,
    left: 330
  },
  artHereStyle: {
    width: 20,
    height: 20
  },
  museumItem: {
    width: museumItemWidth,
  },
  modalButtonContainer: {
    paddingTop: 30,
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    height: 30,
    width: 200,
    borderRadius: 20,
    marginBottom: 10
  },
  doneButton: {

  },
  doneButtonLabel: {
    color: 'white',
    fontSize: 14
  },
  elseButton: {
    borderColor: 'gray',
    borderWidth: .5,
  },
  elseButtonLabel: {
    color: 'gray',
    fontSize: 12
  },
  finishJourneyButtonContainer: {
    position: 'absolute',
    bottom: 20,
    width: screenWidth,
    alignItems: 'center'
  },
  finishJourneyButton: {
    
  },
  finishJourneyButtonLabel: {
    color: '#fff',
    fontSize: 18
  }
});