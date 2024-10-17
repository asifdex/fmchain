interface HeaderLists {
  name: string,
  link?: string,
  islink: boolean, 
}

export const HeaderLists:HeaderLists[] = [
  {
    name: "Home",
    link: "/",
    islink: true,
  },
  {
    name: "Buy now",
    // link: "/buy",
    link: "/about",

    islink: true,
  },
  {
    name: "auction",
    link: "/auction",
    islink: true,
  },
  {
    name: "profile",
    link: "/profile",
    islink: true,
  },
  {
    name: "<ConnectBtn/>",
    islink: false,
  },
];
