'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

type Lang = 'sr' | 'en';
type LangContextValue = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<LangContextValue>({ lang: 'sr', setLang: () => {} });

// PHP-style: swap textContent for any leaf element that carries both data-sr and data-en.
// We avoid touching elements that have children — those wrap multiple translation slots.
function applyLang(l: Lang) {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.lang = l;
  document.documentElement.lang = l;
  const targets = document.querySelectorAll<HTMLElement>('[data-sr][data-en]');
  targets.forEach((el) => {
    const text = l === 'sr' ? el.dataset.sr : el.dataset.en;
    if (text == null) return;
    if (el.children.length === 0) {
      el.textContent = text;
    }
  });
  // <option> labels: same dual-attribute pattern
  document.querySelectorAll<HTMLOptionElement>('option[data-sr][data-en]').forEach((el) => {
    const text = l === 'sr' ? el.dataset.sr : el.dataset.en;
    if (text != null) el.textContent = text;
  });
  // Input/select placeholders (optional pattern)
  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-sr-placeholder][data-en-placeholder]').forEach((el) => {
    const text = l === 'sr' ? el.dataset.srPlaceholder : el.dataset.enPlaceholder;
    if (text != null) el.placeholder = text;
  });
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('sr');

  useEffect(() => {
    const saved = (localStorage.getItem('preferredLang') as Lang | null) ?? 'sr';
    setLangState(saved);
    applyLang(saved);
  }, []);

  // Re-apply whenever lang changes OR React rerenders the tree (covers new DOM nodes).
  useEffect(() => {
    applyLang(lang);
    // Watch for new DOM nodes added by React renders and translate them.
    const observer = new MutationObserver((mutations) => {
      let touched = false;
      for (const m of mutations) {
        if (m.addedNodes.length > 0) { touched = true; break; }
      }
      if (touched) applyLang(lang);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem('preferredLang', l);
    applyLang(l);
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
