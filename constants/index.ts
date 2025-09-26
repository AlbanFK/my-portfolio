import type { MenuItem } from "~/interfaces/menu";

export const menu: MenuItem[] = [
  {
    name: "work",
    to: "work",
  },
  {
    name: "skills",
    to: "skills",
  },
  {
    name: "about",
    to: "about",
  },
  {
    name: "blog",
    to: "blog",
    hide: true,
  },
  {
    name: "services",
    to: "services",
    hide: true,
  },
  {
    name: "contact",
    to: "contact",
  },
];
