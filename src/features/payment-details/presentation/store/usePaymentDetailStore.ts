import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

import {PaymentDetailStore} from '@features/payment-details/domain/entities/payment-details';

export const usePaymentDetailStore = create(
  immer<PaymentDetailStore>(set => ({
    currentStep: 1,
    actions: {
      setCurrentStep: (value: number) => set({currentStep: value}),
    },
  })),
);

export const usePaymentDetailActions = () =>
  usePaymentDetailStore(state => state.actions);
