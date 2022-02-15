import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Constants from 'expo-constants'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LoginScreen from 'screens/LoginScreen/LoginScreen'
import ChatScreen from 'screens/ChatScreen/ChatScreen'
import ProfileScreen from 'screens/ProfileScreen/ProfileScreen'
import FriendsScreen from 'screens/FriendsScreen/FriendsScreen'

initializeApp(Constants.manifest.extra.firebase)

const auth = getAuth()

const Tab = createBottomTabNavigator()

const iconNames = {
  Chat: 'chatbox-outline',
  Profile: 'person-circle-outline',
  Friends: 'people-outline',
}

export default function App() {
  const [user] = useAuthState(auth)

  console.log(user)

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {user ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons
                  name={iconNames[route.name]}
                  size={size}
                  color={color}
                />
              )
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Chat" component={ChatScreen}></Tab.Screen>
          <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
          <Tab.Screen name="Friends" component={FriendsScreen}></Tab.Screen>
        </Tab.Navigator>
      ) : (
        <LoginScreen />
      )}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
