import paymentDetailContainer from '../di/paymentDetailContainer';
import {
  usePaymentDetailActions,
  usePaymentDetailStore,
} from './store/usePaymentDetailStore';

export function usePaymentDetail() {
  const {currentStep, orderDetail, visitor, selectedOrder} =
    usePaymentDetailStore();
  const {setCurrentStep, setOrderDetail, setVisitor, setSelectedOrder} =
    usePaymentDetailActions();

  const {getDetailOrderUseCase} = paymentDetailContainer.usecases();

  const getPaymentDetail = async () => {
    try {
      const res = await getDetailOrderUseCase.execute('bVonXoSUHK');
      setOrderDetail(res.chosen_hotel.data.get_chosen_hotel);
    } catch (error) {
      console.log({error});
    }
  };

  return {
    currentStep,
    orderDetail,
    visitor,
    selectedOrder,
    setCurrentStep,
    setVisitor,
    setSelectedOrder,
    getPaymentDetail,
  };
}
