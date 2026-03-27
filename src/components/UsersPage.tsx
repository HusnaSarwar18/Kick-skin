import React, { useState } from 'react';
import { PageCard, Tabs, Button, DataTable, Toggle, IconButton, SearchInput, Pagination, Badge } from './UI';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { MOCK_USERS } from '../mockData';

export const UsersPage = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [search, setSearch] = useState('');

  const filteredUsers = MOCK_USERS.filter(u => {
    if (activeTab === 'MODERATORS' && !u.isModerator) return false;
    if (activeTab === 'DUMMY' && !u.isDummy) return false;
    return u.username.toLowerCase().includes(search.toLowerCase()) || u.displayName.toLowerCase().includes(search.toLowerCase());
  });

  const headers = activeTab === 'DUMMY' 
    ? ['Profile', 'Identity & Password', 'Freeze', 'Moderator', 'Action']
    : ['Profile', 'Real/Dummy', 'Identity', 'Freeze', 'Moderator', 'Action'];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <Tabs tabs={['ALL', 'MODERATORS', 'DUMMY']} activeTab={activeTab} onChange={setActiveTab} />
        <Button variant="purple" size="sm">Create Dummy User</Button>
      </div>

      <PageCard noPadding>
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

        <DataTable headers={headers} footer={<Pagination current={1} total={filteredUsers.length} onPageChange={() => {}} />}>
          {filteredUsers.map(user => (
            <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={user.avatar} className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover" alt="" />
                    <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${user.isDummy ? 'bg-blue-500' : 'bg-green-500'}`} />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-gray-700 group-hover:text-purple-600 transition-colors">{user.username}</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{user.displayName}</div>
                  </div>
                </div>
              </td>
              {activeTab !== 'DUMMY' && (
                <td className="px-6 py-4">
                  <Badge variant={user.isDummy ? 'blue' : 'green'}>{user.isDummy ? 'Dummy' : 'Real'}</Badge>
                </td>
              )}
              <td className="px-6 py-4">
                {activeTab === 'DUMMY' ? (
                  <div>
                    <div className="text-xs font-bold text-gray-600">{user.identity}</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Pass: {user.username}</div>
                  </div>
                ) : (
                  <span className="text-xs font-bold text-gray-600">{user.identity}</span>
                )}
              </td>
              <td className="px-6 py-4">
                <Toggle checked={user.isFrozen} />
              </td>
              <td className="px-6 py-4">
                <Toggle checked={user.isModerator} />
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-1">
                  <IconButton icon={Eye} color="blue" />
                  {activeTab === 'DUMMY' && (
                    <>
                      <IconButton icon={Edit} color="green" />
                      <IconButton icon={Trash2} color="red" />
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </DataTable>
      </PageCard>
    </div>
  );
};
