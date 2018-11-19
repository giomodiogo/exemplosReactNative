import { createStackNavigator } from 'react-navigation';
import LoginPage from './src/pages/LoginPage'
import TodoPage from './src/pages/TodoPage'

export default navigation = createStackNavigator({
  'Main': {
    screen: LoginPage
  },
  'TodoPage': {
    screen: TodoPage,
    navigationOptions: {
      title: 'Todo'
    }
  }
}, {
    navigationOptions: {
      title: 'App Todo',
      headerTintColor: '#fff', //cor flexinha navegação
      headerStyle: {
        backgroundColor: '#65499c'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  });


/*import React from 'react';
import { Text, View } from 'react-native';
const AppPage = () => {
  return (
    <View style={{marginTop: 50, padding: 10}}>
      <Text>App principal</Text>
    </View>
  )
}

export default AppPage;
*/