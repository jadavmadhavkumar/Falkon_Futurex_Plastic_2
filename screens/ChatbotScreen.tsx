
import React, { useState, useRef, useEffect, useContext } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import Header from '../components/Header';
import { AppContext, AppScreen } from '../types';
import { CoinIcon } from '../constants';

const ChatbotScreen: React.FC = () => {
    const context = useContext(AppContext);
    const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        const chatInstance = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: "You are EcoBot, a friendly and helpful assistant for the EcoCoin Rewards app. You know all about recycling, sustainability, and how to use the app. Keep your answers concise, use markdown for formatting, and be encouraging.",
            }
        });
        setChat(chatInstance);
        setMessages([{role: 'model', text: "Hi! I'm EcoBot. How can I help you with your recycling questions today?"}])
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async () => {
        if (!input.trim() || !chat || loading) return;

        const userMessage = { role: 'user' as const, text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const result = await chat.sendMessageStream({ message: input });
            let modelResponse = '';
            setMessages(prev => [...prev, { role: 'model' as const, text: '' }]);
            
            for await (const chunk of result) {
                modelResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = modelResponse;
                    return newMessages;
                });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, { role: 'model' as const, text: 'Sorry, I encountered an error. Please try again.' }]);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="animate-fade-in flex flex-col h-[85vh] bg-dark-primary">
            <Header title="Eco Chatbot" backScreen={AppScreen.USER} />

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                       {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-accent-green flex items-center justify-center flex-shrink-0 self-start"><CoinIcon className="w-5 h-5 text-dark-primary" /></div>}
                        <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.role === 'user' ? 'bg-accent-blue text-white rounded-br-lg' : 'bg-dark-secondary text-light-secondary rounded-bl-lg'}`}>
                            <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                        </div>
                    </div>
                ))}
                 {loading && messages.length > 0 && messages[messages.length-1].role === 'user' && (
                    <div className="flex items-end gap-3 justify-start">
                        <div className="w-8 h-8 rounded-full bg-accent-green flex items-center justify-center flex-shrink-0 self-start"><CoinIcon className="w-5 h-5 text-dark-primary" /></div>
                        <div className="max-w-xs md:max-w-md p-3 rounded-2xl bg-dark-secondary text-gray-300 rounded-bl-lg">
                            <div className="flex items-center space-x-1.5">
                                <div className="w-2 h-2 bg-light-secondary rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                                <div className="w-2 h-2 bg-light-secondary rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                                <div className="w-2 h-2 bg-light-secondary rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                 )}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-dark-primary border-t border-dark-tertiary">
                <div className="flex items-center bg-dark-secondary rounded-xl p-1 border border-dark-tertiary">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask about recycling..."
                        className="flex-1 bg-transparent text-light-primary px-3 focus:outline-none"
                        disabled={loading}
                    />
                    <button onClick={handleSendMessage} disabled={loading || !input.trim()} className="bg-accent-green rounded-lg p-2.5 disabled:bg-dark-tertiary disabled:cursor-not-allowed transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dark-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatbotScreen;
