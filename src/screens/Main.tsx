import {StyleSheet, Text, View} from 'react-native';

// Main screen is tabs navigation
export function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Screen</Text>
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
