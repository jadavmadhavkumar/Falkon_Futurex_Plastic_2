
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Header from '../components/Header';
import { AppScreen } from '../types';

const MapScreen: React.FC = () => {
  const [query, setQuery] = useState('recycling centers');
  const [searchResults, setSearchResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{ latitude: number, longitude: number } | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        setError('Could not get your location. Please enable location services.');
        console.error(err);
      }
    );
  }, []);

  const handleSearch = async () => {
    if (!query.trim() || !userLocation) {
        setError(!userLocation ? 'Please enable location to search for nearby places.' : 'Please enter a search query.');
        return;
    }

    setLoading(true);
    setError(null);
    setSearchResults(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Find ${query} near me.`,
        config: {
          tools: [{ googleMaps: {} }],
          toolConfig: {
            retrievalConfig: {
              latLng: userLocation
            }
          }
        },
      });

      setSearchResults(response);

    } catch (err) {
      console.error("Error with Google Maps grounding search:", err);
      setError("Sorry, something went wrong with the search. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-slide-in-up">
      <Header title="Find Nearest Bin" backScreen={AppScreen.USER} />
      
      <div className="mb-6">
        <div className="flex gap-2">
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., plastic bottle recycling"
                className="flex-1 bg-dark-secondary text-light-primary px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue border border-dark-tertiary"
            />
            <button 
                onClick={handleSearch} 
                disabled={loading || !userLocation}
                className="bg-accent-blue text-white font-bold py-3 px-5 rounded-xl hover:bg-blue-400 transition-colors disabled:bg-dark-tertiary disabled:cursor-not-allowed"
            >
                {loading ? '...' : 'Go'}
            </button>
        </div>
        {!userLocation && !error && <p className="text-xs text-center text-accent-yellow mt-2">Getting your location...</p>}
      </div>

      <div className="relative w-full h-56 bg-dark-secondary rounded-2xl overflow-hidden shadow-2xl mb-6 border border-dark-tertiary">
        <img
          src="https://www.mapbox.com/images/demos/dark-static.png"
          alt="Map of bins"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
             <MapPinIcon />
        </div>
      </div>
      
      <div className="space-y-4">
        {error && <div className="bg-red-500/10 text-red-400 p-4 rounded-xl text-center">{error}</div>}

        {loading && (
            <div className="text-center p-4">
                <p className="text-light-secondary">Searching with Gemini...</p>
            </div>
        )}

        {searchResults && (
            <div className="bg-dark-secondary p-6 rounded-2xl animate-fade-in border border-dark-tertiary">
                <h3 className="text-xl font-bold text-accent-green mb-3">Search Results</h3>
                <div className="text-light-secondary whitespace-pre-wrap mb-4 prose prose-invert prose-p:text-light-secondary">{searchResults.text}</div>

                {searchResults.candidates?.[0]?.groundingMetadata?.groundingChunks?.length > 0 && (
                     <div>
                        <h4 className="font-semibold mb-2 text-light-primary">Sources from Google Maps:</h4>
                        <ul className="list-disc list-inside space-y-2">
                        {searchResults.candidates[0].groundingMetadata.groundingChunks.map((chunk: any, index: number) => (
                            chunk.maps && (
                                <li key={index}>
                                    <a href={chunk.maps.uri} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                                        {chunk.maps.title}
                                    </a>
                                </li>
                            )
                        ))}
                        </ul>
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent-green drop-shadow-lg animate-pulse" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-5.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);


export default MapScreen;
