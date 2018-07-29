import React from 'react';
import { StyleSheet, Text, View, StatusBar, Header } from 'react-native';
import { Constants } from 'expo'
import Quiz from './components/Quiz'
import { pink } from './utils/colors'
// import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
// import CustomSlider from './components/CustomSlider'
function CustomStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

// const Tabs = createMaterialTopTabNavigator({
//   Quiz: {
//     screen: Quiz,
//     navigationOptions: {
//       tabBarLabel: 'Feel Joy',
//       // tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />,
//     },
//   },
//   CustomSlider: {
//     screen: CustomSlider,
//   }
// }, {
//   navigationOptions: {
//     header: null
//   },
//   tabBarOptios: {
//     style: {
//       activeTintColor: 60,
//       height: 56,
//       backgroundColor: '#0000ff',
//       shadowColor: 'rgba(0,0,0,0.24)',
//       shadowOffset: {
//         width: 0,
//         height: 3,
//       },
//       shadowRadius: 6,
//       shadowOpacity: 1,
//     }
//   }
// })

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomStatusBar backgroundColor='pink' barStyle="light-content" />
        <Quiz />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pink,
    alignItems: 'center',
    padding: 0,
    justifyContent: 'center',
  },
});
