export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS_LEFT: NavLink[] = [
  { label: "The brief", href: "#" },
  { label: "Renders", href: "#" },
  { label: "Brochure", href: "#" },
];

export const NAV_LINKS_RIGHT: NavLink[] = [
  { label: "Ezplore | Finished", href: "#" },
  { label: "Animation", href: "#" },
];

export const NAV_LINKS: NavLink[] = [...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT];
