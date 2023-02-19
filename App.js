import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import APICalls from './Components/APICalls'
import BackgroundImage from './components/BackgroundImage';


export default function App() {
  //const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      <BackgroundImage />
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
