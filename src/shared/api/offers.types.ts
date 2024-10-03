export interface Image {
  id: number;
  src: string;
}

export interface Host {
  name: string;
  status: string;
}

export interface Review {
  name: string;
  imgSrc: string;
  rating: number;
  text: string;
  date: string;
}

export interface Offer {
  id: number;
  images: Image[];
  premium: boolean;
  name: string;
  rating: number;
  entire: string;
  bedroomsCount: number;
  maxAdults: number;
  price: number;
  insideItems: string[];
  host: Host;
  offerText: string;
  reviews: Review[];
}
