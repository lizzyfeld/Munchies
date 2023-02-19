import React, { useState, useCallback } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import RestaurantSearch from './RestaurantSearch';
import PlaceInfo from './PlaceInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import qrCodepage from './qrCodepage';

const API_KEY = 'AIzaSyDFyJqPeKqz2XfgFLTS4r9uoQZCSe11L0c';

const Stack = createStackNavigator();

const App = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleSelectPlace = useCallback(async (placeId) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${placeId}`
      );
      const json = await response.json();
      setSelectedPlace(json.result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RestaurantSearch">
          {(props) => (
            <RestaurantSearch
              {...props}
              onSelectPlace={handleSelectPlace}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="PlaceInfo">
          {(props) => (
            <PlaceInfo {...props} place={selectedPlace} />
          )}
        </Stack.Screen>
        <Stack.Screen name="qrCodepage" component={qrCodepage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
