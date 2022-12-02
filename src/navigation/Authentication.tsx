import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RegisterScreen} from '../screens/Register';
import {SignInScreen} from '../screens/SignIn';
import {RootStackParamList} from './Root';

export type AuthenticationStackParamList = {
  SignIn: undefined;
  Register: undefined;
};

const AuthenticationStack =
  createNativeStackNavigator<AuthenticationStackParamList>();

interface Props
  extends NativeStackScreenProps<RootStackParamList, 'Authentication'> {
  signIn: () => void;
}

export function Authentication({signIn}: Props) {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthenticationStack.Screen name="SignIn">
        {props => <SignInScreen {...props} signIn={signIn} />}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen name="Register" component={RegisterScreen} />
    </AuthenticationStack.Navigator>
  );
}
