import {PaymentDetailRepository} from '../domain/PaymentDetailRepository';
import {PaymentDetailApi} from './api/payment-detail.api';

export function PaymentDetailImpl(
  paymentDetailApi: PaymentDetailApi,
): PaymentDetailRepository {
  return {
    async getDetailOrder(id: string) {
      const res = await paymentDetailApi.getDetailOrder(id);
      return res.data;
    },
  };
}
