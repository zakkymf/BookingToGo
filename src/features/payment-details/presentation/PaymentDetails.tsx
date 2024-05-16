/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './style';
import {Stepper} from '@components';
import {usePaymentDetail} from './usePaymentDetail';
import {useFocusEffect} from '@react-navigation/native';

const PaymentDetails = () => {
  const {currentStep, setCurrentStep} = usePaymentDetail();

  useFocusEffect(
    useCallback(() => {
      setCurrentStep(1);
    }, []),
  );

  return (
    <View style={styles.container}>
      <Stepper currentStep={currentStep} />
      <View style={styles.detailOrderContainer}>
        <Text style={styles.detailOrdertitle}>Detail Pesanan</Text>

        <View style={styles.cardDetailOrder}>
          <View style={styles.cardDetailOrderContent}>
            <View style={styles.image} />
            <View style={styles.detailOrder}>
              <Text style={styles.detailOrderName}>Novotel Tangerang</Text>
              <Text style={styles.detailOrderRoom}>
                Executive room with breakfast
              </Text>
              <Text style={styles.detailOrderRoom}>
                {'1 Kamar \u2022 Quadruple \u2022 2 Tamu \u2022 10 Malam'}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.detailOrderBook}>
          <Text style={styles.detailOrderBookTitle}>Check-In</Text>
          <Text style={styles.detailOrderBookDate}>30 November 2020</Text>
        </View>

        <View style={styles.detailOrderBook}>
          <Text style={styles.detailOrderBookTitle}>Check-Out</Text>
          <Text style={styles.detailOrderBookDate}>30 November 2020</Text>
        </View>
      </View>

      <View style={styles.detailOrdererContainer}>
        <Text style={styles.detailOrdertitle}>Detail Pemesan</Text>

        <View style={styles.cardDetailOrdererContainer}>
          <View>
            <Text style={styles.name}>Tn. Andreas Andres</Text>
            <Text style={styles.addionalData}>Tn. Andreas Andres</Text>
            <Text style={styles.addionalData}>Tn. Andreas Andres</Text>
          </View>
          <Pressable>
            <Text style={styles.editText}>Ubah</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PaymentDetails;
