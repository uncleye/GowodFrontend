import React, {FC, ReactElement, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableHighlight,
  FlatList,
  Alert,
  AsyncStorage,
} from 'react-native';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import TestResponsesListItem from './TestResponsesLIstItem';
import AppButton from './Button';
export interface TestResponseType {
  points: number;
  title: string;
}

type Props = {
  archetype: string;
  name: string;
  responses: TestResponseType[];
  onPress: any;
  value:any
};

const TestListItem: FC<Props> = ({
  archetype,
  name,
  responses,
  onPress,
  value
}): ReactElement => {
  const [messages, setMessages] = useState<TestResponseType[]>(responses);
  const [count, setCount] = useState(0);
  const handleCountPoints = (points: number) => {
    setCount(points);
    
  };

  const  setItem = async (title: string): Promise<void> => {
    return AsyncStorage.setItem(`${title}`, JSON.stringify(count));
}

  return (
    <TouchableHighlight underlayColor={colors.light} onPress={() => setItem(name)}>
      <View style={styles.container}>
        <View>
          <Text style={styles.archetype}>archetype : {archetype}</Text>
          <Text style={styles.name}>name : {name}</Text>
          <FlatList
            data={messages}
            keyExtractor={message => message.title}
            renderItem={({item}) => (
              <TestResponsesListItem
                points={item.points.toString()}
                title={item.title}
                name = {name}
                onPress={() => {
                  handleCountPoints(item.points);
                }}
              />
            )}
            ItemSeparatorComponent={TestResponsesListItem}
          />
        </View>
      </View>
      
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
  },
  archetype: {
    fontWeight: '900',
    backgroundColor : colors.danger
  },
  name: {
    color: colors.medium,
  },
});
export default TestListItem;
