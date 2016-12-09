import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert
} from 'react-native';

import Modal from 'react-native-simple-modal';
import reactMixin from 'react-mixin'
import TimerMixin from 'react-timer-mixin'
import ArtTrackingTimer from '../components/ArtTrackingTimer';
import Router from '../navigation/Router';
import Colors from '../constants/Colors';
import Data from '../data/Data';
import AwesomeButton from 'react-native-awesome-button';


class TrackingScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Artberry',
      tintColor: Colors.tintColor,
    },
  }

  state = {
    open: false,
    currentArt: null,
    counter: 0,
    interval: null,
    viewedArtwork: []
  }

  render() {

    _closeModal = () => {
      this.clearInterval(this.state.interval);
      if (this.state.viewedArtwork.includes(this.state.currentArt)) {
        let i = this.state.viewedArtwork.indexOf(this.state.currentArt);
        this.state.viewedArtwork[i].time += this.state.counter;
      } else {
        this.state.currentArt.time = this.state.counter;
        this.state.viewedArtwork.push(this.state.currentArt);
      }
      this.setState({
        open: false,
        counter: 0
      });
    }

    _viewArtwork = (artwork) => {
      this.state.interval = this.setInterval(() => {
        this.setState({ counter: this.state.counter + 1 })
      }, 1000)
      this.setState({ 
        open: true,
        currentArt: artwork,
      });
    }

    _finishJourney = () => {
      Alert.alert(
        '',
        'Are you sure you want to finish your museum journey?',
        [
          {text: 'Cancel'},
          {text: 'OK', onPress: () => {
            this.props.navigator.popToTop();
            this.props.navigation.performAction(({ tabs, stacks }) => {
              tabs('main').jumpToTab('museum');
              
              Data.newMuseum.artwork = this.state.viewedArtwork;
              Data.museums.unshift(Data.newMuseum);
              Alert.alert(
                '',
                `Your visit to the ${Data.newMuseum.name} has been added!`,
                [
                  {text: 'OK'}
                ]
              )
            });
          }},
        ]
      )
    }

    let createArtModal = artwork => <ArtTrackingTimer artwork={artwork} />;

    let artLocations = Data.vanGoghArtwork.map(function(artwork, i) {
      return (
        <TouchableOpacity onPress={this._viewArtwork.bind(this, artwork)}
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

        <Image
          source={require('../assets/images/currentlocation.png')}
          style={styles.currentLocation}
        />

        <View style={styles.finishJourneyButtonContainer}>
          <AwesomeButton
            backgroundStyle = {[styles.button, styles.finishJourneyButton]}
            labelStyle = {styles.finishJourneyButtonLabel}
            states={{
              default: {
                text: `Finish Journey`,
                onPress: _finishJourney,
                backgroundColor: Colors.redBerry
              }
            }} />
        </View>

        <Modal
          offset={500}
          open={this.state.open}
          modalDidClose={() => this.setState({open: false})}>

          {createArtModal(this.state.currentArt)}

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

reactMixin(TrackingScreen.prototype, TimerMixin);

export default TrackingScreen;

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
  currentLocation: {
    position: 'absolute',
    top: 159,
    left: 250,
    width: 35,
    height: 35
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