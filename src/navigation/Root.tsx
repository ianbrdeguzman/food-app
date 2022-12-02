import {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Authentication} from './Authentication';
import {MainScreen} from '../screens/Main';

export type RootStackParamList = {
  Authentication: undefined;
  Main: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export function Root() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isSignedIn ? (
        <RootStack.Screen name="Main" component={MainScreen} />
      ) : (
        <RootStack.Screen name="Authentication">
          {props => (
            <Authentication {...props} signIn={() => setIsSignedIn(true)} />
          )}
        </RootStack.Screen>
      )}
    </RootStack.Navigator>
  );
}
