import {
  usePaymentDetailActions,
  usePaymentDetailStore,
} from './store/usePaymentDetailStore';

export function usePaymentDetail() {
  const {currentStep} = usePaymentDetailStore();
  const {setCurrentStep} = usePaymentDetailActions();

  return {
    currentStep,
    setCurrentStep,
  };
}
