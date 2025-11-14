import React from 'react';

export enum Role {
  USER = 'User',
  SHOPKEEPER = 'Shopkeeper',
  DISTRIBUTOR = 'Distributor',
}

export enum AppScreen {
  HOME = 'home',
  USER = 'user',
  SHOPKEEPER = 'shopkeeper',
  DISTRIBUTOR = 'distributor',
  RECYCLABLE_ITEMS = 'recyclable_items',
  BIN_MAP = 'bin_map',
  CHATBOT = 'chatbot',
  IMAGE_ANALYSIS = 'image_analysis',
  SHOPKEEPER_ACCOUNTING = 'shopkeeper_accounting',
}

export interface RecyclableItem {
  id: string;
  name: string;
  code: string;
  imageUrl: string;
  coinValue: number;
}

export interface BinLocation {
  id: string;
  name: string;
  acceptedItems: string[];
  distance: string;
  lat: number;
  lng: number;
}

export interface Transaction {
  id: string;
  itemName: string;
  coinValue: number;
  timestamp: string;
}

export interface AppContextType {
  currentScreen: AppScreen;
  userCoins: number;
  shopItemsCollected: number;
  shopCoinsAwarded: number;
  navigate: (screen: AppScreen) => void;
  addCoins: (amount: number) => void;
  addItems: (count: number) => void;
  awardCoins: (amount: number) => void;
}

export const AppContext = React.createContext<AppContextType | null>(null);