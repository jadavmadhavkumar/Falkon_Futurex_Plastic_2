import React, { useState, useCallback } from 'react';
import { AppContext, AppScreen } from './types';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import ShopkeeperScreen from './screens/ShopkeeperScreen';
import DistributorScreen from './screens/DistributorScreen';
import RecyclableItemsScreen from './screens/PlasticItemsScreen';
import MapScreen from './screens/MapScreen';
import ChatbotScreen from './screens/ChatbotScreen';
import ImageAnalysisScreen from './screens/ImageAnalysisScreen';
import ShopkeeperAccountingScreen from './screens/ShopkeeperAccountingScreen';
import MunicipalScreen from './screens/MunicipalScreen';
import FleetManagementScreen from './screens/FleetManagementScreen';
import ComplaintManagementScreen from './screens/ComplaintManagementScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import RoutePlanningScreen from './screens/RoutePlanningScreen';
import MRFManagementScreen from './screens/MRFManagementScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.HOME);
  const [userCoins, setUserCoins] = useState<number>(125);
  const [shopItemsCollected, setShopItemsCollected] = useState<number>(42);
  const [shopCoinsAwarded, setShopCoinsAwarded] = useState<number>(530);

  const navigate = useCallback((screen: AppScreen) => {
    setCurrentScreen(screen);
  }, []);

  const addCoins = useCallback((amount: number) => {
    setUserCoins(prevCoins => prevCoins + amount);
  }, []);

  const addItems = useCallback((count: number) => {
    setShopItemsCollected(prevCount => prevCount + count);
  }, []);
  
  const awardCoins = useCallback((amount: number) => {
    setShopCoinsAwarded(prev => prev + amount);
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.HOME:
        return <HomeScreen />;
      case AppScreen.USER:
        return <UserScreen />;
      case AppScreen.SHOPKEEPER:
        return <ShopkeeperScreen />;
      case AppScreen.DISTRIBUTOR:
        return <DistributorScreen />;
      case AppScreen.RECYCLABLE_ITEMS:
        return <RecyclableItemsScreen />;
      case AppScreen.BIN_MAP:
        return <MapScreen />;
      case AppScreen.CHATBOT:
        return <ChatbotScreen />;
      case AppScreen.IMAGE_ANALYSIS:
        return <ImageAnalysisScreen />;
      case AppScreen.SHOPKEEPER_ACCOUNTING:
        return <ShopkeeperAccountingScreen />;
      case AppScreen.MUNICIPAL:
        return <MunicipalScreen />;
      case AppScreen.FLEET_MANAGEMENT:
        return <FleetManagementScreen />;
      case AppScreen.COMPLAINT_MANAGEMENT:
        return <ComplaintManagementScreen />;
      case AppScreen.ANALYTICS:
        return <AnalyticsScreen />;
      case AppScreen.ROUTE_PLANNING:
        return <RoutePlanningScreen />;
      case AppScreen.MRF_MANAGEMENT:
        return <MRFManagementScreen />;
      default:
        return <HomeScreen />;
    }
  };
  
  const appContextValue = {
    currentScreen,
    userCoins,
    shopItemsCollected,
    shopCoinsAwarded,

    navigate,
    addCoins,
    addItems,
    awardCoins,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <div className="min-h-screen bg-dark-primary text-light-primary font-sans">
        <main className="container mx-auto p-4 max-w-md">
          {renderScreen()}
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;