export interface Brand {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  purpose: string;
  description: string;
  colors: { name: string; hex: string }[];
  fonts: { heading: string; body: string; wordmark?: string };
  logo: string;
  logoMeaning: string;
  tags: string[];
  artDirection: string;
}
