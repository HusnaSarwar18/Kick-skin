import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { DashboardPage } from './components/DashboardPage';
import { UsersPage } from './components/UsersPage';
import { PostsPage } from './components/PostsPage';
import { HashtagsPage } from './components/HashtagsPage';
import { MusicPage } from './components/MusicPage';
import { GiftsPage } from './components/GiftsPage';
import { WithdrawalsPage } from './components/WithdrawalsPage';
import { CoinPackagesPage } from './components/CoinPackagesPage';
import { RestrictionsPage } from './components/RestrictionsPage';
import { ReportsPage } from './components/ReportsPage';
import { NotificationsPage } from './components/NotificationsPage';
import { DummyLivesPage } from './components/DummyLivesPage';
import { AppLanguagesPage } from './components/AppLanguagesPage';
import { SettingsPage } from './components/SettingsPage';

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-transparent">
        <Sidebar />
        <div className="flex-1 ml-64 flex flex-col">
          <Topbar />
          <main className="p-8 flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/hashtags" element={<HashtagsPage />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/gifts" element={<GiftsPage />} />
              <Route path="/withdrawals" element={<WithdrawalsPage />} />
              <Route path="/coin-packages" element={<CoinPackagesPage />} />
              <Route path="/restrictions" element={<RestrictionsPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/dummy-lives" element={<DummyLivesPage />} />
              <Route path="/app-languages" element={<AppLanguagesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
          <footer className="px-8 py-4 text-xs text-purple-400 border-t border-purple-100 bg-white/80 backdrop-blur-sm">
            © 2026 Kick Skin Admin Dashboard. All rights reserved.
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
