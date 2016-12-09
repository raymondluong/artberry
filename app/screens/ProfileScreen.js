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

import Colors from '../constants/Colors';

export default class MuseumScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Profile',
      tintColor: Colors.tintColor,
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.detailContainer}>
            <View style={styles.settingContainer}>
              <Text style={styles.name}>Evander Patton</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.settingContainer}>
              <Text>artlover94305@gmail.com</Text>
            </View>
            <View style={styles.helperTextContainer}>
              <Text style={styles.helperText}>Artberry uses your email as your unique user key to store your data in the cloud so that you can sync your art data across devices. We do not share your email outside our platform.</Text>
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View style={styles.settingContainer}>
              <Text style={styles.signout}>Sign Out</Text>
            </View>
            <View style={styles.settingContainerStacked}>
              <Text style={styles.signout}>Sign Out All Devices</Text>
            </View>
          </View>


        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#EFEFF4'
  },
  contentContainer: {
  },
  detailContainer: {
    marginBottom: 20,
  },
  settingContainer: {
    borderTopWidth: .5,
    borderTopColor: '#979797',
    borderBottomWidth: .5,
    borderBottomColor: '#979797',
    backgroundColor: '#fff',
    padding: 10
  },
  settingContainerStacked: {
    borderBottomWidth: .5,
    borderBottomColor: '#979797',
    backgroundColor: '#fff',
    padding: 10
  },
  name: {
    fontSize: 18
  },
  helperTextContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5
  },
  helperText: {
    fontSize: 12,
    color: '#6D6D72'
  },
  signout: {
    color: '#FF3B30',
    textAlign: 'center'
  }
});