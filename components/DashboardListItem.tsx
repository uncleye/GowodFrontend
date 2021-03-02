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

type Props = {
  name: string;
  value:number
};

const TestListItem: FC<Props> = ({
  name,
  value
}): ReactElement => {
  const [count, setCount] = useState(0);

  return (
    <TouchableHighlight underlayColor={colors.light}>
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>Area:{name}</Text>
          <Text style={styles.value}>Score: {value}</Text>

        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  name: {
    fontWeight: '500',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    backgroundColor:colors.danger
  },
  value: {
    color: colors.medium,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
    backgroundColor:colors.secondary
  },
});
export default TestListItem;
