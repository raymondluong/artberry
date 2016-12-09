import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import Accordion from 'react-native-accordion';
// ACTIVE ISSUE: https://github.com/naoufal/react-native-accordion/issues/41

import { Entypo } from '@exponent/vector-icons';
import { ListItem } from '../components/ListItem';
import Router from '../navigation/Router';
import Colors from '../constants/Colors';
import Helpers from '../constants/Helpers';
import Data from '../data/Data';

export default class PlaylistScreen extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        return params.name;
      },
      tintColor: Colors.tintColor
    },
  }

  render() {
    let details = this.props.route.params;

    let allArtwork = Data.museums.reduce((all, museum) => all.concat(museum.artwork), []);

    _goToArtDetail = (art) => {
      this.props.navigator.push(Router.getRoute('artDetail', art));
    }

    function createArtGrid(artworkArray) {
      let sortedArtwork = artworkArray.sort((a, b) => b.time - a.time);
      return sortedArtwork.map((art, i) => {
        return (
          <TouchableOpacity onPress={this._goToArtDetail.bind(this, art)} key={i}>
            <ListItem item={art} />
          </TouchableOpacity>
        );
      });
    }

    // property should be one of: [artist, era, country, medium, style]
    function createGridWithHeaders(property) {
      let propertyToArtworkMap = {};
      let propertyToDurationMap = {};

      allArtwork.forEach((artwork) => {
        let propertyValue = artwork[property];
        if (propertyValue in propertyToArtworkMap) {
          propertyToArtworkMap[propertyValue].push(artwork);
          propertyToDurationMap[propertyValue] += artwork.time;
        } else {
          propertyToArtworkMap[propertyValue] = [artwork];
          propertyToDurationMap[propertyValue] = artwork.time;
        }
      });

      let sortedKeys = Object.keys(propertyToDurationMap).sort((a, b) => {
        return propertyToDurationMap[b] - propertyToDurationMap[a];
      });

      return sortedKeys.map((key, i) => {
        let header = (
          <View style={styles.headerContainer}>
            <View style={styles.headerText}>
              <Text style={styles.headerTitle}>{key}</Text>
              <Text style={styles.headerSubtitle}>{Helpers.secToDisplay(propertyToDurationMap[key])}</Text>
              <Text style={styles.headerSubtitle}>
                {propertyToArtworkMap[key].length} {propertyToArtworkMap[key].length > 1 ? 'pieces' : 'piece'} of art viewed
              </Text>
            </View>
            <View style={styles.arrowContainer}>
              <Entypo name="chevron-thin-down" color="gray" size={18}/>
            </View>
          </View>
        );

        let content = (
          <View>
            {createArtGrid(propertyToArtworkMap[key])}
          </View>
        );

        return (
          <View style={styles.sectionContainer} key={i}>
            <Accordion
              header={header}
              content={content}
              easing="easeOutCubic"
              underlayColor="#fff"
              onPress={() => console.log(this)}
            />
          </View>
        )
      });
    }

    let artGrid = details.headers ? createGridWithHeaders(details.property) : createArtGrid(allArtwork);

    return (
      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.gridContainer}>
          {artGrid}
        </View>

      </ScrollView>
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
  sectionContainer: {
    borderBottomWidth: .5,
    borderBottomColor: '#979797',
  },
  gridContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },
  headerText: {
    width: 335,
    marginBottom: 10
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerSubtitle: {
    fontSize: 14
  },
  arrowContainer: {
    width: 20
  },
});
