import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';
import Grid from 'react-native-grid-component';


export default class TasteScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Links',
    },
  }

  _renderItem = (data, i) => <ScrollView style={[{backgroundColor: data}, styles.item]} key={i}/>

  render() {
    return (
        <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

          <Grid
            style={styles.list}
            renderItem={this._renderItem}
            data={['black', 'black', 'red', 'green', 'blue', 'yellow']}
            itemsPerRow={2}
          />        

      </ScrollView>
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
});
