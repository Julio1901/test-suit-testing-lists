/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Button,
  SafeAreaView, Text, View,
} from 'react-native';
import { CustomList } from './componentes/customList/CustomList';



function App(): React.JSX.Element {

  const listData = [
    {        
        name: 'Julio',
        age: 27
    },
    {        
        name: 'Stark',
        age: 42
    },
    {        
        name: 'Samuel',
        age: 32
    },
] 


  return (
    <SafeAreaView>
      <Text>Hello </Text>
      <CustomList data={listData}/>
      <View style={{flexDirection: 'row'}}>
        <Button title='add element into list'/>
        <Button title='remove element from list'/>
      </View>
    </SafeAreaView>
  );
}

export default App;
