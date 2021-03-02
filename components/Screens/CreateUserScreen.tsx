import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import {StyleSheet, Picker, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {User} from '../../models/UserModel';
import {DialogAction} from '../../models/CommonModel';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CREATE_USER} from '../../mutations/UserMutation';
import {AuthStackParamNavigationProps} from '../../config/ParamList';
import colors from '../../config/colors';
import { AsyncStorage } from 'react-native';
/**
 * @description holds user dialog
 */

type Props = AuthStackParamNavigationProps<'CreateUser'>;

// Callback properties / methods

// User state
interface UserInput {
  email: String;
  password: String;
  firstname: String;
  lastname: String;
  age: Number;
  genre: String;
}

const initialUser = {
  email: '49334@qq.com',
  password: 'nebesk',
  firstname: 'ziye',
  lastname: 'han',
  age: 89,
  genre: 'maale',
};

/**
 * User Dialog Component
 */
export function UserDialog({route, navigation}: Props) {
  /**
   * sets initial state and attaches user dialog to global state
   * @param {Props} props component properties
   */
  const [firstname, setFirstname] = React.useState('wang');
  const [lastname, setLastname] = React.useState('ziye');
  const [email, setEmail] = React.useState('bithovendev@gmail.com');
  const [password, setPassword] = React.useState('abc');
  const [genre, setGenre] = React.useState('Male');
  const [age, setAge] = React.useState(26);
  const [user, setUser] = React.useState<UserInput>(initialUser);
  /**
   * renders the user dialog component
   */
  /**
   * sets email state
   * @param {String} email user email
   */
  const handleEmailChanged = (email: string) => {
    user.email = email;
    setUser(user);
    setEmail(email);
  };

  /**
   * sets firstname state
   * @param {String} firstname user firstname
   */
  const handleFirstnameChanged = (firstname: string) => {
    user.firstname = firstname;
    setUser(user);
    setFirstname(firstname);
  };

  /**
   * sets lastname state
   * @param {String} lastname user lastname
   */
  const handleLastnameChanged = (lastname: string) => {
    user.lastname = lastname;
    setUser(user);
    setLastname(lastname);
  };

  /**
   * sets age state
   * @param {String} age user age
   */
  const handleAgeChanged = (age: number) => {
    user.age = 86;
    setUser(user);
    setAge(87);
  };

  /**
   * sets password state
   * @param {String} password user password
   */
  const handlePasswordChanged = (password: string) => {
    user.password = password;
    setUser(user);
    setPassword(password);
  };

  /**
   * sets genre state
   * @param {String} genre user genre
   */
  const handleGenreChanged = (genre: string) => {
    user.genre = genre;
    setUser(user);
    setGenre(genre);
  };

    /**
   * sets current user
   * @param {String} user user input
   */
  const setCurrentUser = async (user: UserInput): Promise<void> => {
    return AsyncStorage.setItem(`CurrentUser`, JSON.stringify(user));
  }
  //handled login state changed
  const {handleChangeLoginState} = route.params;

  return (
    <View style={styles.container}>
      <Input
        label="Firstname *"
        autoCapitalize="none"
        leftIcon={<Icon name="user" size={16} color="grey" />}
        inputStyle={styles.input}
        labelStyle={styles.label}
        onChange={e => handleFirstnameChanged(e.nativeEvent.text)}
      />
      <Input
        label="Lastname *"
        autoCapitalize="none"
        leftIcon={<Icon name="user" size={16} color="grey" />}
        inputStyle={styles.input}
        labelStyle={styles.label}
        onChange={e => handleLastnameChanged(e.nativeEvent.text)}
      />
      <Input
        label="Age *"
        keyboardType="numeric"
        autoCapitalize="none"
        leftIcon={<Icon name="envelope" size={16} color="grey" />}
        inputStyle={styles.input}
        labelStyle={styles.label}
        onChange={e => handleAgeChanged(Number(e.nativeEvent.text))}
      />
      <Input
        label="Email *"
        keyboardType="email-address"
        autoCapitalize="none"
        leftIcon={<Icon name="envelope" size={16} color="grey" />}
        inputStyle={styles.input}
        labelStyle={styles.label}
        onChange={e => handleEmailChanged(e.nativeEvent.text)}
      />

      <Input
        label="Password *"
        secureTextEntry
        autoCapitalize="none"
        leftIcon={<Icon name="lock" size={16} color="grey" />}
        inputStyle={styles.input}
        labelStyle={styles.label}
        onChange={e => handlePasswordChanged(e.nativeEvent.text)}
      />
      <Picker
        selectedValue={genre}
        style={styles.pickerContainer}
        onValueChange={(itemValue, itemIndex) => handleGenreChanged(itemValue)}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>

      <Mutation
        mutation={CREATE_USER}
        onCompleted={data => handleChangeLoginState(true)}>
        {createUser => (
          <Button
            onPress={() => {              
              createUser({variables: {input: user}});
              setCurrentUser(user)
            }}
            buttonStyle={styles.button}
            title="Register"
          />
        )}
      </Mutation>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginLeft: 10,
    color: '#616161',
  },
  label: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
    marginBottom: -5,
    marginLeft: 12,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
  container: {
    width: '98%',
    alignSelf: 'center',
    marginTop: 10,
  },
  pickerContainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    marginLeft: 12,
    height: 50,
    width: 150
  },
});

export default UserDialog;
