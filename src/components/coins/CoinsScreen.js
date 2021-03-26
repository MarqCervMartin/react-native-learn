import React, {Component} from 'react'
import {View, Text, ActivityIndicator, StyleSheet, FlatList} from 'react-native'
import Http from 'cryptoTracker/src/libs/http'

//component
import CoinsItem from './CoinsItem'

class CoinsScreen extends Component{

    state = {
        coins: [],
        loading: false
    }

    componentDidMount = async () =>{
        this.setState({loading: true})
        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        this.state({coins: res.data, loading:false})
    }

    handlePress = () => {
        console.log("go to detail", this.props)

        this.props.navigate('CoinDetail')
    }
    render(){
        const {coins, loading} = this.state;

        return(
            <View style={styles.container}>
                {loading ? 
                    <ActivityIndicator 
                        style={styles.loader}
                        color="#fff" 
                        size={large} 
                    />
                    : null
                }
                <FlatList 
                    data={coins}
                    renderItem={({item})=> <CoinsItem item={item}/>}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center'
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