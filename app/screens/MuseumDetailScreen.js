import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  SegmentedControlIOS
} from 'react-native';

import { ListItem } from '../components/ListItem';
import Router from '../navigation/Router';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default class MuseumDetailScreen extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        return `${params.name} Visit`;
      },
      tintColor: Colors.tintColor
    },
  }

  state = {
    data: this.props.route.params.artwork.sort((a, b) => b.time - a.time)
  }

  render() {
    let details = this.props.route.params;

    _goToArtDetail = (art) => {
      this.props.navigator.push(Router.getRoute('artDetail', art));
    }

    let artGrid = this.state.data.map(function(art, i) {
      return (
        <TouchableOpacity onPress={this._goToArtDetail.bind(this, art)} key={i}>
          <ListItem item={art} />
        </TouchableOpacity>
      );
    });

    let sortImages = (value) => {
      var sortedArtwork;
      if (value.includes('View')) {
        sortedArtwork = details.artwork.sort((a, b) => b.time - a.time);
      } else {
        sortedArtwork = details.artwork.sort((a, b) => a.name.localeCompare(b.name));
      }
      this.setState({
        data: sortedArtwork
      });
    }

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              {details.name}
            </Text>

            <Text style={styles.subtitle}>
              {details.date} • {details.location}
            </Text>

            <Text style={styles.subtitle}>
              {details.artwork.length} {details.artwork.length > 1 ? 'pieces' : 'piece'} of art viewed
            </Text>
          </View>

          <View style={styles.buttons}>
            <SegmentedControlIOS 
              values={['By Viewing Duration', 'By Name']}
              selectedIndex={0}
              tintColor={Colors.tintColor}
              onValueChange = {sortImages} />
          </View>

          <View style={styles.gridContainer}>
            {artGrid}
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 15,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  titleText: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 13
  },
  buttons: {
    width: Layout.window.width * .93,
    marginBottom: 15,
  },
  gridContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
