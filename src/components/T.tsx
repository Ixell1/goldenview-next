'use client';

import { useLang } from '@/context/LangContext';

interface TProps {
  sr: string;
  en: string;
}

export default function T({ sr, en }: TProps) {
  const { lang } = useLang();
  return <>{lang === 'sr' ? sr : en}</>;
}
