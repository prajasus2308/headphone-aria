
export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Moment {
  id: string;
  image: string;
  title?: string;
  description?: string;
  link?: string;
  gridSpan: string;
}
