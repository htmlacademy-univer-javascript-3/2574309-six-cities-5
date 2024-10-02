import { Route, Routes } from 'react-router';

import { HomePage } from './home';
import { Login } from './login';
import { Favorites } from './favorites';
import { Offer } from './offer';

import { PrivateRoute } from '@/features/private-route';

export const AppRouter: React.FC = () => (
  <Routes>
    <Route path="*" element={<h1>Page not found</h1>} />
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/favorites" element={<PrivateRoute />}>
      <Route path="" element={<Favorites />} />
    </Route>
    <Route path="/offer/:id" element={<Offer />} />
  </Routes>
);
