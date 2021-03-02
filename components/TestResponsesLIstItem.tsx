import React, {FC, ReactElement, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';
import colors from '../config/colors';

type Props = {
  points: string;
  title: string;
  name: string;
  onPress: any;
};

const TestResponsesListItem: FC<Props> = ({
  points,
  title,
  name,
  onPress,
}): ReactElement => {
  const [count, setCount] = useState(0);
  const setItem = async (title: string): Promise<void> => {
    return await AsyncStorage.setItem(`${name}`, JSON.stringify(count));
  };

  const handleCountPoints = async (points: number) => {
    await setCount(points);
    setItem(name);
  };

  return (
    <TouchableHighlight
      underlayColor={colors.light}
      onPress={() => handleCountPoints(Number(points))}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 1,
  },
  title: {
    color: colors.medium,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    backgroundColor:colors.secondary
  },
});
export default TestResponsesListItem;
