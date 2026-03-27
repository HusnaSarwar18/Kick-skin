import React, { useState } from 'react';
import { PageCard, Tabs, DataTable, IconButton, SearchInput, Pagination, Badge, Button } from './UI';
import { Check, X } from 'lucide-react';
import { MOCK_WITHDRAWALS } from '../mockData';

export const WithdrawalsPage = () => {
  const [activeTab, setActiveTab] = useState('PENDING');
  const [search, setSearch] = useState('');

  const filtered = MOCK_WITHDRAWALS.filter(w => w.status.toUpperCase() === activeTab);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <Tabs tabs={['PENDING', 'COMPLETED', 'REJECTED']} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <PageCard title="WITHDRAWALS" noPadding>
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

        <DataTable headers={['Request Number', 'User', 'Coin Details', 'Payment Details', 'Created Date', 'Action']} footer={<Pagination current={1} total={filtered.length} onPageChange={() => {}} />}>
          {filtered.map(w => (
            <tr key={w.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-sm font-bold text-purple-600">
                #{w.requestNumber}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <img src={w.user.avatar} className="w-9 h-9 rounded-full border border-gray-100 shadow-sm" alt="" />
                  <div>
                    <div className="text-xs font-bold text-gray-700">{w.user.username}</div>
                    <div className="text-[10px] text-gray-400 font-medium">{w.user.displayName}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-col gap-0.5">
                  <div className="text-sm font-bold text-gray-800 tracking-tight">$ {w.amount}</div>
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full flex items-center justify-center text-[6px] text-white font-bold">★</div>
                    <div className="text-[10px] text-gray-500 font-medium">Coins: {w.coins}</div>
                  </div>
                  <div className="text-[9px] text-gray-400 italic">Coin Value: {w.coinValue}</div>
                </div>
              </td>
              <td className="px-4 py-3">
                <Badge variant="blue" className="!text-[9px] !px-2 !py-0.5">{w.paymentMethod}</Badge>
                <div className="text-[10px] text-gray-500 font-medium mt-1.5 bg-gray-50 px-2 py-1 rounded border border-gray-100 inline-block">{w.paymentAccount}</div>
              </td>
              <td className="px-4 py-3 text-[11px] text-gray-500 font-medium">
                {w.createdAt}
              </td>
              <td className="px-4 py-3">
                {activeTab === 'PENDING' && (
                  <div className="flex gap-1.5">
                    <Button variant="success" className="!px-2.5 !py-1 !text-[10px] uppercase font-bold">Approve</Button>
                    <Button variant="danger" className="!px-2.5 !py-1 !text-[10px] uppercase font-bold">Reject</Button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </DataTable>
      </PageCard>
    </div>
  );
};
