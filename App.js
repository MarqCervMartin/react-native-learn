import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import ArtistBox from './components/ArtistBox';
export class App extends Component {
  render() {
    const artist = {
      image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRXGalhjKccxz2TmFM9ZPROJKvXYGrr_VxArjq9dCOE37UUprLs7I8YiPJCKZaC',
      name: 'Hayley Paramore',
      likes: 200,
      comments: 140,
    }
    return (
      <View style={styles.container}>
        <ArtistBox artist={artist}/>

        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
        <ArtistBox artist={artist}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});

export default App
