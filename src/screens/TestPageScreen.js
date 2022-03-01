/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, Button, StyleSheet, TextInput} from 'react-native';
var state = {
  InputName: '',
};
function TestPageScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>TestPage Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => (state.InputName = text)}
      />

      <Button
        title="Go to Page2"
        onPress={() => navigation.navigate('Page2', {name: state.InputName})}
      />
      <Button
        title="Go to 格狀排列"
        onPress={() => navigation.navigate('BlockMenu')}
      />

    </View>
  );
}

export default TestPageScreen;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
