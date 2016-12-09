import React from 'react';
import { 
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { FontAwesome } from '@exponent/vector-icons';
import Colors from '../constants/Colors';
import Router from '../navigation/Router';
import { withNavigation } from '@exponent/ex-navigation';

@withNavigation
export class ProfileButton extends React.Component {
  render() {

    _goToProfile = () => {
      this.props.navigator.push(Router.getRoute('profile'));
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer} onPress={_goToProfile.bind(this)}>
          <FontAwesome name="user" color={Colors.tintColor} size={20}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  iconContainer: {
    paddingRight: 20
  }
});