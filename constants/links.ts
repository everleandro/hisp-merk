import Icons from "~/constants/icons";
const Home = { icon: Icons.store, title: "Home", to: "/" };
const Discover = { icon: Icons.search, title: "Discover", to: "/discover" };
const MyOrders = { icon: Icons.orders, title: "Pedidos", to: "/orders" };
const Favorite = { icon: Icons.fav, title: "Favoritos", to: "/favorites" };
const Profile = { icon: Icons.profile, title: "Profile", to: "/Profile" };
const Setting = { icon: Icons.profile, title: "Setting", to: "/Setting" };
const Support = { icon: Icons.profile, title: "Support", to: "/Support" };
const AboutUs = { icon: Icons.message, title: "About Us", to: "/About Us" };

export const OTHERS_LINKS = [Setting, AboutUs, Support];
export const MOBILE_LINKS = [Home, Favorite, MyOrders, Profile];
export const MOBILE_DRAWER_LINKS = [Home, Discover, MyOrders, Profile];
