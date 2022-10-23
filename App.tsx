import { StatusBar, StyleSheet } from 'react-native';
import Home from './app/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Search from './app/screens/Search';
import Favourites from './app/screens/Favourites';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
        <StatusBar hidden />
        <NavigationContainer >
            <Tab.Navigator initialRouteName='Home'
                           screenOptions={{
                               tabBarActiveTintColor: 'darkgreen',
                               tabBarInactiveTintColor: 'gray',
                               headerShown: false,
                            }}
                           sceneContainerStyle={{backgroundColor: '#fafffc'}}
            >
              <Tab.Screen name="Home" component={Home}
                          options={{tabBarIcon: () => <Icon name='home' type='antdesign'/>}}
              />
              <Tab.Screen name="Search" component={Search}
                          options={{tabBarIcon: () => <Icon name='ios-search' type='ionicon'/>}}
              />
              <Tab.Screen name="Favourites" component={Favourites}
                          options={{tabBarIcon: () => <Icon name='food-fork-drink' type='material-community'/>}}
              />
            </Tab.Navigator>
          </NavigationContainer>
    </>
  );
}
