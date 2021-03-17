import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ArtistBox = ({artist}) => {
  const [artista, setArtista] = useState({});

  useEffect(()=>{
    setArtista({image: artist.item.image,
      name: artist.item.name,
      likes: artist.item.likes,
      comments: artist.item.comments});
    //console.log(artista)
    
  },[]);

  return (
    <View style={styles.artisBox} >
        <Image style={styles.image} source={{uri: artista.image }}/>
        <View style={styles.info}>
            <Text style={styles.name}>{artista.name}</Text>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Icon name="heart-outline" size={30} color="gray" />
                    <Text style={styles.count}>{artista.likes}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon name="chatbox-outline" size={30} color="gray" />
                    <Text style={styles.count}>{artista.comments}</Text>
                </View>
            </View>
        
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    artisBox: {
      backgroundColor: 'white',
      flexDirection: 'row',
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
          height: 1,
          width: -2,
      },
      elevation: 2,
    },
    image: {
      width: 150,
      height: 150
    },
    info:{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    name:{
      fontSize: 20,
      marginTop:10,
      color: '#333'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,
      marginTop: 15
    },
    iconContainer: {
      flex: 1,
      alignItems: 'center'
    },
    count: {
      color: 'gray'
    }
  });

export default ArtistBox
