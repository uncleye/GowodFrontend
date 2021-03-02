import {Alert, AsyncStorage, Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC, ReactElement, useState} from 'react';
import {TestData} from '../../config/testConstants';
import TestListItem, { TestResponseType } from '../TestListItem';
import ListItemSeparator from '../TestListItemSeparator';
import { TabHomeStackParamNavigationProps } from '../../config/ParamList';
import AppButton from '../Button';

type Props = TabHomeStackParamNavigationProps<'TabTestScreen'>

interface TestType {
  archetype: string;
  name: string;
  responses: {points: number; title: string}[];
}
[];



export default function TabTestScreen({route, navigation} : Props) {
  const [messages, setMessages] = useState<TestType[]>(TestData);
  const [count, setCount] = useState(0);
  const [socre, setScore] = useState('tt')
  const handleCountPoints = (points: number) => {
    const newCount = count + points;
    setCount(newCount)
    
  };
  const getTheCompassScore = async () => {
    try {
      const value = await AsyncStorage.getItem('The compass'); 
      if(value !== null){
        setScore(value)
      }
    }catch(e) {

    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Test</Text>
      <FlatList data = {messages} keyExtractor = {message =>message.name.toString()}
                renderItem = {({item}) => <TestListItem value={handleCountPoints} archetype = {item.archetype} 
                name = {item.name} responses = {item.responses} onPress = {() => getTheCompassScore()}></TestListItem>} 
                ItemSeparatorComponent = {ListItemSeparator}>
                
      </FlatList>
      <AppButton title = 'to home page' onPress = {()=>navigation.navigate('TabDashScreen')}></AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
