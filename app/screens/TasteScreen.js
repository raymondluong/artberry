import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';
import Grid from 'react-native-grid-component';

import { MuseumItem } from '../components/MuseumItem'


export default class TasteScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Links',
    },
  }

  _renderItem = (data, i) =>      
          <MuseumItem 
            museum={{
              name: 'Cantor Arts Center',
              date: 'November 30, 2016',
              location: 'Stanford, CA',
              image: data
            }}
            style={styles.museumItem}>
          </MuseumItem>

  render() {
    return (
        <View style={styles.container}>
          <Grid
            style={styles.list}
            renderItem={this._renderItem}
            data={['cantor', 'moma', 'saam']}
            itemsPerRow={2}
          />        
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  item: {
    flex: 1,
    height: 160,
    margin: 1
  },
  list: {
    flex: 1
  },
  museumItem: {
    width: 200
  }
});
