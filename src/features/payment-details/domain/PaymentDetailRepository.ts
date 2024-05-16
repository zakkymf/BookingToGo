import {DetailOrderResponse} from '../data/dto/payment-detail.dto';

export interface PaymentDetailRepository {
  getDetailOrder: (id: string) => Promise<DetailOrderResponse>;
}
