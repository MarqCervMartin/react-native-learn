import React, { Component } from 'react';
import { View } from 'react-native';
import ArtistBox from '../components/ArtistBox';
export class ArtistDetail extends Component {
    
      render() {
        const artist = this.props.artist;
        
        return (
          <View style={styles.container}>
            <ArtistBox artist={artist}/>
          </View>
          
        )
      }
}

export default ArtistDetail
