import React, { useState } from 'react';
import { PageCard, Tabs, Button, DataTable, IconButton, SearchInput, Pagination, Badge } from './UI';
import { Eye, Trash2, Heart, MessageCircle, Bookmark, Share2, Play } from 'lucide-react';
import { MOCK_POSTS } from '../mockData';

export const PostsPage = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [search, setSearch] = useState('');

  const filteredPosts = MOCK_POSTS.filter(p => {
    if (activeTab === 'ALL') return p.description.toLowerCase().includes(search.toLowerCase());
    
    const typeMap: Record<string, string> = {
      'REELS': 'Reel',
      'VIDEOS': 'Video',
      'IMAGE': 'Image',
      'TEXT': 'Text'
    };
    
    if (p.type !== typeMap[activeTab]) return false;
    return p.description.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <Tabs tabs={['ALL', 'REELS', 'VIDEOS', 'IMAGE', 'TEXT']} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <PageCard title="POSTS" noPadding>
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Show 
            <select className="border border-gray-200 rounded-lg px-2 py-1 focus:ring-2 focus:ring-purple-500/20 outline-none">
              <option>10</option>
            </select>
            entries
          </div>
          <SearchInput value={search} onChange={setSearch} />
        </div>

        <DataTable headers={['Content', 'Type', 'User', 'Description & Stats', 'Created Date', 'Action']} footer={<Pagination current={1} total={filteredPosts.length} onPageChange={() => {}} />}>
          {filteredPosts.map(post => (
            <tr key={post.id} className="hover:bg-gray-50/50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                    {post.type === 'Text' ? <span className="text-xs font-bold">T</span> : <Play size={16} fill="currentColor" />}
                  </div>
                  <Button variant="purple" size="xs" className="uppercase tracking-widest">View Content</Button>
                </div>
              </td>
              <td className="px-6 py-4">
                <Badge variant={post.type === 'Reel' ? 'purple' : post.type === 'Video' ? 'blue' : post.type === 'Image' ? 'green' : 'yellow'}>{post.type}</Badge>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img src={post.user.avatar} className="w-9 h-9 rounded-full border border-gray-100 shadow-sm" alt="" />
                  <div>
                    <div className="text-xs font-extrabold text-gray-700">{post.user.username}</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{post.user.displayName}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col gap-1.5 max-w-xs">
                  <div className="text-xs font-medium text-gray-600 line-clamp-1">{post.description}</div>
                  <div className="flex gap-2 text-purple-600 text-[9px] font-extrabold uppercase tracking-wider">
                    {post.hashtags.map(h => <span key={h} className="hover:underline cursor-pointer">{h}</span>)}
                  </div>
                  <div className="flex gap-2 mt-1">
                    <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400 bg-gray-50 rounded-md px-2 py-1 border border-gray-100">
                      <Heart size={10} className="text-red-400" fill={post.stats.likes > 0 ? "currentColor" : "none"} /> {post.stats.likes}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400 bg-gray-50 rounded-md px-2 py-1 border border-gray-100">
                      <MessageCircle size={10} className="text-blue-400" /> {post.stats.comments}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400 bg-gray-50 rounded-md px-2 py-1 border border-gray-100">
                      <Bookmark size={10} className="text-yellow-400" /> {post.stats.bookmarks}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400 bg-gray-50 rounded-md px-2 py-1 border border-gray-100">
                      <Share2 size={10} className="text-green-400" /> {post.stats.shares}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.createdAt}</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-1">
                  <IconButton icon={Eye} color="blue" />
                  <IconButton icon={Trash2} color="red" />
                </div>
              </td>
            </tr>
          ))}
        </DataTable>
      </PageCard>
    </div>
  );
};
