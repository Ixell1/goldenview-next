'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Lang = 'sr' | 'en';
type LangContextValue = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<LangContextValue>({ lang: 'sr', setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('sr');

  useEffect(() => {
    const saved = (localStorage.getItem('preferredLang') as Lang | null) ?? 'sr';
    setLangState(saved);
    document.documentElement.dataset.lang = saved;
    document.documentElement.lang = saved;
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('preferredLang', l);
    document.documentElement.dataset.lang = l;
    document.documentElement.lang = l;
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
