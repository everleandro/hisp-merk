import Icons from "~/constants/icons";
const Favorite = { icon: Icons.fav, title: "Favoritos", to: "/favorites" };
const Search = { icon: Icons.search, title: "Busqueda", to: "/" };
const Home = { icon: Icons.store, title: "Home", to: "/" };
const Orders = { icon: Icons.orders, title: "Pedidos", to: "/orders" };
const Account = { icon: Icons.profile, title: "Perfil", to: "/profile" };

export const DESKTOP_LINKS = [Favorite, Search, Account, Orders];
export const MOBILE_LINKS = [Home, Favorite, Orders, Account];
export const MOBILE_DRAWER_LINKS = [Favorite];
