import * as React from 'react';
import {useState} from 'react';
import {
  Alert,
  AsyncStorage,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TabHomeStackParamNavigationProps} from '../../config/ParamList';
import {TestData} from '../../config/testConstants';
import AppButton from '../Button';
import DashboardListItem from '../DashboardListItem';
import ListItemSeparator from '../TestListItemSeparator';

const initialMessages: DashItemType[] = [];
const getInitialData = async () => {
  for (let data of TestData) {
    try {
      const value = await AsyncStorage.getItem(data.name);
      if (value !== null) {
        initialMessages.push({name: data.name, value: Number(value)});
        
      }
    } catch (e) {}
  }
};

const getTotalScore = async (data: DashItemType[]) => {
  let sum: number = data
    .map(a => a.value)
    .reduce(function(a, b) {
      return a + b;
    });
  return sum;
};

type Props = TabHomeStackParamNavigationProps<'TabDashScreen'>;
interface DashItemType {
  name: string;
  value: number;
}
[];

export default function TabDashScreen({route, navigation}: Props) {
  getInitialData();

  const [messages, setMessages] = useState<DashItemType[]>(initialMessages);
  const [totalScore, setTotalScore] = useState<number>(0);
  const score =  getTotalScore(initialMessages)
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab dash</Text>
      <FlatList
        data={messages}
        keyExtractor={message => message.name.toString()}
        renderItem={({item}) => (
          <DashboardListItem name={item.name} value={item.value} />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <AppButton
        title="Begin Test"
        onPress={() => navigation.navigate('TabTestScreen')}
      />
    </View>
  );
}

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
