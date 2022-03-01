import React from 'react';
import {Text, Button, SafeAreaView} from 'react-native';
const Page2 = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>Your Input is {route.params.name}</Text>
     

      <Button title="To Page3" onPress={() => navigation.navigate('Page3')} />
    </SafeAreaView>
  );
};
export default Page2;
