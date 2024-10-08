export interface Image {
  id: number;
  src: string;
}

export interface Host {
  name: string;
  status: string;
  imgSrc: string;
}

export interface Review {
  id: number;
  name: string;
  imgSrc: string;
  rating: number;
  text: string;
  date: string;
}

export interface OfferI {
  id: number;
  images: Image[];
  premium: boolean;
  name: string;
  rating: number;
  entire: string;
  bedroomsCount: number;
  maxAdults: number;
  price: number;
  insideItems: number[];
  host: Host;
  offerText: string;
  reviews: Review[];
}

export interface InsideItemsRefbookI {
  id: number;
  name: string;
}
