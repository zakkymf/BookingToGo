export interface Visitor {
  title: string;
  name: string;
}

export interface ChosenHotelDetail {
  zip: string;
  star: number;
  phone: string;
  images: {url: string; title: string; thumbnail: string}[];
  address: string;
  latitude: number;
  longitude: number;
  facilities: string[];
  hotel_name: string;
  descriptions: {title: string; description: string}[];
  region_hotel: string;
  is_recommended: boolean;
}

export interface CxlPolicy {
  cxl_fee: number;
  cxl_remark: string;
  cxl_end_date: string;
  cxl_start_date: string;
}

export interface PriceDetail {
  total: number;
  currency: string;
  origin_total: number;
  corporate_fee: number;
  discount_price: number;
}

export interface ChosenHotelPrices {
  cxl_policies: CxlPolicy[];
  precode_book: string;
  price_detail: PriceDetail;
  is_refundable: boolean;
  discount_description: string;
  important_informations: {info: string}[];
}

export interface ChosenHotelParams {
  check_in: string;
  check_out: string;
  hotel_code: string;
  hotel_name: string;
  total_room: number;
  guest_adult: number;
  guest_infant: number;
  guest_children: number;
  guest_children_ages: number[];
}

export interface ChosenHotelRoom {
  meal: string;
  region: string;
  meal_code: string;
  room_name: string;
  sply_code: string;
  avail_sply: string;
  hotel_sply: string;
  room_grade: string;
  vendor_code: string;
  hotel_room_type_selected: string;
}

export interface ChosenHotel {
  chosen_hotel_room: ChosenHotelRoom;
  chosen_hotel_detail: ChosenHotelDetail;
  chosen_hotel_params: ChosenHotelParams;
  chosen_hotel_prices: ChosenHotelPrices;
  chosen_hotel_expired: string;
}

export interface Header {
  reason: string;
  messages: any[];
  error_code: string;
  process_time: number;
}

export interface PaymentDetailStore {
  currentStep: number;
  visitor: Visitor[];
  selectedOrder: string;
  orderDetail: ChosenHotel | null;
  actions: PaymentDetailActions;
}

export interface PaymentDetailActions {
  setCurrentStep: (value: number) => void;
  setOrderDetail: (data: ChosenHotel) => void;
  setSelectedOrder: (option: string) => void;
  setVisitor: (user: Visitor[]) => void;
}
