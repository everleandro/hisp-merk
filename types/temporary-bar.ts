export interface BarButton {
  text?: string;
  icon?: string;
  action: () => void;
}
export interface TemporaryBar {
  title?: string;
  leftButtonList?: Array<BarButton>;
  rigthButtonList?: Array<BarButton>;
}
