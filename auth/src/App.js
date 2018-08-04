import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAklgWqOKNkEHHbYVsySQPUwFdNdoKp8LQ",
      authDomain: "auth-786c1.firebaseapp.com",
      databaseURL: "https://auth-786c1.firebaseio.com",
      projectId: "auth-786c1",
      storageBucket: "auth-786c1.appspot.com",
      messagingSenderId: "1069418813207"
    });

    firebase.auth().onAuthStateChange((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render () {
    return (
      <View>
      <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App
