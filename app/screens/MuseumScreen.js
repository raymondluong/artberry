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

import { MuseumItem } from '../components/MuseumItem'
import { MonoText } from '../components/StyledText';

export default class MuseumScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <MuseumItem 
            museum={{
              name: 'Cantor Arts Center',
              date: 'November 30, 2016',
              location: 'Stanford, CA',
              image: 'cantor'
            }}
            style={styles.museumItem}>
          </MuseumItem>

          <MuseumItem 
            museum={{
              name: 'Museum of Modern Art',
              date: 'November 24, 2016',
              location: 'New York, NY',
              image: 'moma'
            }}
            style={styles.museumItem}>
          </MuseumItem>

          <MuseumItem 
            museum={{
              name: 'Seattle Asian Art Museum',
              date: 'November 10, 2016',
              location: 'Seattle, WA',
              image: 'saam'
            }}
            style={styles.museumItem}>
          </MuseumItem>

        </ScrollView>
      </View>
    );
  }

}

var screenWidth = Dimensions.get('window').width; 
var museumItemWidth = screenWidth * .8;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 80
  },
  museumItem: {
    width: museumItemWidth,
  }
});
