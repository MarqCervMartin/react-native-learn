import React from 'react';
import { View, StyleSheet } from 'react-native';
import ArtistBox from '../components/ArtistBox';

const ArtistDetail = ({ route }) =>{
  const artist = route.params.oneArtist;

  //console.log("DETAIL: ", route.params)
  return(
    <View style={styles.container}>
      <ArtistBox artist={artist}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});

export default ArtistDetail
