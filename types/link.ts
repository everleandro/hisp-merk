import type { IconPath } from "drocket";
// Type definition for a Link object
export type Link = {
  icon: IconPath | Array<IconPath> | string;
  title: string;
  to: string;
};
