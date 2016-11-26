import {
  createRouter,
} from '@exponent/ex-navigation';

import MuseumScreen from '../screens/MuseumScreen';
import JourneyScreen from '../screens/JourneyScreen';
import TasteScreen from '../screens/TasteScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  museum: () => MuseumScreen,
  journey: () => JourneyScreen,
  taste: () => TasteScreen,
  rootNavigation: () => RootNavigation,
}));
