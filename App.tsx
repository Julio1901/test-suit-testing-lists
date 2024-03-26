/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  Button,
  SafeAreaView, Text, View,
} from 'react-native';
import { CustomList } from './componentes/customList/CustomList';



function App(): React.JSX.Element {

  const [listData, setListData] = useState([
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
] )


const data = [
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

const handleWithAddButtonPressed = () => {
  const dataUpdated = [...listData , {name: 'New person added', age: 30}]
  setListData (dataUpdated)
}

const handleWithRemoveButtonPressed = () => {
  const newListData = listData.slice(0, -1);
  setListData(newListData);
}

  return (
    <SafeAreaView testID='initial-screen-test-id'>
      <Text>Hello </Text>
      <CustomList data={listData}/>
      <View style={{flexDirection: 'row'}}>
        <Button title='add element into list' onPress={handleWithAddButtonPressed} testID='initial-screen-add-button-test-id'/>
        <Button title='remove element from list' onPress={handleWithRemoveButtonPressed} testID='initial-screen-remove-button-test-id'/>
      </View>
    </SafeAreaView>
  );
}

export default App;
