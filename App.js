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
} from 'react-native';

const App = () => {
  //const clickButton = () => Alert.alert(vals.join(','));
  //const clickButton = () => Linking.openURL(name.a);
  //const [name, setName] = [[10, 20, 30, 40, 50, 51, 61], {b: 20}];
  //const vals = name.filter(n => n % 10 === 1).map(n => '<t>' + n + '</t>');

  const clickButton = () => {
    setClickCount(clickCount + 1);
    //Alert.alert(name);
  };

  const [clickCount, setClickCount] = useState(0);

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar hidden={false}></StatusBar>
      <Text style={styles.text}>Programming With </Text>
      <Button title="youtube channel" onPress={clickButton}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderColor: 'green',
    //margin: 40,
    borderRadius: 20,
  },

  text: {
    color: '#ffffff',
    fontSize: 30,
    fontStyle: 'italic',
    marginBottom: 10,
  },
});

export default App;
