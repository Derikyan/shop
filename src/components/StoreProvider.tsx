'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import type { ReactNode } from 'react';

interface StoreProviderProps {
  readonly children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
