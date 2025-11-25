import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from '@mtbs/shared-lib';

// Remotes
const DashboardApp = React.lazy(() => import('dashboard/App'));
const ProfileApp = React.lazy(() => import('profile/App'));
const BookingApp = React.lazy(() => import('booking/App'));
const FeedbackApp = React.lazy(() => import('feedback/App'));
const AuthApp = React.lazy(() => import('auth/App'));
const LayoutFrame = React.lazy(() => import('layout/LayoutFrame'));


const BookingRoute = () => (
  <LayoutFrame>
    <BookingApp />
  </LayoutFrame>
);

const DashboardRoute = () => (
  <LayoutFrame>
    <DashboardApp />
  </LayoutFrame>
);

const App = () => (
  <Router>
    <ToastProvider>
      <div className="flex flex-col h-screen">
        <main className="flex-1 overflow-y-auto px-4 pb-4 pt-0">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<AuthApp />} />
              <Route path="/login" element={<AuthApp />} />
              <Route path="/dashboard/*" element={<DashboardRoute />} />
              <Route path="/profile/*" element={<ProfileApp />} />
              <Route path="/booking/*" element={<BookingRoute />} />
              <Route path="/feedback/*" element={<FeedbackApp />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </ToastProvider>
  </Router>
);

export default App;
