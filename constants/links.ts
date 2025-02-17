import Icons from "~/constants/icons";
const Home = { icon: Icons.store, title: "Home", to: "/home" };
const Discover = { icon: Icons.magnify, title: "Discover", to: "/discover" };
const MyOrders = { icon: Icons.orders, title: "Pedidos", to: "/order" };
const MyCart = { icon: Icons.cart, title: "Cart", to: "/cart" };
const Favorite = { icon: Icons.fav, title: "Favoritos", to: "/favorites" };
const Profile = { icon: Icons.profile, title: "Profile", to: "/profile" };
const Setting = { icon: Icons.setting, title: "Setting", to: "/setting" };
const Support = { icon: Icons.support, title: "Support", to: "/support" };
const AboutUs = { icon: Icons.aboutUs, title: "About Us", to: "/about-us" };

export const OTHERS_LINKS = [Setting, AboutUs];
export const EXTRA_LINKS = { Support };
export const MOBILE_LINKS = [Home, Discover, MyCart, Profile];
export const MOBILE_DRAWER_LINKS = [Home, Discover, MyOrders, Profile];
