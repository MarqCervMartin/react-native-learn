import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, SectionList, FlatList } from 'react-native'
import Colors from '../../res/colors'
import Http from 'cryptoTracker/src/libs/Http'
import CoinMarketItem from './CoinMarketItem'
class CoinDetailScreen extends Component {
    state = {
        coin: {},
        markets: [],
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
        const {coin, markets} = this.state;
        console.log("markets: ",markets)
        return (
            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <Image source={{uri: this.getSymbolIcon(coin.name)}}
                    style={styles.iconImg}/>
                    <Text style={styles.titleText}>{coin.name}</Text>
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
        flexDirection: 'row'
    },
    titleText:{
        fontSize: 16,
        color: '#fff',
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
        color: '#fff',
        fontSize: 14
    },
    sectionText:{
      color:'#fff',
      fontSize: 14,
      fontWeight: 'bold'  
    },
    list:{
        maxHeight: 100,
        paddingLeft: 16
    },
    marketsTitle:{
        color: '#fff',
        fontSize: 16,
        marginBottom: 16,
        marginLeft: 16,
        fontWeight: 'bold'
    }
});

export default CoinDetailScreen