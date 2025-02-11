export enum cardType {
  Visa = "Visa",
}
export interface CardBank {
  name: string;
  exipiration_date: string | Date;
  number: string;
  type: cardType;
  cvv?: string | number | undefined;
  alias?: string;
}
