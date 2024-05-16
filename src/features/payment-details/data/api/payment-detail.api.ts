import {AxiosInstance, AxiosResponse} from 'axios';

import {Endpoint} from '@constants';
import {DetailOrderResponse} from '../dto/payment-detail.dto';

export interface PaymentDetailApi {
  getDetailOrder: (id: string) => Promise<AxiosResponse<any>>;
}

export function paymentDetailApiImpl(
  httpClient: AxiosInstance,
): PaymentDetailApi {
  return {
    getDetailOrder: (id: string) => {
      return httpClient.get<DetailOrderResponse>(`${Endpoint.GET_HOTEL}/${id}`);
    },
  };
}
