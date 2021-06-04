import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import Authentication from './src/Authentication';
import Authenticated from './src/Authenticated';

//const clientID='1050905303299-ge3haemj3fon4tjdela7ek9hqampomp5.apps.googleusercontent.com';
//const clientID='1050905303299-4prq801ckkprmug17gav79rc0roklgg0.apps.googleusercontent.com';
//const clientID='1050905303299-5g9r66idaos4b8ldsegca2k41dfg1quq.apps.googleusercontent.com';
const clientID='1050905303299-ge3haemj3fon4tjdela7ek9hqampomp5.apps.googleusercontent.com';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    console.log('clientID',clientID);
    GoogleSignin.configure({
      webClientId: clientID,
    });
  }, []);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  if (authenticated) {
    return <Authenticated />;
  }

  return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
}