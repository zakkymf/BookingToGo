export interface PaymentDetailStore {
  currentStep: number;
  actions: PaymentDetailActions;
}

export interface PaymentDetailActions {
  setCurrentStep: (value: number) => void;
}
