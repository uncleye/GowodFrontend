import React, {FC, ReactElement} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../config/colors';

type Props = {
  title: string;
  onPress?: any;
  color?: string;
};

const AppButton: FC<Props> = ({
  title,
  onPress,
  color = 'primary',
}): ReactElement => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[color]}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

// export default function AppButton(Props) {
//     return (
//         <TouchableOpacity style= {[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
//             <Text style= {styles.text}>{title}</Text>
//         </TouchableOpacity>
//     )
// }

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});
export default AppButton;
