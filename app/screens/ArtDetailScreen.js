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

import Router from '../navigation/Router';
import Colors from '../constants/Colors';

export default class MuseumDetailScreen extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        return `${params.name}`;
      },
      tintColor: Colors.tintColor
    },
  }

  render() {
    let details = this.props.route.params;

    function secToMin(sec) {
      var minutes = Math.floor(sec / 60);
      var seconds = sec % 60;
      var minutesString = `${minutes} minutes`;
      if (minutes < 1) {
        minutesString = '';
      }
      var secondsString = `${seconds} seconds`;
      if (seconds === 0) {
        secondsString = '';
      } else if (seconds === 1) {
        secondsString = `${seconds} second`;
      }
      if (minutesString && secondsString) {
        return `${minutesString} and ${secondsString}`;
      }
      return minutesString + secondsString;
    }

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <Image source={details.image} style={styles.image} />

          <View style={styles.grid}>
            <Text style={styles.header}>- Basic Information -</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Title</Text>
              <Text style={styles.detail}>{details.name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Artist</Text>
              <Text style={styles.detail}>{details.artist}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Year</Text>
              <Text style={styles.detail}>{details.year}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Time Viewed</Text>
              <Text style={styles.detail}>{secToMin(details.time)}</Text>
            </View>

            <View style={styles.spacer} />
            <Text style={styles.header}>- Art Details -</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Era</Text>
              <Text style={styles.detail}>{details.era}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Country</Text>
              <Text style={styles.detail}>{details.country}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Medium</Text>
              <Text style={styles.detail}>{details.medium}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Style</Text>
              <Text style={styles.detail}>{details.style}</Text>
            </View>

            <View style={styles.spacer} />
            <Text style={styles.header}>- Description -</Text>
            <Text>{details.description}</Text>
          </View>
          
        </ScrollView>
      </View>
    );
  }
}

var screenWidth = Dimensions.get('window').width; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 15
  },
  image: {
    width: screenWidth,
    height: screenWidth
  },
  header: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: Colors.tintColor
  },
  grid: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    color: '#9B9B9B',
    fontSize: 10,
    fontWeight: 'bold'
  },
  detail: {
    flex: 3,
  },
  spacer: {
    padding: 15,
  }
});
