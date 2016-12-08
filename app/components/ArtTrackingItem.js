import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import Modal from 'react-native-simple-modal';

export class ArtTrackingItem extends React.Component {
render() {

    let details = this.props.museum;

    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.imageContainer}>
          <Image source={details.image} style={styles.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {details.name}
          </Text>
        </View>
        <Text style={styles.dateText}>
          {details.date} • {details.location}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomWidth: .5,
    borderBottomColor: '#979797',
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingTop: 20
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 240,
    height: 160
  },
  titleContainer: {
    marginBottom: 5,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  dateText: {
    fontSize: 15
  }
});