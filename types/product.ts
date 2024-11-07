export enum ProductCategory {
  Clothing = "clothing",
  Books = "books",
  Crafts = "crafts",
  Food = "Food",
  Drinks = "drinks",
  Beauty = "beauty",
  Furniture = "furniture",
}

export interface ProductData {
  id: number;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  stock: number;
  images: string[];
  rating?: number;
  onSale?: boolean;
  dateAdded?: Date;
  brand?: string;
  origin?: string;
}

export class Product {
  id: number;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  stock: number;
  images: string[];
  rating: number;
  onSale: boolean;
  dateAdded: Date;
  brand?: string;
  origin?: string;

  constructor(data: ProductData) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.category = data.category;
    this.price = data.price;
    this.stock = data.stock;
    this.images = data.images;
    this.rating = data.rating ?? 0;
    this.onSale = data.onSale ?? false;
    this.dateAdded = data.dateAdded ?? new Date();
    this.brand = data.brand;
    this.origin = data.origin;
  }

  applyDiscount(percentage: number): number {
    if (this.onSale) {
      this.price = this.price - (this.price * percentage) / 100;
    }
    return this.price;
  }

  updateStock(quantity: number): void {
    this.stock += quantity;
  }
}
