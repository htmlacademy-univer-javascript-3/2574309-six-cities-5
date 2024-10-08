import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { PlaceList } from '@/widgets/home/PlaceList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App PlaceList={PlaceList} />
  </React.StrictMode>
);
