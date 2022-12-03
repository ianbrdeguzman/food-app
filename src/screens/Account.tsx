import {StyleSheet, Text, View} from 'react-native';

export function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Screen</Text>
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
});
