import { useQuery } from '@tanstack/react-query';
import { Button } from '../components/Button';
import { useI18n } from '../i18n/useI18n';

const REPO = 'facebook/react';

interface RepoResponse {
  stargazers_count: number;
}

async function fetchStars(): Promise<number> {
  const r = await fetch(`https://api.github.com/repos/${REPO}`);
  if (!r.ok) throw new Error(`GitHub returned ${r.status}`);
  const body = (await r.json()) as RepoResponse;
  return body.stargazers_count;
}

export function ApiDemoPage() {
  const { t } = useI18n();
  const query = useQuery({ queryKey: ['stars', REPO], queryFn: fetchStars, enabled: false });

  return (
    <>
      <h1 className="text-2xl font-bold mb-2">{t.api_title}</h1>
      <p className="text-slate-400 mb-6">{t.api_intro}</p>

      <div className="rounded border border-slate-800 p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Button onClick={() => query.refetch()} disabled={query.isFetching}>
            {t.api_button}
          </Button>
          <code className="text-sm text-slate-500">github.com/{REPO}</code>
        </div>

        {query.isFetching && <p className="text-slate-400">{t.api_loading}</p>}
        {query.error && <p className="text-red-400">{(query.error as Error).message}</p>}
        {query.data !== undefined && !query.isFetching && (
          <p>
            <span className="text-slate-400">{t.api_repo_label}:</span>
            <span className="font-mono ml-2" data-testid="stars">
              {query.data.toLocaleString('en-US')}
            </span>
          </p>
        )}
      </div>
    </>
  );
}
