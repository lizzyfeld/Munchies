import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const API_KEY = 'AIzaSyDFyJqPeKqz2XfgFLTS4r9uoQZCSe11L0c';

const PlaceInfo = ({ route }) => {
  const [place, setPlace] = useState(null);
  const navigation = useNavigation();

  const placeId = route.params.placeId;

  // Fetch place details using the Place ID
  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${placeId}&fields=name,formatted_address,formatted_phone_number,photo`
        );
        const json = await response.json();
        setPlace(json.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlace();
  }, [placeId]);

  const handleBookPress = () => {
    navigation.navigate('qrCodepage',{
      name: place.name
    });
  };

  if (!place) {
    return <Text>Loading...</Text>;
  }

  const photoReference = place.photos ? place.photos[0].photo_reference : null;
  const photoUrl = photoReference
    ? `https://maps.googleapis.com/maps/api/place/photo?key=${API_KEY}&photoreference=${photoReference}&maxwidth=400`
    : null;

  return (
    <View>
      <Text>{place.name}</Text>
      <Text>{place.formatted_address}</Text>
      <Text>{place.formatted_phone_number}</Text>
      {photoUrl && <Image source={{ uri: photoUrl }} style={{ width: 400, height: 300 }} />}
      <Button title="Book with a 10% discount" onPress={handleBookPress} />
    </View>
  );
};

export default PlaceInfo;
