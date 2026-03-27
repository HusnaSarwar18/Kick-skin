export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  isDummy: boolean;
  identity: string;
  isFrozen: boolean;
  isModerator: boolean;
}

export interface Post {
  id: string;
  type: 'Text' | 'Reel' | 'Video' | 'Image';
  user: Partial<User>;
  description: string;
  hashtags: string[];
  stats: {
    likes: number;
    comments: number;
    bookmarks: number;
    shares: number;
    views?: number;
  };
  createdAt: string;
}

export interface Hashtag {
  id: string;
  name: string;
  postCount: number;
}

export interface MusicTrack {
  id: string;
  image: string;
  title: string;
  category: string;
  duration: string;
  artist: string;
}

export interface Gift {
  id: string;
  image: string;
  title: string;
  price: number;
}

export interface Withdrawal {
  id: string;
  requestNumber: string;
  user: Partial<User>;
  amount: number;
  coins: number;
  coinValue: number;
  paymentMethod: string;
  paymentAccount: string;
  status: 'Pending' | 'Completed' | 'Rejected';
  createdAt: string;
}

export interface CoinPackage {
  id: string;
  image: string;
  amount: number;
  price: number;
  status: boolean;
  playStoreId: string;
  appStoreId: string;
}

export interface Report {
  id: string;
  type: 'Post' | 'User';
  targetId: string;
  targetUser: Partial<User>;
  details: string;
  reason: string;
  reportedBy: Partial<User>;
  date: string;
}

export interface AppLanguage {
  id: string;
  title: string;
  code: string;
  localizedTitle: string;
  status: boolean;
  isDefault: boolean;
}
