// Import a library
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header'

// Create a component
const App = () => (
    <Header headerText={'Albums'} />
);

// Render the component
AppRegistry.registerComponent('albums', () => App);