import { Button } from '../components/Button';
import { useCounter } from '../hooks/useCounter';
import { useI18n } from '../i18n/useI18n';

export function CounterPage() {
  const { t } = useI18n();
  const counter = useCounter(0);
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">{t.counter_title}</h1>
      <div className="rounded border border-slate-800 p-6 space-y-4">
        <p>
          <span className="text-slate-400">{t.counter_current}:</span>
          <span className="text-2xl font-mono ml-2" data-testid="counter-value">
            {counter.value}
          </span>
        </p>
        <p className="text-sm text-slate-400">
          {t.counter_doubled}: <span className="font-mono">{counter.doubled}</span>
        </p>
        <div className="flex gap-2">
          <Button onClick={counter.increment}>{t.counter_inc}</Button>
          <Button variant="secondary" onClick={counter.decrement}>
            {t.counter_dec}
          </Button>
          <Button variant="ghost" onClick={counter.reset}>
            {t.counter_reset}
          </Button>
        </div>
      </div>
    </>
  );
}
