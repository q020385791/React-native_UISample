import React from 'react';
import {Text, Button, SafeAreaView} from 'react-native';
const Page3 = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>This is page3</Text>
      <Button
        title="Back To HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};
export default Page3;
