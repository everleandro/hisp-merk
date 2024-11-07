import type { ProductData } from "@/types";
import { ProductCategory } from "@/types";
export interface BarSetting {
  title?: string | undefined;
  logo?: boolean;
  backButton?: boolean;
  menuButton?: boolean;
  barClass?: string;
  bellButton?: boolean;
}
export const useProduct = defineStore("product", {
  state: () => ({
    list: <ProductData[]>[
      {
        id: 1,
        name: "Apple iPhone 12 Pro",
        description: "Apple iPhone 12 Pro 128GB",
        category: ProductCategory.Food,
        price: 999,
        stock: 10,
        images: [
          "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        ],
        rating: 4.5,
        onSale: true,
        dateAdded: new Date(),
        brand: "Apple",
        origin: "USA",
      },
      {
        id: 2,
        name: "Apple iPhone 12 Pro",
        description: "Apple iPhone 12 Pro 128GB",
        category: ProductCategory.Food,
        price: 999,
        stock: 10,
        images: [
          "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        ],
        rating: 4.5,
        onSale: true,
        dateAdded: new Date(),
        brand: "Apple",
        origin: "USA",
      },
      {
        id: 3,
        name: "Apple iPhone 12 Pro",
        description: "Apple iPhone 12 Pro 128GB",
        category: ProductCategory.Food,
        price: 999,
        stock: 10,
        images: [
          "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        ],
        rating: 4.5,
        onSale: true,
        dateAdded: new Date(),
        brand: "Apple",
        origin: "USA",
      },
      {
        id: 4,
        name: "Apple iPhone 12 Pro",
        description: "Apple iPhone 12 Pro 128GB",
        category: ProductCategory.Food,
        price: 999,
        stock: 10,
        images: [
          "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        ],
        rating: 4.5,
        onSale: true,
        dateAdded: new Date(),
        brand: "Apple",
        origin: "USA",
      },
    ],
  }),

  getters: {
    getList: (state) => {
      return {
        title: state.list,
      };
    },
  },

  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useApp, import.meta.hot));
}
