import { PlaceCard } from '@/entities/PlaceCard';
import { offersMockData } from '@/shared/api';

export const PlaceList: React.FC = () => (
  <div className="cities__places-list places__list tabs__content">
    {offersMockData.map((item) => (
      <PlaceCard key={item.id} {...item} />
    ))}
  </div>
);
