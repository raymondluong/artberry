import {
  createRouter,
} from '@exponent/ex-navigation';

import MuseumScreen from '../screens/MuseumScreen';
import MuseumDetailScreen from '../screens/MuseumDetailScreen';
import ArtDetailScreen from '../screens/ArtDetailScreen';
import JourneyScreen from '../screens/JourneyScreen';
import TasteScreen from '../screens/TasteScreen';
import PlaylistScreen from '../screens/PlaylistScreen';
import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  museum: () => MuseumScreen,
  museumDetail: () => MuseumDetailScreen,
  artDetail: () => ArtDetailScreen,
  journey: () => JourneyScreen,
  taste: () => TasteScreen,
  playlist: () => PlaylistScreen,
  rootNavigation: () => RootNavigation,
}));
