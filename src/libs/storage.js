import AsyncStorage from '@react-navigation/stack'

class Storage{
    static instance = new Storage();

    store = async(key, value) =>{
        try {
            await AsyncStorage.setItem(key, value);

            return true;
        } catch (error) {
            console.log("storage store err", error)
            return false;
        }
    }
    get = async (key) =>{
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            console.log("Storage get err", error)
            throw Error(error);
        }
    }
    multiGet = async(keys) =>{
        try {
            return await AsyncStorage.multiGet(keys);
        } catch (error) {
            console.log("Storage multiget err", error)
            throw Error(error);
        }
    }
    getAllkeys = async() =>{
        try {
            return await AsyncStorage.getAllkeys();
        } catch (error) {
            console.log("Storage getAllkeys err", error)
            throw Error(error);
        }
    }

    remove = async(key) =>{
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (error) {
            console.log("Storage remove err", error)
            return false;
        }
    }
}
export default Storage