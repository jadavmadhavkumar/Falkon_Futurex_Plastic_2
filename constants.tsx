import React from 'react';
import { Role, RecyclableItem, BinLocation, Transaction, Vehicle, Complaint, MRFItem } from './types';

export const ROLES = [
  {
    role: Role.USER,
    description: 'Scan items, earn coins, and find bins.',
    icon: <UserIcon />,
  },
  {
    role: Role.SHOPKEEPER,
    description: 'Award coins to users for recycling.',
    icon: <ShopIcon />,
  },
  {
    role: Role.DISTRIBUTOR,
    description: 'Manage products and track returns.',
    icon: <DistributorIcon />,
  },
  {
    role: Role.MUNICIPAL,
    description: 'Oversee waste management operations.',
    icon: <MunicipalIcon />,
  },
];

export const RECYCLABLE_ITEMS: RecyclableItem[] = [
  { id: '1', name: 'Plastic Bottle', code: 'PET-1', imageUrl: 'https://picsum.photos/seed/bottle/200', coinValue: 10 },
  { id: '2', name: 'Milk Jug', code: 'HDPE-2', imageUrl: 'https://picsum.photos/seed/jug/200', coinValue: 15 },
  { id: '3', name: 'Shampoo Bottle', code: 'PVC-3', imageUrl: 'https://picsum.photos/seed/shampoo/200', coinValue: 8 },
  { id: '4', name: 'Yogurt Cup', code: 'PP-5', imageUrl: 'https://picsum.photos/seed/yogurt/200', coinValue: 5 },
  { id: '5', name: 'Plastic Bag', code: 'LDPE-4', imageUrl: 'https://picsum.photos/seed/bag/200', coinValue: 2 },
  { id: '6', name: 'Disposable Cup', code: 'PS-6', imageUrl: 'https://picsum.photos/seed/cup/200', coinValue: 3 },
  { id: '7', name: 'Wine Bottle', code: 'GL-71', imageUrl: 'https://picsum.photos/seed/wine/200', coinValue: 20 },
  { id: '8', name: 'Beer Bottle', code: 'GL-72', imageUrl: 'https://picsum.photos/seed/beer/200', coinValue: 12 },
  { id: '9', name: 'Aluminum Can', code: 'ALU-41', imageUrl: 'https://picsum.photos/seed/can/200', coinValue: 7 },
  { id: '10', name: 'Juice Carton', code: 'C/PAP-84', imageUrl: 'https://picsum.photos/seed/juicebox/200', coinValue: 6 },
];

export const BIN_LOCATIONS: BinLocation[] = [
    { id: 'bin1', name: 'City Center Bin', acceptedItems: ['PET-1', 'HDPE-2'], distance: '50 meters', lat: 34.0522, lng: -118.2437 },
    { id: 'bin2', name: 'Green Park Station', acceptedItems: ['PET-1', 'PP-5', 'PS-6'], distance: '200 meters', lat: 34.055, lng: -118.245 },
    { id: 'bin3', name: 'Library Square Drop-off', acceptedItems: ['ALL'], distance: '500 meters', lat: 34.050, lng: -118.250 },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
    { id: 't1', itemName: 'Plastic Bottle', coinValue: 10, timestamp: '2 minutes ago' },
    { id: 't2', itemName: 'Aluminum Can', coinValue: 7, timestamp: '5 minutes ago' },
    { id: 't3', itemName: 'Milk Jug', coinValue: 15, timestamp: '1 hour ago' },
    { id: 't4', itemName: 'Plastic Bottle', coinValue: 10, timestamp: '3 hours ago' },
    { id: 't5', itemName: 'Wine Bottle', coinValue: 20, timestamp: 'Yesterday' },
];

export const MOCK_VEHICLES: Vehicle[] = [
    { id: 'v1', name: 'Truck-01', driver: 'John Doe', status: 'On Route', fuel: 85, lat: 34.0622, lng: -118.2537 },
    { id: 'v2', name: 'Truck-02', driver: 'Jane Smith', status: 'Idle', fuel: 60, lat: 34.045, lng: -118.235 },
    { id: 'v3', name: 'Truck-03', driver: 'Mike Ross', status: 'Maintenance', fuel: 15, lat: 34.058, lng: -118.250 },
    { id: 'v4', name: 'Truck-04', driver: 'Rachel Zane', status: 'On Route', fuel: 95, lat: 34.048, lng: -118.265 },
];

export const MOCK_COMPLAINTS: Complaint[] = [
    { id: 'c1', user: 'Alex Ray', issue: 'Missed pickup on Elm St.', status: 'New', timestamp: '2 hours ago' },
    { id: 'c2', user: 'Beth Ray', issue: 'Bin overflow at City Park.', status: 'In Progress', timestamp: '1 day ago' },
    { id: 'c3', user: 'Carl Ray', issue: 'Collection truck leaking oil.', status: 'Resolved', timestamp: '3 days ago' },
];

export const MOCK_MRF_INVENTORY: MRFItem[] = [
    { id: 'mrf1', material: 'PET Plastic', quantity: 1250, lastUpdated: 'Today, 9:00 AM' },
    { id: 'mrf2', material: 'HDPE Plastic', quantity: 800, lastUpdated: 'Today, 9:15 AM' },
    { id: 'mrf3', material: 'Aluminum', quantity: 2100, lastUpdated: 'Yesterday, 4:30 PM' },
    { id: 'mrf4', material: 'Glass', quantity: 3500, lastUpdated: 'Today, 8:30 AM' },
];


// SVG Icons
export function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

export function ShopIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}

export function DistributorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

export function MunicipalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-11h1m-1 4h1m-1 4h1" />
    </svg>
  );
}

export function TruckIcon({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M1-1-1-1" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 9h4l4 4v4h-2" />
        </svg>
    );
}

export function AlertIcon({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

export function ChartIcon({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    );
}

export function RouteIcon({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-4.5-8-11.5a8 8 0 1116 0c0 7-8 11.5-8 11.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a2 2 0 100-4 2 2 0 000 4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.5l3-3 4 4 4-4 3 3" />
        </svg>
    );
}
export function RecycleIcon({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728M5.636 5.636a9 9 0 0112.728 0M12 2v4m0 12v4M4.222 4.222l2.828 2.828m10.122 10.122l-2.828-2.828M2 12h4m12 0h4m-2.828-7.778l-2.828 2.828M7.05 16.95l-2.828 2.828" />
        </svg>
    );
}

export function CoinIcon({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.5 4.5a.5.5 0 00-1 0v1.551a3.5 3.5 0 00-2.44 2.44H3.5a.5.5 0 000 1h1.551a3.5 3.5 0 002.44 2.44V13.5a.5.5 0 001 0v-1.551a3.5 3.5 0 002.44-2.44H13.5a.5.5 0 000-1h-1.551a3.5 3.5 0 00-2.44-2.44V4.5z" />
        </svg>
    );
}

export function BackIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    );
}

export function CollectionIcon({ className = "h-10 w-10" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
    );
}

export function ChatIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    );
}

export function CameraIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

export function LedgerIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
    );
}