import { LayoutDashboard, Users, FileText, Hash, Music, Gift, DollarSign, Coins, ShieldAlert, Flag, Bell, Radio, Languages, Settings, Menu, Moon, Maximize, Sun } from 'lucide-react';

export const COLORS = {
  sidebar: '#1e293b', // Dark bluish-gray
  background: '#f8fafc', // Very light gray
  accent: '#7c3aed', // Purple
  text: '#334155',
  muted: '#64748b',
  border: '#e2e8f0',
};

export const SIDEBAR_MENU = [
  {
    title: 'APP',
    items: [
      { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
      { name: 'Users', icon: Users, path: '/users' },
      { name: 'Posts', icon: FileText, path: '/posts' },
      { name: 'Hashtags', icon: Hash, path: '/hashtags' },
      { name: 'Music', icon: Music, path: '/music' },
      { name: 'Gifts', icon: Gift, path: '/gifts' },
      { name: 'Withdrawals', icon: DollarSign, path: '/withdrawals' },
      { name: 'Coin Packages', icon: Coins, path: '/coin-packages' },
      { name: 'Restrictions', icon: ShieldAlert, path: '/restrictions' },
      { name: 'Reports', icon: Flag, path: '/reports' },
      { name: 'Notifications', icon: Bell, path: '/notifications' },
      { name: 'Dummy Lives', icon: Radio, path: '/dummy-lives' },
    ]
  },
  {
    title: 'SETTINGS',
    items: [
      { name: 'App Languages', icon: Languages, path: '/app-languages' },
      { name: 'Settings', icon: Settings, path: '/settings' },
    ]
  }
];
