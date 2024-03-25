/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView, Text,
} from 'react-native';
import { CustomList } from './componentes/customList/CustomList';



function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text>Hello </Text>
      <CustomList/>
    </SafeAreaView>
  );
}

export default App;
