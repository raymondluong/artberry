import {
  createRouter,
} from '@exponent/ex-navigation';

import MuseumScreen from '../screens/MuseumScreen';
import MuseumDetailScreen from '../screens/MuseumDetailScreen';
import ArtDetailScreen from '../screens/ArtDetailScreen';
import JourneyScreen from '../screens/JourneyScreen';
import TrackingScreen from '../screens/TrackingScreen';
import TasteScreen from '../screens/TasteScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  museum: () => MuseumScreen,
  museumDetail: () => MuseumDetailScreen,
  artDetail: () => ArtDetailScreen,
  journey: () => JourneyScreen,
  tracking: () => TrackingScreen,
  taste: () => TasteScreen,
  rootNavigation: () => RootNavigation,
}));
