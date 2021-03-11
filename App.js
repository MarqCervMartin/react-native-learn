import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import ArtistList from './components/ArtistList';
import { getArtists } from './components/api-client'


export class App extends Component {
  state = {
    artists: []
  }

  componentDidMount(){
    getArtists().then((data) => this.setState({artists: data}))
  }

  render() {
    const artists = this.state.artists;
    
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
