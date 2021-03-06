import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key : string, value : string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch {
        return null;
    }
}

export const getData = async (key : string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if(value !== null) {
            return value;
        }
    } catch {
        return null;
    }
}