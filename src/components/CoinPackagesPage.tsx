import React from 'react';
import { PageCard, Button, DataTable, IconButton, SearchInput, Pagination, Toggle } from './UI';
import { Edit, Trash2 } from 'lucide-react';
import { MOCK_COIN_PACKAGES } from '../mockData';

export const CoinPackagesPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-700 uppercase tracking-wider">Coin Packages</h1>
        <Button variant="primary" className="!text-xs uppercase font-bold tracking-wider">Add</Button>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-start gap-3">
        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold mt-0.5">i</div>
        <div className="text-xs text-blue-700 leading-relaxed">
          *Price is for reference only. Actual price will be fetched from Google/Apple stores in the app based on users location. <br/>
          *Please refer documentation to learn how to add new coin plans.
        </div>
      </div>

      <PageCard title="COIN PACKAGES" noPadding>
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

        <DataTable headers={['Image', 'Coin Amount', 'Price', 'Status', 'PlayStore Product Id', 'AppStore Product Id', 'Action']} footer={<Pagination current={1} total={MOCK_COIN_PACKAGES.length} onPageChange={() => {}} />}>
          {MOCK_COIN_PACKAGES.map(pkg => (
            <tr key={pkg.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm border-2 border-white">★</div>
              </td>
              <td className="px-4 py-3 text-sm font-bold text-gray-700">{pkg.amount}</td>
              <td className="px-4 py-3 text-sm font-bold text-purple-600">${pkg.price}</td>
              <td className="px-4 py-3">
                <Toggle checked={pkg.status} />
              </td>
              <td className="px-4 py-3">
                <code className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono">{pkg.playStoreId}</code>
              </td>
              <td className="px-4 py-3">
                <code className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono">{pkg.appStoreId}</code>
              </td>
              <td className="px-4 py-3">
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
