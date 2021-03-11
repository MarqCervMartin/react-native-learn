import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export class ArtistBox extends Component {
    componentDidMount(){
        console.log(this.props.artist.item)
    }

    render() {
        const { image, name, likes, comments} = this.props.artist.item;
        return (
            <View style={styles.artisBox} >
                <Image style={styles.image} source={{uri: image }}/>
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Icon name="heart-outline" size={30} color="gray" />
                            <Text style={styles.count}>{likes}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name="chatbox-outline" size={30} color="gray" />
                            <Text style={styles.count}>{comments}</Text>
                        </View>
                    </View>
                
                </View>
            </View>
        )
      }
}

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
