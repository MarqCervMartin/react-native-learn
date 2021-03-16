import React, {useEffect} from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import ArtistBox from './ArtistBox';
import ArtistDetail from '../screens/ArtistDetail';


const ArtistList = ({artists}) => {
    //console.log(artists)
    function handlePress(artist) {
        console.log(artist);
    }

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
