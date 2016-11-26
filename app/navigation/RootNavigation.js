import React from 'react';
import {
  StyleSheet,
  View,
  Image
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
        tabBarHeight={70}
        initialTab="museum">
        <TabNavigationItem
          id="museum"
          title="Museum Visits"
          renderIcon={(isSelected) => {
            if (isSelected) {
              return <Image source={require('../assets/icons/museum-selected.png')} />;
            } else {
              return <Image source={require('../assets/icons/museum-unselected.png')} />;
            }  
          }}>
          <StackNavigation initialRoute="museum" />

        </TabNavigationItem>
        <TabNavigationItem
          id="journey"
          title="Start Journey"
          renderIcon={isSelected => this._renderIcon('book', isSelected)}>
          <StackNavigation initialRoute="journey" />
        </TabNavigationItem>

        <TabNavigationItem
          id="taste"
          title="Art Taste"
          renderIcon={isSelected => this._renderIcon('cog', isSelected)}>
          <StackNavigation initialRoute="taste" />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  _renderIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

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
  selectedTab: {
    color: Colors.tabIconSelected,
  },
});
