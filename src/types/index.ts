export interface TileItem {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly imageSrc: string;
  readonly thumbnailSrc: string;
  readonly patternColor: string;
  quantity: number;
}
export type PaymentMethod =
  | 'credit_card'
  | 'paypal'
  | 'apple_pay'
  | 'bank_transfer';
export type CardBrand = 'visa' | 'mastercard' | null;
export type ValidationErrors = Partial<Record<string, string>>;
export interface CheckoutFormData {
  customerName: string;
  phone: string;
  email: string;
  shippingAddress: string;
  projectNotes: string;
  paymentMethod: PaymentMethod;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
}
export type DesignGridCell = string | null;
export type DesignGrid = DesignGridCell[][];
export interface PaletteTile {
  readonly id: string;
  readonly name: string;
  readonly imageSrc: string;
}
