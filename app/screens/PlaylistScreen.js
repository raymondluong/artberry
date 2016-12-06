import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';

export default class JourneyScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Playlist 1',
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        { /* Go ahead and delete ExponentLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */ }
        <ExponentLinksView />

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});
