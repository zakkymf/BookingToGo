import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

import {
  ChosenHotel,
  PaymentDetailStore,
  Visitor,
} from '@features/payment-details/domain/entities/payment-details';

export const usePaymentDetailStore = create(
  immer<PaymentDetailStore>(set => ({
    currentStep: 1,
    orderDetail: null,
    selectedOrder: 'Saya memesan untuk orang lain',
    visitor: [
      {
        title: 'Mr.',
        name: 'Jhon Doe',
      },
      {
        title: 'Ny.',
        name: 'Jhon Doe Doe',
      },
      {
        title: 'Ny.',
        name: 'Jhon Doe Doe',
      },
    ],
    actions: {
      setCurrentStep: (value: number) => set({currentStep: value}),
      setOrderDetail: (data: ChosenHotel) => set({orderDetail: data}),
      setSelectedOrder: (option: string) => set({selectedOrder: option}),
      setVisitor: (visitor: Visitor[]) => set({visitor}),
    },
  })),
);

export const usePaymentDetailActions = () =>
  usePaymentDetailStore(state => state.actions);
