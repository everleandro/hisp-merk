import Icon from "@/constants/icons";
export enum AppBarType {
  GO_BACK = "go-back",
  DEFAULT = "default",
  CUSTOM = "custom",
}
export interface BarButton {
  text?: boolean;
  icon?: string;
  color?: string;
  small?: boolean;
  to?: string;
  btnClass?: [string] | string;
  action?: () => void;
}
export interface AppBar {
  title?: string;
  logo?: boolean;
  barClass?: string[] | string;
  leftButtonList?: Array<BarButton>;
  rigthButtonList?: Array<BarButton>;
}
const defaultBarButton: BarButton = {
  text: true,
  color: "white",
  small: true,
  // btnClass: ["btn--transparent"],
};

export class BarButton {
  constructor({
    text,
    icon,
    color,
    small,
    to,
    btnClass,
    action,
  }: BarButton = defaultBarButton) {
    this.text = typeof text === "boolean" ? text : defaultBarButton.text;
    this.icon = icon;
    this.color = color || "white";
    this.small = typeof small === "boolean" ? small : defaultBarButton.small;
    this.to = to;
    this.btnClass = btnClass || defaultBarButton.btnClass;
    this.action = action;
  }
}

const defaultAppBar: AppBar = {
  barClass: "app-bar--blured primary",
  leftButtonList: <Array<BarButton>>[
    new BarButton({
      icon: Icon.menu,
    }),
  ],
  rigthButtonList: <Array<BarButton>>[
    new BarButton({
      icon: Icon.cart,
      to: "/cart",
    }),
    new BarButton({
      icon: Icon.bell,
      to: "/cart",
    }),
  ],
};

export class AppBar {
  constructor({
    title,
    leftButtonList,
    rigthButtonList,
    barClass,
  }: AppBar = defaultAppBar) {
    this.title = title;
    this.barClass = barClass || defaultAppBar.barClass;
    this.logo = title ? false : true;
    this.leftButtonList = leftButtonList || defaultAppBar.leftButtonList;
    this.rigthButtonList = rigthButtonList || defaultAppBar.rigthButtonList;
  }
}
