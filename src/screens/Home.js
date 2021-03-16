import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import ArtistList from '../components/ArtistList'
import { getArtists } from '../components/api-client'

const Home = (props) => {
    const [artists, setArtists] = useState([]);

    useEffect(() =>{
        getArtists().then((data) => setArtists(data))
        //console.log(artists);
    },[])

    return (
        <View style={styles.container}>
            <ArtistList artists={artists}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
      paddingTop: 50,
    },
});

export default Home
