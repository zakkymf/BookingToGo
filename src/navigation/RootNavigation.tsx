import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PaymentDetails from '@features/payment-details/presentation/PaymentDetails';
import {Colors} from '@theme';
import EditVisitor from '@features/payment-details/presentation/EditVisitor';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PaymentDetails"
        component={PaymentDetails}
        options={{
          headerTintColor: Colors.white,
          headerBackVisible: true,
          headerBackTitleVisible: false,
          headerTitle: 'Payment Details',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 12,
            color: Colors.white,
          },
        }}
      />
      <Stack.Screen
        name="EditVisitor"
        component={EditVisitor}
        options={{
          headerTintColor: Colors.white,
          headerBackVisible: true,
          headerBackTitleVisible: false,
          headerTitle: 'Tambah Data Tamu',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 12,
            color: Colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
