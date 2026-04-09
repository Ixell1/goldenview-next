'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'sr' | 'en';

interface LangContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('sr');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Read from localStorage on mount
    const storedLang = localStorage.getItem('lang') as Language | null;
    if (storedLang && (storedLang === 'sr' || storedLang === 'en')) {
      setLangState(storedLang);
    }
    setIsHydrated(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  // Prevent hydration mismatch by not rendering children until hydrated
  if (!isHydrated) {
    return null;
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
}
