import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import {
  Notifications,
} from 'exponent';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Alerts from '../constants/Alerts';
import Colors from '../constants/Colors';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

export default class RootNavigation extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        tabBarHeight={70}
        initialTab="museum">
        <TabNavigationItem
          id="museum"
          renderIcon={isSelected => this._renderIcon('museum', 'Museum Visits', isSelected)}>
          <StackNavigation initialRoute="museum" />
        </TabNavigationItem>
        
        <TabNavigationItem
          id="journey"
          renderIcon={isSelected => this._renderIcon('journey', 'Museum Journey', isSelected)}>
          <StackNavigation initialRoute="journey" />
        </TabNavigationItem>

        <TabNavigationItem
          id="taste"
          renderIcon={isSelected => this._renderIcon('taste', 'Art Taste', isSelected)}>
          <StackNavigation initialRoute="taste" />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  _renderIcon(name, title, isSelected) {
    let color = isSelected ? Colors.tabIconSelected : Colors.tabIconDefault;
    let museumIcon = isSelected ? require(`../assets/icons/museum-selected.png`) : require(`../assets/icons/museum-unselected.png`);
    let journeyIcon = isSelected ? require(`../assets/icons/journey-selected.png`) : require(`../assets/icons/journey-unselected.png`);
    let tasteIcon = isSelected ? require(`../assets/icons/taste-selected.png`) : require(`../assets/icons/taste-unselected.png`);
    let icon = name === 'museum' ? museumIcon : name === 'journey' ? journeyIcon : tasteIcon;

    return (
      <View style={styles.tabItemContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={{color}} numberOfLines={1}>
            {title}
        </Text>
      </View>
    );
  };

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({origin, data}) => {
    this.props.navigator.showLocalAlert(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
      Alerts.notice
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32
  }
});
