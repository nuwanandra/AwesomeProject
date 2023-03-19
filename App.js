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
} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {key: 1, value: 'item 1'},
    {key: 2, value: 'item 2'},
    {key: 3, value: 'item 3'},
    {key: 4, value: 'item 4'},
    {key: 5, value: 'item 5'},
    {key: 6, value: 'item 6'},
    {key: 7, value: 'item 7'},
    {key: 8, value: 'item 8'},
    {key: 9, value: 'item 9'},
    {key: 10, value: 'item 10'},
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const refreshF = () => {
    setRefreshing(true);
    setItems([...items, {key: 11, value: 'item 11'}]);
    setRefreshing(false);
  };

  return (
    <ScrollView
      horizontal={false}
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={refreshF}
          colors={['blue']}></RefreshControl>
      }>
      <StatusBar hidden={true}></StatusBar>
      {items.map(n => {
        return (
          <View style={styles.item} key={n.key}>
            <Text style={styles.text}>{n.value}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
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
