import React, {useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import ArtistBox from './ArtistBox';

const ArtistList = ({artists}) => {

    return (
        <FlatList
            data={artists}
            renderItem={(item)=>(
                <ArtistBox artist={item}></ArtistBox>
            )}
        />
    )
}

export default ArtistList
