import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Park_Whiz from './Park_Whiz'

const Root = createStackNavigator()

export default function App() {
return (
    <NavigationContainer>
        <Root.Navigator
            initialRouteName="Park_Whiz"
            screenOptions={{
                headerMode:'screen',
                headerStyle: { backgroundColor: 'white' },
                title: null,
                cardOverlayEnabled:true,
                cartStyle:{flex:1},
                animationEnabled:true,
                gestureEnabled:true
            }}
            >
        <Root.Screen name="Park_Whiz" component={Park_Whiz} />
        </Root.Navigator>
    </NavigationContainer>
)}