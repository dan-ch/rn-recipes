import { StatusBar, StyleSheet } from 'react-native';
import Home from './app/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Search from './app/screens/Search';
import Favourites from './app/screens/Favourites';
import { Button, Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recipe from './app/screens/recipe/Recipe';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator()

export default function App() {

    const TabNavigation = () => (
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
    );

  return (
    <>
        <StatusBar hidden />
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Common'>
                <Stack.Screen
                    name="Common"
                    component={TabNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Recipe" component={Recipe} />
            </Stack.Navigator>
          </NavigationContainer>
    </>
  );
}
