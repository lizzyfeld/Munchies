import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  const [discountCode, setDiscountCode] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const intervalId = useRef(null);

  useEffect(() => {
    // Generate a random discount code
    const code = Math.floor(Math.random() * 1000000);
    setDiscountCode(code.toString());

    // Stop the interval after one second
    intervalId.current = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
      clearInterval(intervalId.current);
    }, 1000);
    
    return () => clearInterval(intervalId.current);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Zareen's 10% Discount:</Text>
      <Text style={styles.timestamp}>{currentTime}</Text>
      {discountCode && <QRCode value={discountCode} size={200} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD5E6",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 16,
    marginBottom: 20,
  },
});

