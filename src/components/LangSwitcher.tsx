import { useI18n } from '../i18n/useI18n';

export function LangSwitcher() {
  const { t, toggle } = useI18n();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch language"
      className="rounded border border-slate-700 px-2 py-1 text-xs hover:bg-slate-800"
    >
      {t.lang_switch}
    </button>
  );
}
