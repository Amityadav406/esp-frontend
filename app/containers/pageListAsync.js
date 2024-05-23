import React from 'react';
import loadable from 'Utils/loadable';
import { SyncLoading } from 'Components';

export const NotFound = loadable(() => import('./NotFound'), {
  fallback: <SyncLoading />,
});
export const Home = loadable(() => import('./Home'), {
  fallback: <SyncLoading />,
});

export const PokemonDetail = loadable(() => import('./PokemonDetail'), {
  fallback: <SyncLoading />,
});

export const BerryDetail = loadable(() => import('./BerryDetail'), {
  fallback: <SyncLoading />,
});

export const ItemDetail = loadable(() => import('./ItemDetail'), {
  fallback: <SyncLoading />,
});

export const BerryList = loadable(() => import('./BerryList'), {
  fallback: <SyncLoading />,
});

export const ItemList = loadable(() => import('./ItemList'), {
  fallback: <SyncLoading />,
});
