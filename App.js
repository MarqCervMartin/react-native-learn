import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import ArtistList from './components/ArtistList';
export class App extends Component {
  render() {

    const artist = {
      image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcRXGalhjKccxz2TmFM9ZPROJKvXYGrr_VxArjq9dCOE37UUprLs7I8YiPJCKZaC',
      name: 'Hayley Paramore',
      likes: 200,
      comments: 140,
    }
    const artists = Array(10).fill(artist);
    
    return (
      <View style={styles.container}>
        <ArtistList artists={artists}/>
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
