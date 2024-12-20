To fix this, always stringify your data before storing it using `JSON.stringify()`, and parse the retrieved data using `JSON.parse()`.

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving data:', e);
    return null; 
  }
};

// Example usage:
const myObject = { name: 'John Doe', age: 30 };
storeData('@my_key', myObject).then(() => getData('@my_key').then(retrievedObject => console.log(retrievedObject)));
```