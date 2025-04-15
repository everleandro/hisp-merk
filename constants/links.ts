import Icons from "~/constants/icons";
import type { Link } from "~/types/link";
const Home = { icon: Icons.store, title: "Home", to: "/home", public: true };
const Discover: Link = {
  icon: Icons.magnify,
  title: "Discover",
  to: "/discover",
  public: true,
};
const MyOrders: Link = {
  icon: Icons.orders,
  title: "Pedidos",
  to: "/order",
  public: false,
};
const MyCart: Link = {
  icon: Icons.cart,
  title: "Cart",
  to: "/cart",
  public: false,
};
const Favorite: Link = {
  icon: Icons.fav,
  title: "Favoritos",
  to: "/favorites",
  public: false,
};
const Profile: Link = {
  icon: Icons.profile,
  title: "Profile",
  to: "/profile",
  public: false,
};
const Setting: Link = {
  icon: Icons.setting,
  title: "Setting",
  to: "/setting",
  public: false,
};
const Support: Link = {
  icon: Icons.support,
  title: "Support",
  to: "/support",
  public: false,
};
const AboutUs: Link = {
  icon: Icons.aboutUs,
  title: "About Us",
  to: "/about-us",
  public: false,
};

export const OTHERS_LINKS = [Setting, AboutUs];
// export const EXTRA_LINKS = { Support, MyCart };
export const EXTRA_LINKS = { MyCart };
export const MOBILE_LINKS = [Home, Discover, MyOrders, Profile];
export const MOBILE_DRAWER_LINKS = [Home, Discover, MyOrders, Profile];
export const PUBLIC_ROUTES = [
  ...OTHERS_LINKS,
  MyCart,
  ...MOBILE_LINKS,
  ...MOBILE_DRAWER_LINKS,
]
  .flat() // Asegura que todos los elementos sean individuales
  .filter((link: Link) => link.public)
  .map(({ to }) => to);
