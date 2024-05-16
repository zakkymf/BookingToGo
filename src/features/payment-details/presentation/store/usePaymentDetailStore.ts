import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

import {
  ChosenHotel,
  PaymentDetailStore,
} from '@features/payment-details/domain/entities/payment-details';

export const usePaymentDetailStore = create(
  immer<PaymentDetailStore>(set => ({
    currentStep: 1,
    orderDetail: null,
    actions: {
      setCurrentStep: (value: number) => set({currentStep: value}),
      setOrderDetail: (data: ChosenHotel) => set({orderDetail: data}),
    },
  })),
);

export const usePaymentDetailActions = () =>
  usePaymentDetailStore(state => state.actions);
