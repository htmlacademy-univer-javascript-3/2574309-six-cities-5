import { HomePage } from '@/pages/home';

interface AppPropsI {
  PlaceList: React.ElementType;
}

export const App: React.FC<AppPropsI> = ({ PlaceList }: AppPropsI) => (
  <HomePage PlaceList={PlaceList} />
);
