import { NavLink, Outlet } from 'react-router';
import { LangSwitcher } from './components/LangSwitcher';
import { useI18n } from './i18n/useI18n';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'font-semibold text-emerald-400' : 'hover:underline';

export function App() {
  const { t } = useI18n();
  return (
    <>
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-lg">
          Skilluv · React
        </NavLink>
        <nav className="flex gap-4 items-center">
          <NavLink to="/" end className={linkClass}>
            {t.nav_home}
          </NavLink>
          <NavLink to="/counter" className={linkClass}>
            {t.nav_counter}
          </NavLink>
          <NavLink to="/api-demo" className={linkClass}>
            {t.nav_api}
          </NavLink>
          <LangSwitcher />
        </nav>
      </header>
      <main className="p-6 max-w-3xl mx-auto">
        <Outlet />
      </main>
      <footer className="mt-16 px-6 py-4 text-xs text-slate-500 border-t border-slate-800">
        MIT ·{' '}
        <a href="https://skilluv.io" className="underline">
          skilluv.io
        </a>
      </footer>
    </>
  );
}
