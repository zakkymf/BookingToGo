import {httpClient} from '@libraries';

import {paymentDetailApiImpl} from '../data/api/payment-detail.api';
import {PaymentDetailImpl} from '../data/PaymentDetailRepositoryImpl';
import {getDetailOrderUseCase} from '../domain/usecases/getDetailOrderUseCase';

function apis() {
  return {
    paymentDetailApi: () => paymentDetailApiImpl(httpClient),
  };
}

function repositories() {
  return {
    paymentDetailRepositories: () =>
      PaymentDetailImpl(apis().paymentDetailApi()),
  };
}

function usecases() {
  return {
    getDetailOrderUseCase: getDetailOrderUseCase(
      repositories().paymentDetailRepositories(),
    ),
  };
}

export default {repositories, usecases};
