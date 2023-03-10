import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const API_KEY = 'AIzaSyDFyJqPeKqz2XfgFLTS4r9uoQZCSe11L0c';

const RestaurantSearch = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${API_KEY}&query=${searchQuery}`
      );
      const json = await response.json();
      const placeId = json.results[0].place_id;
      navigation.navigate('PlaceInfo', { placeId });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Enter restaurant name"
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default RestaurantSearch;
