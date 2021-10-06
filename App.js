import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
const {height} = Dimensions.get('window');

const App = () => {
  //Modalize Search
  const modalizeRef = useRef(null);

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => modalizeRef.current?.open()}>
        <Text>Modalize</Text>
      </TouchableOpacity>

      <Modalize
        ref={modalizeRef}
        HeaderComponent={<Text style={styles.textSearch}>Modalize</Text>}
        modalHeight={height / 1.2}
        snapPoint={height / 1.2}>
        <Text>Body</Text>
      </Modalize>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSearch: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
export default App;
