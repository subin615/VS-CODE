export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface ProductDetails {
  imageUrl: string;
  imageAlt: string;
  beds: number;
  baths: number;
  title: string;
  formattedPrice: string;
  reviewCount: number;
  rating: number;
}
