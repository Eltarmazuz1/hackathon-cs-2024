import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransportScreen from '../screens/TransportScreen';
import WaterStationScreen from '../screens/WaterStationScreen';
import ChargeStationScreen from '../screens/ChargeStationScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Transport" component={TransportScreen} />
        <Tab.Screen name="Water Stations" component={WaterStationScreen} />
        <Tab.Screen name="Charge Stations" component={ChargeStationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
