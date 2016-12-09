import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import Helpers from '../constants/Helpers';

export class TrackingList extends React.Component {
  render() {

    let artwork = this.props.artwork;

    let createArtGrid = () => {
      if (!artwork || artwork.length === 0) {
        return (
          <View style={styles.titleContainer}>
            <Text>You have not viewed any artwork yet.</Text>
          </View>
        )
      }
      return artwork.map(function(art, i) {
        return (
          <View style={styles.listItemContainer} key={i}>
            <Image source={art.image} style={styles.image} />
            <View style={styles.artTextContainer}>
              <View style={styles.artTitleContainer}>
                <Text style={styles.artTitle}>
                  {art.name}
                </Text>
              </View>
              <Text style={art.artSubtitle}>
                {Helpers.secToDisplay(art.time)}
              </Text>
            </View>
          </View>
        );
      });
    }

    return (
      <ScrollView 
        style={[styles.container, this.props.style]}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.gridContainer}>
          {createArtGrid()}
        </View>
      </ScrollView>
    );
  }
}

// Had to manually set the width of textContainer, flex was giving me issues
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingBottom: 10,
  },
  contentContainer: {
    alignItems: 'center'
  },
  gridContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  listItemContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  image: {
    height: 80,
    width: 80,
  },
  artTextContainer: {
    marginLeft: 10,
    width: 220
  },
  artTitleContainer: {
    flexDirection: 'row',
  },
  artTitle: {
    fontSize: 18
  },
  artSubtitle: {
    fontSize: 14
  },
});