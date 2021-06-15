import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
//import {firestore, doc, onSnapshot} from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import database from '@react-native-firebase/database';



export default function Authenticated() {
  
  firestore().collection('users').get().then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);
    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });

  // database()
  // .reference()
  // .on('value', snapshot => {
  //   console.log('User data: ', snapshot.val());
  // });

  const singOut = async () =>{
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth().signOut();
      console.log('Borrando session!');
    }catch(e){
      console.error(e);
    }
  };

  const usersCollection = async () => {
    users = await firestore().collection('users').doc('4Y2ahEgwDupH4S3l751h').get();
    console.log('users',users.data().name);
  };

  useEffect(() => {
    usersCollection();
  },[]);

  // usuario con el cual estoy logueado en google firebase
  const user = auth().currentUser;

  return(
    <View style={styles.screen}>
      <Text style={styles.title}>You're Logged In</Text>
      <Image source={{uri: user?.photoURL}} style={styles.image} />
      <Text style={styles.text}>{user?.displayName}</Text>
      <Text style={styles.text}>{user?.email}</Text>
      <View style={{marginTop: 30}}>
        <Button title="Signout" onPress={() => singOut()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});