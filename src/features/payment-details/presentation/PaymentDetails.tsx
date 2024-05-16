/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {View, Text, Pressable, FlatList, Image} from 'react-native';
import styles from './style';
import {Radio, Stepper} from '@components';
import {usePaymentDetail} from './usePaymentDetail';
import {useFocusEffect} from '@react-navigation/native';
import {RADIO_DATA} from '@constants';
import {Visitor} from '../domain/entities/payment-details';
import {icons} from '@assets';
import dayjs from 'dayjs';

const PaymentDetails = () => {
  const {currentStep, orderDetail, setCurrentStep, getPaymentDetail} =
    usePaymentDetail();

  useFocusEffect(
    useCallback(() => {
      setCurrentStep(1);
      getPaymentDetail();
    }, []),
  );

  const user = [
    {
      title: 'Mr.',
      name: 'Jhon doe',
    },
    {
      title: 'Mrs.',
      name: 'Lea',
    },
  ];

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
    <View style={styles.container}>
      <Stepper currentStep={currentStep} />
      <View style={styles.detailOrderContainer}>
        <Text style={styles.detailOrdertitle}>Detail Pesanan</Text>

        <View style={styles.cardDetailOrder}>
          <View style={styles.cardDetailOrderContent}>
            <Image
              source={{
                uri: orderDetail?.chosen_hotel_detail?.images[0]?.thumbnail,
              }}
              style={styles.image}
            />
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
              <Image source={icons.ic_reload} style={styles.refundIcon} />
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
            <Text style={styles.addionalData}>Tn. Andreas Andres</Text>
            <Text style={styles.addionalData}>Tn. Andreas Andres</Text>
          </View>
          <Pressable>
            <Text style={styles.editText}>Ubah</Text>
          </Pressable>
        </View>

        <View style={styles.radioContainer}>
          <Radio data={RADIO_DATA} onSelect={value => console.log(value)} />
        </View>

        <View style={styles.visitorContainer}>
          <Text style={styles.detailOrdertitle}>Daftar Tamu</Text>

          <View style={styles.visitorContainer}>
            <FlatList data={user} renderItem={renderVisitor} />

            <Pressable style={styles.editVisitor}>
              <Text style={styles.editText}>Ubah data tamu</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentDetails;
