import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PaymentDetails from '../features/payment-details/presentation/PaymentDetails';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
