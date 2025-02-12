export interface IconConfig {
  name: string;
  paths: number;
}

const AppIcon: Record<string, IconConfig> = {
  beer: { name: "beer", paths: 8 },
  breckfast: { name: "breakfast", paths: 8 },
  beauty: { name: "beauty", paths: 6 },
  fastFood: { name: "fast-food", paths: 20 },
  clothes: { name: "cloth", paths: 6 },
  drinks: { name: "drinks", paths: 11 },
  coffe: { name: "hot-drink", paths: 5 },
  home: { name: "home-1", paths: 4 },
  meat: { name: "steak", paths: 7 },
  pizza: { name: "pizza", paths: 16 },
};

export default AppIcon;
