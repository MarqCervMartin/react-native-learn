import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, SectionList, FlatList, Pressable} from 'react-native'
import Colors from '../../res/colors'
import Http from 'cryptoTracker/src/libs/Http'
import CoinMarketItem from './CoinMarketItem'
import Storage from 'cryptoTracker/src/libs/Storage'
import colors from '../../res/colors'
class CoinDetailScreen extends Component {
    state = {
        coin: {},
        markets: [],
        isFavorite: false
    }
    toogleFavorite = () =>{
        if(this.state.isFavorite){
            this.removeFavorite();
        }else{
            this.addFavorite();
        }
    }
    addFavorite = async() =>{
        const coin = JSON.stringify(this.state.coin);
        const key = `favorite-${this.state.coin.id}`;

        const stored = await Storage.instance.store(key, coin);
        console.log("stored", stored)
        if(stored){
            this.setState({isFavorite: true})
        }
    }
    removeFavorite = ()=>{

    }

    getSymbolIcon = (nameStr) =>{
        if(nameStr){
            const symbol = nameStr.toLowerCase().replace(" ", "-")
            return `https://c1.coinlore.com/img/25x25/${symbol}.png`

        }
    }

    getSections = (coin) => {
        const sections = [
            {
                title: "Market cap",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [coin.volume24]
            },
            {
                title: "Change 24h",
                data: [coin.percent_change_24h]
            }
        ];
        return sections
    }

    getMarkets = async(coinId) =>{
        const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`

        const markets = await Http.instance.get(url);

        this.setState({markets})
    }

    componentDidMount(){
        const {coin} = this.props.route.params;
        this.props.navigation.setOptions({title: coin.symbol})

        this.getMarkets(coin.id)
        this.setState({coin})
    }

    render() {
        const {coin, markets, isFavorite} = this.state;
        //console.log("markets: ",markets)
        return (
            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <View style={styles.row}>
                        <Image source={{uri: this.getSymbolIcon(coin.name)}}
                        style={styles.iconImg}/>
                        <Text style={styles.titleText}>{coin.name}</Text> 
                    </View>
                    

                    <Pressable
                        onPress={this.toogleFavorite}
                        style={[styles.btnFavorite, isFavorite ? styles.btnFavoriteRemove : styles.btnFavoriteAdd ]}>
                        <Text style={styles.btnFavoriteText}>{isFavorite ? "Remove Favorite" : "Add Favorite"}</Text>
                    </Pressable>
                </View>
                <SectionList
                    style={styles.section}
                    sections={this.getSections(coin)}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => 
                        <View style={styles.sectionItem}>
                           <Text style={styles.itemText}>{item}</Text> 
                        </View>
                    }
                    renderSectionHeader = {({section}) => 
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionText}>{section.title}</Text> 
                        </View>
                    }
                />
                <Text style={styles.marketsTitle}>Markets</Text>
                <FlatList
                    style={styles.list}
                    horizontal = {true}
                    data={markets}
                    renderItem = {({item}) => <CoinMarketItem item={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.charade,
    },
    iconImg: {
        width: 25,
        height: 25
    },
    subHeader: {
        backgroundColor: "rgba(0,0,0, 0.1)",
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText:{
        fontSize: 16,
        color: Colors.white,
        fontWeight: 'bold',
        marginLeft: 8
    },
    section:{
        maxHeight: 220
    },
    sectionHeader:{
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: 8,
    },
    sectionItem:{
        padding: 8
    },
    itemText: {
        color: Colors.white,
        fontSize: 14
    },
    sectionText:{
      color:Colors.white,
      fontSize: 14,
      fontWeight: 'bold'  
    },
    list:{
        maxHeight: 100,
        paddingLeft: 16
    },
    marketsTitle:{
        color: Colors.white,
        fontSize: 16,
        marginBottom: 16,
        marginLeft: 16,
        fontWeight: 'bold'
    },
    btnFavorite:{
        padding: 8,
        borderRadius: 8
    },
    btnFavoriteText:{
        color: Colors.white,
    },
    btnFavoriteAdd:{
        backgroundColor: Colors.picton
    },
    btnFavoriteRemove:{
        backgroundColor: Colors.carmine
    }
});

export default CoinDetailScreen
