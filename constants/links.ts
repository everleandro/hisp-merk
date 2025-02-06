import Icons from "~/constants/icons";
const Home = { icon: Icons.store, title: "Home", to: "/" };
const Discover = { icon: Icons.magnify, title: "Discover", to: "/discover" };
const MyOrders = { icon: Icons.orders, title: "Pedidos", to: "/orders" };
const Favorite = { icon: Icons.fav, title: "Favoritos", to: "/favorites" };
const Profile = { icon: Icons.profile, title: "Profile", to: "/profile" };
const Setting = { icon: Icons.setting, title: "Setting", to: "/setting" };
const Support = { icon: Icons.support, title: "Support", to: "/support" };
const AboutUs = { icon: Icons.aboutUs, title: "About Us", to: "/about Us" };

export const OTHERS_LINKS = [Setting, AboutUs, Support];
export const MOBILE_LINKS = [Home, Discover, MyOrders, Profile];
export const MOBILE_DRAWER_LINKS = [Home, Discover, MyOrders, Profile];
