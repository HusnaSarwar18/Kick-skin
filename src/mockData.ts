import { User, Post, Hashtag, MusicTrack, Gift, Withdrawal, CoinPackage, Report, AppLanguage } from './types';

export const MOCK_USERS: User[] = [
  { id: '1', username: 'Emansarwar5966', displayName: 'Eman Sarwar', avatar: '/app-icon.png', isDummy: false, identity: 'emansarwar.moon@gmail.com', isFrozen: false, isModerator: false },
  { id: '2', username: 'temp9939', displayName: 'temp', avatar: '/app-icon.png', isDummy: false, identity: 'chshafqat.abbas520@gmail.com', isFrozen: false, isModerator: false },
  { id: '3', username: 'ar_user1329692', displayName: 'ar_user132', avatar: '/app-icon.png', isDummy: false, identity: 'ar_user132@icloud.com', isFrozen: false, isModerator: false },
  { id: '4', username: 'ammar1849', displayName: 'ammar', avatar: '/app-icon.png', isDummy: false, identity: 'ammarcooliou@gmail.com', isFrozen: false, isModerator: false },
  { id: '5', username: 'tester001', displayName: 'Tester1', avatar: '/app-icon.png', isDummy: true, identity: 'KUS764313FMR', isFrozen: false, isModerator: false },
  { id: '6', username: 'nader9997', displayName: 'nader', avatar: '/app-icon.png', isDummy: false, identity: 'atochahalal@gmail.com', isFrozen: false, isModerator: true },
];

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    type: 'Text',
    user: MOCK_USERS[0],
    description: 'Hello world',
    hashtags: ['#MBA', '#KickSkin'],
    stats: { likes: 10, comments: 2, bookmarks: 1, shares: 0 },
    createdAt: '20 Mar 2026'
  },
  {
    id: '2',
    type: 'Reel',
    user: MOCK_USERS[1],
    description: 'Check this out',
    hashtags: ['#fun', '#viral'],
    stats: { likes: 150, comments: 45, bookmarks: 20, shares: 10, views: 1200 },
    createdAt: '14 Mar 2026'
  }
];

export const MOCK_HASHTAGS: Hashtag[] = [
  { id: '1', name: '#AK_Challenge', postCount: 3 },
  { id: '2', name: '#Iraq', postCount: 1 },
  { id: '3', name: '#KickSkin', postCount: 120 },
];

export const MOCK_MUSIC: MusicTrack[] = [
  { id: '1', image: '/app-icon.png', title: 'Bang bang', category: 'Hollywood', duration: '2:59', artist: 'Rita Ora, Imanbek' }
];

export const MOCK_GIFTS: Gift[] = [
  { id: '1', image: '/app-icon.png', title: 'Rose', price: 500 },
  { id: '2', image: '/app-icon.png', title: 'Shell', price: 1500 },
  { id: '3', image: '/app-icon.png', title: 'Envelope', price: 500 },
  { id: '4', image: '/app-icon.png', title: 'Tower', price: 8000 },
];

export const MOCK_WITHDRAWALS: Withdrawal[] = [
  {
    id: '1',
    requestNumber: '#44-5773',
    user: MOCK_USERS[5],
    amount: 260,
    coins: 200000,
    coinValue: 0.0013,
    paymentMethod: 'PayPal',
    paymentAccount: 'eidbadin@yahoo.com',
    status: 'Pending',
    createdAt: '30 Jan 2026'
  }
];

export const MOCK_COIN_PACKAGES: CoinPackage[] = [
  { id: '1', image: '/app-icon.png', amount: 250000, price: 1, status: true, playStoreId: '250000_kickskin', appStoreId: 'keyspace_250000' },
  { id: '2', image: '/app-icon.png', amount: 100000, price: 1, status: true, playStoreId: '100000_kickskin', appStoreId: 'keyspace_100000' },
];

export const MOCK_REPORTS: Report[] = [
  {
    id: '1',
    type: 'Post',
    targetId: '1',
    targetUser: MOCK_USERS[0],
    details: 'Abusive Content',
    reason: 'Bad language',
    reportedBy: MOCK_USERS[1],
    date: '28 Dec 2025'
  },
  {
    id: '2',
    type: 'User',
    targetId: '4',
    targetUser: MOCK_USERS[3],
    details: 'Impersonation',
    reason: 'Fake Profile',
    reportedBy: MOCK_USERS[0],
    date: '29 Dec 2025'
  }
];

export const MOCK_LANGUAGES: AppLanguage[] = [
  { id: '1', title: 'Turkish', code: 'tr', localizedTitle: 'Türkçe', status: true, isDefault: false },
  { id: '2', title: 'English', code: 'en', localizedTitle: 'English', status: true, isDefault: true },
];
