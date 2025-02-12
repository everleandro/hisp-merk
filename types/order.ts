export interface OrderItemInterface {
  amount: string | number;
  name: string;
  price: string | number;
}
export interface OrderInterface {
  number: number | string;
  tracking_number: string;
  delivery_address: string;
}
