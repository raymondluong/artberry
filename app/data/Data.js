let metArtwork = [
  {
    name: 'The Great Wave Off Kanagawa',
    artist: 'Katsushika Hokusai',
    year: 1830,
    era: 'Edo Period',
    country: 'Japan',
    medium: 'Woodblock',
    style: 'Ukiyo-e art',
    time: 302,
    description: 'This is the first print in Hokusai\'s series Thirty-six Views of Mount Fuji. It is also Hokusai\'s most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture\'s title suggests, more likely to be a large rogue wave. Ukiyo-e is a genre of Japanese woodblock prints (or woodcuts) and paintings, principally produced between the 17th and the 20th centuries and featuring motifs of landscapes, tales from history, the Kabuki theater, and pleasure quarters.',
    image: require('../assets/images/met/greatwave.jpg')
  },
  {
    name: 'South Wind, Clear Sky',
    artist: 'Katsushika Hokusai',
    year: 1830,
    era: 'Edo Period',
    country: 'Japan',
    medium: 'Woodblock',
    style: 'Ukiyo-e art',
    time: 305,
    description: 'This is the second print in Hokusai\'s series Thirty-six Views of Mount Fuji.. In early autumn when, as the title specifies, the wind is southerly and the sky is clear, the rising sun can turn Mount Fuji red. Hokusai captures this moment with compositional abstraction but meteorological specificity, especially when compared to the rest of the series. The three shades of deepening blue of the sky mirror the three hues of the mountain. The lingering remnants of snow at the peak of the mountain and dark shadows encompassing the forest at its base place it very precisely in time. Mt. Fuji\'s solidly symmetrical shape on the right half of the image is balanced by the delicate clouds to the left, for a striking composition.',
    image: require('../assets/images/met/southwind.jpg')
  },
  {
    name: 'Ejiri in Suruga Province',
    artist: 'Katsushika Hokusai',
    year: 1830,
    era: 'Edo Period',
    country: 'Japan',
    medium: 'Woodblock',
    style: 'Ukiyo-e art',
    time: 212,
    description: 'This is one of the prints in Hokusai\'s series Thirty-six Views of Mount Fuji. A sudden gust of wind surprises the travelers on a road that winds through marshy land, blowing away the hat of a man who tries in vain to catch it. Many squares of paper also whirl away from a woman’s backpack. They rise into the air and scatter all over the field. The woman’s wind-tossed cloth covers her face, and the tall, leggy tree in the foreground loses its leaves to the wind like falling sparks. Other travelers face the wind, crouching low to avoid it and clinging to their hats. Ejiri, a station on the Tökaidö Road, was located on the west side of the port of Shimizu. The town was famous for the beautiful pine forest of Miho (Miho no Matsubara) on the foothills of Fuji. The characteristic long grove of pines has been depicted in paintings since the Muromachi period (1392-1573) and described in waka and haiku by numerous poets. In this print, however, Hokusai chose to depict an inconspicuous spot in Ejiri, where only a banked road winds through a marsh, and focused on an instant of drama caused by a gust of wind. Fuji stands white and unshaken, affected neither by the wind nor the human drama. Hokusai had studied a similar scene in an earlier work, which appears in the seventh book of his Hokusai Manga (Kondö 1966, no.35). The key-block was printed in blue.',
    image: require('../assets/images/met/ejiri.jpg')
  },
  {
    name: 'Tsukuda Island in Musashi Province',
    artist: 'Katsushika Hokusai',
    year: 1830,
    era: 'Edo Period',
    country: 'Japan',
    medium: 'Woodblock',
    style: 'Ukiyo-e art',
    time: 120,
    description: 'This is one of the prints in Hokusai\'s series Thirty-six Views of Mount Fuji. During Hokusai’s time, the island of Tsukuda was a fishing village lying near the mouth of the Sumida River. Hokusai views the island from a high position. Like any other fishing village, Tsukuda’s harbors are filled with rows of masts. Many different types of boats – fishing boats, cargo boats, and ferries – are being rowed to and from the island. Hokusai seems to take delight in the boats’ construction. He depicts their rising stem posts, gunwales, decks, thwarts, and rudder mechanisms in careful detail. The foremost boat, with its covered foredeck and a crewman hauling on a line, is masterfully foreshortened. Over the slightly curved horizon, snow-capped Mount Fuji rises near the center, and small masts of sailing boats appear at the left. The scene probably depicts sunset, not dawn, for Tsukuda Island is a deep shade of blue, which would convey the feeling of evening, despite the pink sky. The key-block was printed in blue.',
    image: require('../assets/images/met/tsukuda.jpg')
  },
  {
    name: 'Portrait of Tokugawa Ieyasu',
    artist: 'Kano Tan\'yu',
    year: 1640,
    era: 'Edo Period',
    country: 'Japan',
    medium: 'Woodblock',
    style: 'Ukiyo-e art',
    time: 120,
    description: 'In 1617, Tan\'yu was appointed by the Tokugawa shogunate to become one of the shogunate\'s official artists. Over the following years, he was given many highly prestigious commissions.',
    image: require('../assets/images/met/tokugawa.jpg')
  },
  {
    name: 'Taking the Evening Cool at the Ryogoku Bridge',
    artist: 'Okumura Masanobu',
    year: 1745,
    era: 'Edo Period',
    country: 'Japan',
    medium: 'Woodblock',
    style: 'Ukiyo-e art',
    time: 247,
    description: 'Some of Okumura Masanobu’s art works consist of the insights of stores and theatres. These pieces are large-scale and referred to as uki-e. Uki-e is a style used by Japanese artists that means “looming picture”. He was very good at capturing the luxury and leisure of his paintings on theatre.',
    image: require('../assets/images/met/evening.jpg')
  },
  {
    name: 'Shibai Uki-e',
    artist: 'Okumura Masanobu',
    year: 1741,
    era: 'Edo Period',
    country: 'Japan',
    medium: 'Woodblock',
    style: 'Ukiyo-e art',
    time: 43,
    description: 'Some of Okumura Masanobu’s art works consist of the insights of stores and theatres. These pieces are large-scale and referred to as uki-e. Uki-e is a style used by Japanese artists that means “looming picture”. He was very good at capturing the luxury and leisure of his paintings on theatre.',
    image: require('../assets/images/met/shibai.jpg')
  },
];

