import {BaseUseCase} from '@base';
import {PaymentDetailRepository} from '../PaymentDetailRepository';
import {DetailOrderResponse} from '@features/payment-details/data/dto/payment-detail.dto';

export function getDetailOrderUseCase(
  repo: PaymentDetailRepository,
): BaseUseCase<any, Promise<DetailOrderResponse>> {
  return {
    execute: (id: string) => repo.getDetailOrder(id),
  };
}
