import React from 'react';
import { PageCard, Button, DataTable, SearchInput, Pagination, Tabs } from './UI';
import { MOCK_HASHTAGS } from '../mockData';

export const RestrictionsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-700 uppercase tracking-wider">Restrictions</h1>
        <Button variant="primary" className="!text-xs uppercase font-bold tracking-wider">Add Username</Button>
      </div>

      <PageCard title="RESTRICTIONS" noPadding>
        <div className="p-4 border-b border-gray-100">
          <Tabs tabs={['USERNAME']} activeTab="USERNAME" onChange={() => {}} />
        </div>
        
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
          <SearchInput value="" onChange={() => {}} />
        </div>

        <DataTable headers={['Username', 'Action']} footer={<Pagination current={0} total={0} onPageChange={() => {}} />}>
          <tr>
            <td colSpan={2} className="px-4 py-20 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                  <div className="text-4xl">∅</div>
                </div>
                <div className="text-sm font-medium text-gray-400">No data available in table</div>
              </div>
            </td>
          </tr>
        </DataTable>
      </PageCard>
    </div>
  );
};
