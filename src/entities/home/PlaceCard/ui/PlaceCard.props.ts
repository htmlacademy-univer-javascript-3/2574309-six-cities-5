export interface PlaceCardProps {
  id: React.Key;
  premium?: boolean;
  imgSrc?: string;
  price: number;
  rating: 1 | 2 | 3 | 4 | 5;
  description?: string;
}
