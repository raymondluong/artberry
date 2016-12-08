import React from 'react';
import { 
  View,
  StyleSheet,
  Image
} from 'react-native';

export class PlaylistItem extends React.Component {
  render() {

    let details = this.props.playlist;

    return (
      <View style={this.props.style}>
        <Image source={details.image} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
  }
});