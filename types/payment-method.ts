import type { IconPath } from "drocket";
export type PaymentMethod = {
  id: string | number;
  fee: string | number;
  text: string;
  icon: IconPath | Array<IconPath> | string;
  message: string;
};
