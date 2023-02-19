import React from 'react';
import { View, TextInput, ImageBackground, 
    StyleSheet, Dimensions } from 'react-native';
  
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
  
const BackgroundImage = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 
'https://ctl.s6img.com/society6/img/nqo62GbtqmYmfl8SGI-Gm1h5gxE/w_700/posters/top/~artwork,fw_2718,fh_3618,fx_-450,iw_3618,ih_3618/s6-original-art-uploads/society6/uploads/misc/c71532011a2b4293b4a3d4de7b9c9142/~~/sherbert-gradient-posters.jpg?attempt=0',
        }}
        resizeMode="stretch"
        style={styles.img}>
      </ImageBackground>
    </View>
  );
};
  
export default BackgroundImage;
  
const styles = StyleSheet.create({
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});