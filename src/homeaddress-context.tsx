import React, { createContext, useContext } from 'react';

import { HomeAddress } from './common';

interface HomeAddressContextProps {
  homeAddress: HomeAddress;
}

const HomeAddressContext = createContext<HomeAddressContextProps | undefined>(undefined);

export const HomeAddressProvider = ({ homeAddress, children }) => {
  return (
    <HomeAddressContext.Provider value={{ homeAddress }}>{children}</HomeAddressContext.Provider>
  );
};

export const useHomeAddress = () => {
  const context = useContext(HomeAddressContext);
  if (!context) {
    throw new Error('useHomeAddress must be used within a HomeAddressProvider');
  }
  return context;
};
