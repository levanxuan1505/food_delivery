import AsyncStorage from '@react-native-async-storage/async-storage';
const setFirstTimeUse = () => {
  AsyncStorage.setItem('isFirstTimeUse', 'true');
};

const getFirstTimeUse = () => {
  AsyncStorage.setItem('isFirstTimeUse');
};
export {setFirstTimeUse, getFirstTimeUse};
