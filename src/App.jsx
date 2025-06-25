import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastProvider } from '@mtbs/shared-lib';

const DashboardApp = React.lazy(() => import('dashboard/App'));
const ProfileApp = React.lazy(() => import('profile/App'));
const BookingApp = React.lazy(() => import('booking/App'));
const FeedbackApp = React.lazy(() => import('feedback/App'));
const AuthApp = React.lazy(() => import('auth/App'));


const App = () => (
  <Router>
    <ToastProvider>
      <div className="flex flex-col h-screen">
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="font-bold">Beauty Parlor</h1>
          <div className="space-x-4">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/booking">Book</Link>
            <Link to="/feedback">Feedback</Link>
          </div>
        </nav>
        <main className="flex-1 overflow-y-auto p-4">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<AuthApp />} />
              <Route path="/dashboard/*" element={<DashboardApp />} />
              <Route path="/profile/*" element={<ProfileApp />} />
              <Route path="/booking/*" element={<BookingApp />} />
              <Route path="/feedback/*" element={<FeedbackApp />} />
              <Route path="/login" element={<AuthApp />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </ToastProvider>
  </Router>
);

export default App;