

import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const API_KEY = 'AIzaSyDFyJqPeKqz2XfgFLTS4r9uoQZCSe11L0c';



const PlaceInfo = ({ place }) => {
  if (!place) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{place.name}</Text>
      <Text>{place.formatted_address}</Text>
      {place.photos && place.photos.length > 0 && (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${place.photos[0].photo_reference}&maxheight=200`
          }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Button title="Book" onPress={() => console.log('Booked!')} />
    </View>
  );
};

export default PlaceInfo;

