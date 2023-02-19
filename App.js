import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, {useEffect, useState} from 'react';

export default function App() {
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);

  const getBusyTimes = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBusyTimes();
  }, []);

  console.log(data)

  return (
    <View style={styles.container}>
      <Text>Bridgie!</Text>
      {data && data.map((foo) =>
        foo.categories.map((category) => {
          <Text>{category}</Text>
        })
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
