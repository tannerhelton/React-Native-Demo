import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Spinner, Header, Button } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAklgWqOKNkEHHbYVsySQPUwFdNdoKp8LQ",
      authDomain: "auth-786c1.firebaseapp.com",
      databaseURL: "https://auth-786c1.firebaseio.com",
      projectId: "auth-786c1",
      storageBucket: "auth-786c1.appspot.com",
      messagingSenderId: "1069418813207"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render () {
    return (
      <View>
      <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App
