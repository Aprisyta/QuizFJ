import React from 'react';
import { StyleSheet, Text, View, StatusBar, Header } from 'react-native';
import { Constants } from 'expo'
import Quiz from './components/Quiz'

function CustomStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomStatusBar backgroundColor='pink' barStyle="light-content" />
        <Quiz>Yo</Quiz>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
