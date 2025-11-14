
import React, { useState, useRef, useContext } from 'react';
import { GoogleGenAI } from '@google/genai';
import Header from '../components/Header';
import { AppContext, AppScreen } from '../types';

const ImageAnalysisScreen: React.FC = () => {
    const context = useContext(AppContext);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const blobToBase64 = (blob: Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    resolve(reader.result.split(',')[1]);
                } else {
                    reject(new Error("Failed to convert blob to base64"));
                }
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
            setAnalysisResult('');
            setError(null);
        }
    };

    const handleAnalyze = async () => {
        if (!imageFile) return;

        setLoading(true);
        setAnalysisResult('');
        setError(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const base64Data = await blobToBase64(imageFile);
            
            const imagePart = {
                inlineData: {
                    mimeType: imageFile.type,
                    data: base64Data,
                },
            };

            const textPart = {
                text: "Analyze this image. Is there a recyclable item in it? If yes, what is it, what material is it made of (e.g., PET, HDPE), and what would be its estimated EcoCoin value? Provide the answer in a clear, concise format using markdown."
            };

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: { parts: [imagePart, textPart] },
            });

            setAnalysisResult(response.text);

        } catch (err) {
            console.error("Error analyzing image:", err);
            setError("Sorry, something went wrong while analyzing the image. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="animate-slide-in-up">
            <Header title="Analyze Recyclable" backScreen={AppScreen.USER} />
            
            <div className="flex flex-col items-center space-y-6">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                />

                <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full h-64 bg-dark-secondary rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-dark-tertiary cursor-pointer transition-colors hover:border-accent-green"
                >
                    {imagePreview ? (
                        <img src={imagePreview} alt="Selected item" className="w-full h-full object-contain rounded-2xl p-2" />
                    ) : (
                        <>
                           <UploadIcon />
                            <p className="mt-2 text-light-secondary">Tap to select an image</p>
                        </>
                    )}
                </div>

                {imageFile && (
                    <button 
                        onClick={handleAnalyze} 
                        disabled={loading}
                        className="w-full py-4 text-lg font-bold text-dark-primary transition-transform transform bg-accent-green rounded-xl shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-green/50 disabled:bg-dark-tertiary disabled:text-light-secondary disabled:cursor-not-allowed"
                    >
                        {loading ? 'Analyzing...' : 'Analyze Item'}
                    </button>
                )}
                
                {loading && (
                    <div className="w-full bg-dark-secondary p-6 rounded-2xl text-center border border-dark-tertiary">
                        <p className="text-light-secondary">Gemini is thinking...</p>
                    </div>
                )}


                {error && <div className="w-full bg-red-500/10 text-red-400 p-4 rounded-xl text-center">{error}</div>}

                {analysisResult && (
                    <div className="w-full bg-dark-secondary p-6 rounded-2xl animate-fade-in border border-dark-tertiary">
                        <h3 className="text-xl font-bold text-accent-green mb-3">Analysis Result</h3>
                        <div className="text-light-secondary whitespace-pre-wrap prose prose-invert prose-p:text-light-secondary">{analysisResult}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-dark-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
)

export default ImageAnalysisScreen;
