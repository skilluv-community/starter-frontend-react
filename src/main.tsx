import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { App } from './App';
import { HomePage } from './routes/HomePage';
import { CounterPage } from './routes/CounterPage';
import { ApiDemoPage } from './routes/ApiDemoPage';
import { LangProvider } from './i18n/LangContext';
import './index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, Component: HomePage },
      { path: 'counter', Component: CounterPage },
      { path: 'api-demo', Component: ApiDemoPage },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <RouterProvider router={router} />
      </LangProvider>
    </QueryClientProvider>
  </StrictMode>,
);
