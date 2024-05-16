/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import styles from './style';
import {Radio, Stepper} from '@components';
import {usePaymentDetail} from './usePaymentDetail';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {RADIO_DATA} from '@constants';
import {Visitor} from '../domain/entities/payment-details';
import {icons} from '@assets';
import dayjs from 'dayjs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors} from '@theme';

const PaymentDetails = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {
    currentStep,
    orderDetail,
    visitor,
    selectedOrder,
    setCurrentStep,
    setSelectedOrder,
    getPaymentDetail,
  } = usePaymentDetail();

  useFocusEffect(
    useCallback(() => {
      setCurrentStep(1);
      getPaymentDetail();
    }, []),
  );

  const checkIn = dayjs(orderDetail?.chosen_hotel_params?.check_in);
  const checkOut = dayjs(orderDetail?.chosen_hotel_params?.check_out);

  const renderVisitor = ({item}: {item: Visitor}) => {
    return (
      <View style={styles.listVisitor}>
        <Image source={icons.ic_user} style={styles.listImage} />
        <Text style={styles.visitorText}>{item?.title}</Text>
        <Text style={styles.visitorText}>{item?.name}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle={'light-content'} />
      <Stepper currentStep={currentStep} />
      <View style={styles.detailOrderContainer}>
        <Text style={styles.detailOrdertitle}>Detail Pesanan</Text>

        <View style={styles.cardDetailOrder}>
          <View style={styles.cardDetailOrderContent}>
            {orderDetail?.chosen_hotel_detail?.images ? (
              <Image
                source={{
                  uri: orderDetail?.chosen_hotel_detail?.images[0]?.thumbnail,
                }}
                style={styles.image}
              />
            ) : null}
            <View style={styles.detailOrder}>
              <Text style={styles.detailOrderName}>
                {orderDetail?.chosen_hotel_detail?.hotel_name}
              </Text>
              <Text style={styles.detailOrderRoom}>
                {orderDetail?.chosen_hotel_room?.room_name}
              </Text>
              <Text style={styles.detailOrderRoom}>
                {`${
                  orderDetail?.chosen_hotel_params?.total_room
                } Kamar \u2022 Quadruple \u2022 ${
                  orderDetail?.chosen_hotel_params?.guest_adult
                } Tamu \u2022 ${checkOut.diff(checkIn, 'day')} Malam`}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.detailOrderBook}>
          <Text style={styles.detailOrderBookTitle}>Check-In</Text>
          <Text style={styles.detailOrderBookDate}>
            {dayjs(orderDetail?.chosen_hotel_params?.check_in)
              .locale('id')
              .format('DD MMMM YYYY')}
          </Text>
        </View>

        <View style={styles.detailOrderBook}>
          <Text style={styles.detailOrderBookTitle}>Check-Out</Text>
          <Text style={styles.detailOrderBookDate}>
            {dayjs(orderDetail?.chosen_hotel_params?.check_out)
              .locale('id')
              .format('DD MMMM YYYY')}
          </Text>
        </View>

        {orderDetail?.chosen_hotel_prices?.is_refundable ? (
          <View style={styles.refundContainer}>
            <View style={styles.refundContent}>
              <Image
                source={icons.ic_reload}
                tintColor={'orange'}
                style={styles.refundIcon}
              />
              <Text style={styles.refundText}>
                Dapat direfund jika dibatalkan
              </Text>
            </View>
          </View>
        ) : null}
      </View>

      <View style={styles.detailOrdererContainer}>
        <Text style={styles.detailOrdertitle}>Detail Pemesan</Text>

        <View style={styles.cardDetailOrdererContainer}>
          <View>
            <Text style={styles.name}>Tn. Andreas Andres</Text>
            <Text style={styles.addionalData}>andreasandreas@gmail.com</Text>
            <Text style={styles.addionalData}>+62832354358</Text>
          </View>
          <Pressable>
            <Text style={styles.editText}>Ubah</Text>
          </Pressable>
        </View>

        <View style={styles.radioContainer}>
          <Radio
            data={RADIO_DATA}
            defaulValue={selectedOrder}
            onSelect={value => setSelectedOrder(value)}
          />
        </View>

        <View style={styles.visitorContainer}>
          <Text style={styles.detailOrdertitle}>Daftar Tamu</Text>

          <View style={styles.visitorContainer}>
            <FlatList
              data={visitor}
              nestedScrollEnabled
              renderItem={renderVisitor}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
            />

            <Pressable
              style={styles.editVisitor}
              onPress={() => navigation.navigate('EditVisitor')}>
              <Text style={styles.editText}>Ubah data tamu</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentDetails;
