import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import reactMixin from 'react-mixin'
import TimerMixin from 'react-timer-mixin'
import Helpers from '../constants/Helpers';
import Colors from '../constants/Colors';
import { FontAwesome } from '@exponent/vector-icons';
import AwesomeButton from 'react-native-awesome-button';

class ArtTrackingTimer extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      counter: 0
    }
  }

  componentWillMount() {
    this.setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000)
  }

  render() {

    let details = this.props.artwork;

    return (
      <View style={[styles.container, this.props.style]}>
        <Text>You are currently viewing</Text>
        <View style={styles.imageContainer}>
          <Image source={details.image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{details.name}</Text>
          <Text style={styles.subtitleText}>{details.artist}</Text>
          <Text style={styles.timerText}>
            <FontAwesome name="clock-o" size={15}/>
             {'  ' + Helpers.secToDisplay(this.state.counter)}
          </Text>
        </View>
      </View>
    );
  }
}

reactMixin(ArtTrackingTimer.prototype, TimerMixin);

export default ArtTrackingTimer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  imageContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 240,
    height: 160
  },
  textContainer: {
    alignItems: 'center'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  subtitleText: {
    fontSize: 15
  },
  clockIcon: {
    marginRight: 2
  },
  timerText: {
    marginTop: 10
  },
});

