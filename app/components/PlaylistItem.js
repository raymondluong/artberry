import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export class PlaylistItem extends React.Component {
  render() {

    let details = this.props.playlist;

    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.imageContainer}>
          <Image source={details.image} style={styles.image} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 0,
  },
  imageContainer: {
    margin: 0,
  },
  image: {
    width: 160,
    height: 160,
    paddingTop: 0
  },
  titleContainer: {
    marginBottom: 0,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  dateText: {
    fontSize: 15
  }
});