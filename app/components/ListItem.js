import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import { Entypo } from '@exponent/vector-icons';
import Helpers from '../constants/Helpers';

export class ListItem extends React.Component {
  render() {

    let details = this.props.item;

    return (
      <View style={[styles.container, this.props.style]}>
        <Image source={details.image} style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {details.name}
            </Text>
          </View>
          <Text style={styles.subtitle}>
            {Helpers.secToDisplay(details.time)}
          </Text>
        </View>
        <View style={styles.arrowContainer}>
          <Entypo name="chevron-thin-right" color="gray" />
        </View>
      </View>
    );
  }
}

// Had to manually set the width of textContainer, flex was giving me issues
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center'
  },
  image: {
    height: 100,
    width: 100,
  },
  textContainer: {
    marginLeft: 10,
    width: 220
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18
  },
  subtitle: {
    fontSize: 14
  },
  arrowContainer: {
    width: 20,
    paddingLeft: 10
  }
});