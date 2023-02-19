import { View, Text, Image } from "react-native";
import React,{useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';

const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDFyJqPeKqz2XfgFLTS4r9uoQZCSe11L0c&query={{SearchInput.value}} in Palo Alto&radius=10,000&type=restaurant'

// useEffect(() => {
//     fetch(url)
//       .then((resp) => resp.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

// <View style={styles.container}>
//   {loading ? (
//     <Text>Loading...</Text>
//   ) : (
//     data.map((post) => {
//       return (
//         <View>
//           <Text style={styles.title}>{post.title}</Text>
//           <Text>{post.body}</Text>
//         </View>
//       );
//     })
//   )}
// </View>;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       backgroundColor: "#ecf0f1",
//       padding: 8,
//     },
//     title: {
//       fontSize: 30,
//       fontWeight: "bold",
//     },
//   });






// // export default function APICalls(){
// //     return getRestaurantsFromApi();
// //     //return (<View style={styles.container}>
// //     //    <Text>JORDAN API!</Text>
// //     //    <StatusBar style="auto" />
// //     //  </View>);
// // }

// // async function getRestaurantsFromApi() {
// //     try {
// //       let response = await fetch(
// //         'https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDFyJqPeKqz2XfgFLTS4r9uoQZCSe11L0c&query={{SearchInput.value}} in Palo Alto&radius=10,000&type=restaurant',
// //       );
// //       let responseJson = await response.json();
// //       console.log(responseJSon);
// //       return responseJson;
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }

// //fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDFyJqPeKqz2XfgFLTS4r9uoQZCSe11L0c&query={{SearchInput.value}} in Palo Alto&radius=10,000&type=restaurant');