/** Core tile item in the shopping cart */
export interface TileItem {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly imageSrc: string;
  readonly thumbnailSrc: string;
  readonly patternColor: string;
  quantity: number;
}

/** Possible payment methods */
export type PaymentMethod =
  | 'credit_card'
  | 'paypal'
  | 'apple_pay'
  | 'bank_transfer';

/** Card brand detected from number */
export type CardBrand = 'visa' | 'mastercard' | null;

/** Form validation errors keyed by field name */
export type ValidationErrors = Partial<Record<string, string>>;

/** Checkout form field values */
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

/** A single cell in the 7×7 design grid — stores a tile id or null */
export type DesignGridCell = string | null;

/** 7×7 grid matrix */
export type DesignGrid = DesignGridCell[][];

/** Palette tile for the design tool (superset of cart tiles + extras) */
export interface PaletteTile {
  readonly id: string;
  readonly name: string;
  readonly imageSrc: string;
}
