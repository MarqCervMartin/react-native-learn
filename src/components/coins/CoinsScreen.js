import React, {Component} from 'react'
import {View, Text, ActivityIndicator, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Http from 'cryptoTracker/src/libs/Http'

//component
import CoinsItem from './CoinsItem'
import CoinsSearch from '../coinDetail/CoinsSearch'
import Colors from 'cryptoTracker/src/res/colors'

class CoinsScreen extends Component{

    state = {
        coins: [],
        allCoins: [],
        loading: false
    }

    componentDidMount = async () =>{
        this.getCoins();
    }

    getCoins = async () =>{
        this.setState({loading: true})
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        //console.log(res.data)
        this.setState({coins: res.data, allCoins: res.data, loading:false})
    }

    handlePress = (coin) => {
        this.props.navigation.navigate('CoinDetail', {coin})
        console.log(coin)
    }
    handleSearch = (query) =>{
        const {allCoins} = this.state;

        const coinsFiltered = allCoins.filter((coin) =>{
            return coin.name.toLowerCase().includes(query.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(query.toLowerCase())
        });
        this.setState({coins: coinsFiltered});
    }
    render(){
        const {coins, loading} = this.state;

        return(
            <View style={styles.container}>
                <CoinsSearch onChange={this.handleSearch}/>
                {loading ? 
                    <ActivityIndicator 
                        style={styles.loader}
                        color="#fff" 
                        size="large"
                    />
                    : null
                }
                <FlatList 
                    data={coins}
                    renderItem={({item})=> 
                        <TouchableOpacity onPress={() => this.handlePress(item)}>
                           <CoinsItem 
                            item={item} 
                            /> 
                        </TouchableOpacity>
                        
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade,
    },
    titleText: {
        color: "#fff",
        textAlign: 'center',
    },
    btn: {
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 8,
        margin: 16
    },
    btnText: {
        color: "#fff",
        textAlign: 'center'
    },
    loader:{
        marginTop: 60
    }

})

export default CoinsScreen;