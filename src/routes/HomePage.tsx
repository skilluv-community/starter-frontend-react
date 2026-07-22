import { Link } from 'react-router';
import { useI18n } from '../i18n/useI18n';

export function HomePage() {
  const { t } = useI18n();
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">{t.title}</h1>
      <p className="text-slate-400 mb-8">{t.tagline}</p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/counter"
          className="rounded border border-slate-800 p-4 hover:border-emerald-600 transition-colors"
        >
          <h2 className="font-semibold mb-1">{t.nav_counter}</h2>
          <p className="text-sm text-slate-400">
            useReducer-backed counter and a computed doubled value.
          </p>
        </Link>
        <Link
          to="/api-demo"
          className="rounded border border-slate-800 p-4 hover:border-emerald-600 transition-colors"
        >
          <h2 className="font-semibold mb-1">{t.nav_api}</h2>
          <p className="text-sm text-slate-400">
            TanStack Query fetch with loading and error handling.
          </p>
        </Link>
      </section>
    </>
  );
}
