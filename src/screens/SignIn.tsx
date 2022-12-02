import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {AuthenticationStackParamList} from '../navigation/Authentication';

interface Props
  extends NativeStackScreenProps<AuthenticationStackParamList, 'SignIn'> {
  signIn: () => void;
}

export function SignInScreen({signIn}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Pressable style={styles.button} onPress={signIn}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rebeccapurple',
  },
  text: {
    color: 'white',
  },
  button: {
    marginVertical: 8,
  },
});
