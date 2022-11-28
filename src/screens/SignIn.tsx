import {Pressable, StyleSheet, Text, View} from 'react-native';

export function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Pressable style={styles.button} onPress={() => console.log('pressed')}>
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
