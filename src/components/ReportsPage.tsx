import React, { useState } from 'react';
import { PageCard, Tabs, DataTable, Button, SearchInput, Pagination } from './UI';
import { Play } from 'lucide-react';
import { MOCK_REPORTS } from '../mockData';

export const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState('POSTS');

  const filtered = MOCK_REPORTS.filter(r => r.type.toUpperCase() === activeTab);

  const headers = activeTab === 'POSTS' 
    ? ['Post', 'Post User', 'Details', 'Reported By', 'Date', 'Action']
    : ['User', 'Details', 'Reported By', 'Date', 'Action'];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <Tabs tabs={['POSTS', 'USERS']} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <PageCard title="REPORTS" noPadding>
        <div className="p-4 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Show 
            <select className="border border-gray-200 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-purple-500/20">
              <option>10</option>
            </select>
            entries
          </div>
          <SearchInput value="" onChange={() => {}} />
        </div>

        <DataTable headers={headers} footer={<Pagination current={1} total={filtered.length} onPageChange={() => {}} />}>
          {filtered.map(r => (
            <tr key={r.id} className="hover:bg-gray-50 transition-colors">
              {activeTab === 'POSTS' && (
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-purple-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                      <Play size={16} fill="white" />
                    </div>
                    <Button variant="purple" className="!px-2.5 !py-1 !text-[9px] uppercase font-bold tracking-tight">View Content</Button>
                  </div>
                </td>
              )}
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <img src={r.targetUser.avatar} className="w-9 h-9 rounded-full border border-gray-100 shadow-sm" alt="" />
                  <div>
                    <div className="text-xs font-bold text-gray-700">{r.targetUser.username}</div>
                    <div className="text-[10px] text-gray-400 font-medium">{r.targetUser.displayName}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-xs font-bold text-gray-700 mb-0.5">{r.details}</div>
                <div className="text-[10px] text-red-500 font-bold uppercase tracking-tighter bg-red-50 px-1.5 py-0.5 rounded inline-block">{r.reason}</div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <img src={r.reportedBy.avatar} className="w-7 h-7 rounded-full border border-gray-100 shadow-sm" alt="" />
                  <span className="text-xs font-medium text-gray-600">@{r.reportedBy.username}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-[11px] text-gray-500 font-medium">{r.date}</td>
              <td className="px-6 py-4">
                <div className="flex flex-col gap-1.5">
                  <Button variant="success" className="!px-2 !py-1 !text-[9px] uppercase font-bold">Accept Report</Button>
                  <Button variant="danger" className="!px-2 !py-1 !text-[9px] uppercase font-bold">Reject Report</Button>
                </div>
              </td>
            </tr>
          ))}
        </DataTable>
      </PageCard>
    </div>
  );
};
