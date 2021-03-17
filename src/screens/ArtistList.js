import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import ArtistBox from '../components/ArtistBox';
import ArtistDetail from './ArtistDetail';
import { getArtists } from '../components/api-client'


const ArtistList = ({ navigation }) => {
    const [artists, setArtists] = useState([]);

    //console.log(artists)
    function handlePress(oneArtist) {
        //console.log("handlePress: ",oneArtist)
        //navigation navigate encapsula ejemplo
        // oneArtist: { Todo lo demás, en este caso item}
        navigation.navigate('Artist Detail', { oneArtist })
    }

    useEffect(() =>{
        getArtists().then((data) => setArtists(data))
        //console.log(artists);
    },[])

    return (
        <FlatList
            data={artists}
            renderItem={(item)=>(
                <TouchableOpacity onPress={() => handlePress(item)}>
                    <ArtistBox artist={item}></ArtistBox>
                </TouchableOpacity>
                
            )}
        />
    )
}

export default ArtistList
