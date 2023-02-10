export interface IListNavigationProps {
  name: string;
  path: string;
}

export const ListNavigationData: IListNavigationProps[] = [
  {
    name: "home.",
    path: "/",
  },
  {
    name: "about.",
    path: "/about",
  },
  {
    name: "posts.",
    path: "/posts",
  },
  {
    name: "showcase.",
    path: "/showcase",
  },
  {
    name: "misc.",
    path: "/misc",
  },
];
