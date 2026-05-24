'use client';

import { createContext, useContext, useEffect, useState, useCallback, useRef, ReactNode } from 'react';

type Lang = 'sr' | 'en';
type LangContextValue = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<LangContextValue>({ lang: 'sr', setLang: () => {} });

// PHP-style: swap textContent for any leaf element that carries both data-sr and data-en.
// Skips elements that already match the target text to avoid spurious DOM mutations.
function applyLang(l: Lang) {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll<HTMLElement>('[data-sr][data-en]').forEach((el) => {
    const text = l === 'sr' ? el.dataset.sr : el.dataset.en;
    if (text == null) return;
    if (el.children.length > 0) return;
    if (el.textContent !== text) el.textContent = text;
  });
  document.querySelectorAll<HTMLOptionElement>('option[data-sr][data-en]').forEach((el) => {
    const text = l === 'sr' ? el.dataset.sr : el.dataset.en;
    if (text != null && el.textContent !== text) el.textContent = text;
  });
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('sr');
  const lastAppliedRef = useRef<Lang | null>(null);

  useEffect(() => {
    const saved = (localStorage.getItem('preferredLang') as Lang | null) ?? 'sr';
    setLangState(saved);
    applyLang(saved);
    lastAppliedRef.current = saved;
  }, []);

  // Re-apply only when language changes. No MutationObserver — it can fight with
  // React reconciliation and stall reveal animations on slower devices.
  useEffect(() => {
    if (lastAppliedRef.current === lang) return;
    applyLang(lang);
    lastAppliedRef.current = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem('preferredLang', l);
    applyLang(l);
    lastAppliedRef.current = l;
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