let museums = [
  {
    name: 'Metropolitan Museum of Art',
    date: 'December 9, 2016',
    location: 'New York, NY',
    image: require(`../assets/images/met.jpg`),
    artwork: metArtwork
  },
  {
    name: 'Cantor Arts Center',
    date: 'November 29, 2016',
    location: 'Stanford, CA',
    image: require(`../assets/images/cantor.jpg`),
    artwork: metArtwork
  },
  {
    name: 'Museum of Modern Art',
    date: 'November 24, 2016',
    location: 'New York, NY',
    image: require(`../assets/images/moma.jpg`),
    artwork: metArtwork
  },
  {
    name: 'Seattle Asian Art Museum',
    date: 'November 10, 2016',
    location: 'Seattle, WA',
    image: require(`../assets/images/saam.jpg`),
    artwork: metArtwork 
  }
];

let playlists = [
  {
    name: 'Playlist1',
    image: require(`../assets/images/met.jpg`),
    artwork: metArtwork
  },
  {
    name: 'Playlist2',
    image: require(`../assets/images/cantor.jpg`),
    artwork: metArtwork
  },
  {
    name: 'Playlist3',
    image: require(`../assets/images/moma.jpg`),
    artwork: metArtwork
  },
  {
    name: 'Playlist4',
    image: require(`../assets/images/saam.jpg`),
    artwork: metArtwork 
  },
  {
    name: 'Playlist5',
    image: require(`../assets/images/moma.jpg`),
  },
  {
    name: 'Playlist6',
    image: require(`../assets/images/saam.jpg`),
  }
];

export default {
  museums: museums,
  playlists: playlists
};
