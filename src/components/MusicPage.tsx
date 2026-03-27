import React, { useState } from 'react';
import { PageCard, Tabs, Button, DataTable, IconButton, SearchInput, Pagination, Badge } from './UI';
import { Edit, Trash2, Play } from 'lucide-react';
import { MOCK_MUSIC } from '../mockData';

export const MusicPage = () => {
  const [activeTab, setActiveTab] = useState('MUSIC');
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <Tabs tabs={['MUSIC', 'CATEGORIES']} activeTab={activeTab} onChange={setActiveTab} />
        <div className="flex gap-2">
          <Button variant="primary" className="!text-xs uppercase font-bold tracking-wider">Add Category</Button>
          <Button variant="primary" className="!text-xs uppercase font-bold tracking-wider">Add Music</Button>
        </div>
      </div>

      <PageCard title={activeTab === 'MUSIC' ? "MUSIC" : "CATEGORIES"} noPadding>
        <div className="p-4 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            Show 
            <select className="border border-gray-200 rounded px-1 py-0.5 outline-none focus:ring-1 focus:ring-purple-500">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            entries
          </div>
          <SearchInput value={search} onChange={setSearch} />
        </div>

        {activeTab === 'MUSIC' ? (
          <DataTable headers={['Image', 'Music', 'Title', 'Category', 'Duration', 'Artist', 'Action']} footer={<Pagination current={1} total={MOCK_MUSIC.length} onPageChange={() => {}} />}>
            {MOCK_MUSIC.map(m => (
              <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <img src={m.image} className="w-10 h-10 rounded shadow-sm object-cover" alt="" />
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5 w-44 border border-gray-200">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm cursor-pointer hover:bg-gray-50">
                      <Play size={10} fill="currentColor" className="text-gray-600 ml-0.5" />
                    </div>
                    <div className="h-1 flex-1 bg-gray-300 rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-purple-600 rounded-full" />
                    </div>
                    <span className="text-[9px] font-bold text-gray-500">{m.duration}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-700">{m.title}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{m.category}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{m.duration}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{m.artist}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <IconButton icon={Edit} color="green" />
                    <IconButton icon={Trash2} color="red" />
                  </div>
                </td>
              </tr>
            ))}
          </DataTable>
        ) : (
          <DataTable headers={['Category Name', 'Status', 'Action']}>
             {[
               { name: 'Hollywood', status: 'Active' },
               { name: 'Bollywood', status: 'Active' },
               { name: 'Pop', status: 'Active' },
               { name: 'Rock', status: 'Inactive' },
               { name: 'Jazz', status: 'Active' }
             ].map((cat, i) => (
               <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-gray-700">{cat.name}</td>
                  <td className="px-4 py-3"><Badge variant={cat.status === 'Active' ? 'green' : 'red'}>{cat.status}</Badge></td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <IconButton icon={Edit} color="green" />
                      <IconButton icon={Trash2} color="red" />
                    </div>
                  </td>
               </tr>
             ))}
          </DataTable>
        )}
      </PageCard>
    </div>
  );
};
