import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export class MuseumItem extends React.Component {
  render() {

    let details = this.props.museum;

    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.imageContainer}>
          <Image source={require(`../assets/images/cantor.jpg`)} style={styles.image} />
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
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: .5,
    borderBottomColor: '#979797',
    backgroundColor: '#fff'
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200
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