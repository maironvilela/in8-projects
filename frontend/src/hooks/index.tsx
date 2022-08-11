import React from 'react';
import { MenuToggleProvider } from './menu-toggle';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <MenuToggleProvider>{children} </MenuToggleProvider>
);
