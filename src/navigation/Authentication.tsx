import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterScreen} from '../screens/Register';
import {SignInScreen} from '../screens/SignIn';

export type AuthenticationStackParamList = {
  SignIn: undefined;
  Register: undefined;
};

const AuthenticationStack =
  createNativeStackNavigator<AuthenticationStackParamList>();

export function Authentication() {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen name="SignIn" component={SignInScreen} />
      <AuthenticationStack.Screen name="Register" component={RegisterScreen} />
    </AuthenticationStack.Navigator>
  );
}
