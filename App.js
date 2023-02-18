import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function App() {
  const restaurant = {
    name: "Zareen's",
    busyLevel: "10%",
    address: "365 California Ave",
    phone: "555-555-1212",
    website: "www.zareens.com",
    image: "zareens.png"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>Current Discount: <Text style={styles.busyLevel}>{restaurant.busyLevel}</Text></Text>
      <Text style={styles.info}>Address: {restaurant.address}</Text>
      <Text style={styles.info}>Phone: {restaurant.phone}</Text>
      <Text style={styles.info}>Website: {restaurant.website}</Text>
      <StatusBar style="auto" />
      <Image source={require("./assets/zareens.png")} style={styles.photo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CBC3E3",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  busyLevel: {
    color: "black",
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  photo: {
    width: 200,
    height: 200,
  },
});
