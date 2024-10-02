import { PlaceCard } from '@/entities/home/PlaceCard';
import { placeListData } from '../lib/data';

export const PlaceList: React.FC = () => (
  <div className="cities__places-list places__list tabs__content">
    {placeListData.map((item) => (
      <PlaceCard key={item.id} {...item} />
    ))}
  </div>
);
