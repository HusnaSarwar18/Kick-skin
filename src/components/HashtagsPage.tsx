import React, { useState } from 'react';
import { PageCard, Button, DataTable, IconButton, SearchInput, Pagination } from './UI';
import { Edit, Trash2 } from 'lucide-react';
import { MOCK_HASHTAGS } from '../mockData';

export const HashtagsPage = () => {
  const [search, setSearch] = useState('');

  const filtered = MOCK_HASHTAGS.filter(h => h.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-extrabold text-gray-700 uppercase tracking-wider">Hashtags</h1>
        <Button variant="purple" size="sm">Add Hashtag</Button>
      </div>

      <PageCard title="HASHTAGS" noPadding>
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

        <DataTable headers={['Hashtag', 'Post Count', 'Action']} footer={<Pagination current={1} total={filtered.length} onPageChange={() => {}} />}>
          {filtered.map(h => (
            <tr key={h.id} className="hover:bg-gray-50/50 transition-colors group">
              <td className="px-6 py-4">
                <span className="text-xs font-extrabold text-purple-600 bg-purple-50 px-2 py-1 rounded-md border border-purple-100 transition-colors group-hover:bg-purple-100">#{h.name}</span>
              </td>
              <td className="px-6 py-4">
                <div className="text-xs font-bold text-gray-600">{h.postCount.toLocaleString()} Posts</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-1">
                  <IconButton icon={Edit} color="green" />
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
