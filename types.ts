import React from 'react';

export enum Role {
  USER = 'User',
  SHOPKEEPER = 'Shopkeeper',
  DISTRIBUTOR = 'Distributor',
  MUNICIPAL = 'Municipal',
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
  MUNICIPAL = 'municipal',
  FLEET_MANAGEMENT = 'fleet_management',
  COMPLAINT_MANAGEMENT = 'complaint_management',
  ANALYTICS = 'analytics',
  ROUTE_PLANNING = 'route_planning',
  MRF_MANAGEMENT = 'mrf_management',
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

// New Interfaces for Municipal Features
export interface Vehicle {
  id: string;
  name: string;
  driver: string;
  status: 'On Route' | 'Idle' | 'Maintenance';
  fuel: number; // percentage
  lat: number;
  lng: number;
}

export interface Complaint {
  id: string;
  user: string;
  issue: string;
  status: 'New' | 'In Progress' | 'Resolved';
  timestamp: string;
}

export interface MRFItem {
    id: string;
    material: string;
    quantity: number; // in kg
    lastUpdated: string;
}
