import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Linking,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {key: 1, value: 'val1'},
    {key: 2, value: 'val2'},
    {key: 3, value: 'val3'},
    {key: 4, value: 'val4'},
    {key: 5, value: 'val5'},
  ]);

  return (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <View onPress={() => this._onPress(item)}>
          <Text>{item.title}</Text>
        <View/>
      )}/>

        
      
  );
};

const styles = StyleSheet.create({
  body: {
    //flex: 1,
    //backgroundColor: 'blue',
    //justifyContent: 'center',
    //alignItems: 'center',
    //borderWidth: 10,
    //borderColor: 'green',
    //margin: 40,
    //borderRadius: 20,
  },

  item: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  text: {
    color: 'black',
    fontSize: 50,
    fontStyle: 'italic',
    //backgroundColor: 'pink',
    //marginBottom: 10,
  },
});

export default App;
