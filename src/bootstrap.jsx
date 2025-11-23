import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider, MockAuthProvider } from '@mtbs/shared-lib';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

if (process.env.NODE_ENV === 'development' && process.env.MOCK_API === 'true') {
    import('@mtbs/shared-lib/mocks').then(({ worker }) => worker.start());
}

const Provider = process.env.MOCK_AUTH === 'true' ? MockAuthProvider : AuthProvider;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);