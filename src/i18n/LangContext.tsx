import { createContext, useMemo, useState, type ReactNode } from 'react';
import { dictionaries, type Dict, type Lang } from './dictionaries';

interface LangContextValue {
  lang: Lang;
  t: Dict;
  toggle: () => void;
}

export const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      t: dictionaries[lang],
      toggle: () => setLang((l) => (l === 'en' ? 'fr' : 'en')),
    }),
    [lang],
  );
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
