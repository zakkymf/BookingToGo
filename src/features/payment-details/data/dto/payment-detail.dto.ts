import {
  ChosenHotel,
  Header,
} from '@features/payment-details/domain/entities/payment-details';

export interface DetailOrderResponse {
  objectId: string;
  createdAt: string;
  updatedAt: string;
  chosen_hotel: {
    data: {
      get_chosen_hotel: ChosenHotel;
    };
    header: Header;
  };
}
