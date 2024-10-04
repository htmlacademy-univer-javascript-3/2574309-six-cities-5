import { useEffect, useState } from 'react';

import { getOffersMockData, OfferI } from '@/shared/api';
import { PlaceCard } from '@/entities/PlaceCard';
import { useParams } from 'react-router';

export interface PlaceListProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rootBEMClassName?: string;
  size?: 'small' | 'full';
}

export const PlaceList: React.FC<PlaceListProps> = ({rootBEMClassName, size, ...props}: PlaceListProps) => {
  const [offers, setOffers] = useState<OfferI[]>([]);

  const {id} = useParams();

  useEffect(() => {
    const limit = size === 'small' ? 3 : undefined;
    setOffers(getOffersMockData({limit}).filter((item) => id ? item.id !== +id : true));
  }, [size, id]);

  return (
    <div {...props}>
      {offers.map((item) => (
        <PlaceCard key={item.id} rootBEMClassName={rootBEMClassName} {...item} />
      ))}
    </div>
  );
};
