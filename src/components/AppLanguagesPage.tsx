import React from 'react';
import { PageCard, Button, DataTable, SearchInput, Pagination, Toggle, IconButton } from './UI';
import { Edit, Trash2, FileText } from 'lucide-react';
import { MOCK_LANGUAGES } from '../mockData';

export const AppLanguagesPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-700 uppercase tracking-wider">App Languages</h1>
        <Button variant="primary" className="!text-xs uppercase font-bold tracking-wider">Add Language</Button>
      </div>

      <PageCard title="APP LANGUAGES" noPadding>
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
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="!text-[10px] !px-3 !py-1.5 uppercase font-bold border-gray-200">Download CSV</Button>
            <SearchInput value="" onChange={() => {}} />
          </div>
        </div>

        <DataTable headers={['Title', 'Code', 'Localized Title', 'Status', 'Default', 'CSV', 'Action']} footer={<Pagination current={1} total={MOCK_LANGUAGES.length} onPageChange={() => {}} />}>
          {MOCK_LANGUAGES.map(lang => (
            <tr key={lang.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-gray-700">{lang.title}</td>
              <td className="px-4 py-3 text-sm text-gray-500 font-mono">{lang.code}</td>
              <td className="px-4 py-3 text-sm text-gray-500">{lang.localizedTitle}</td>
              <td className="px-4 py-3">
                <Toggle checked={lang.status} />
              </td>
              <td className="px-4 py-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${lang.isDefault ? 'border-purple-600 bg-purple-50' : 'border-gray-200'}`}>
                  {lang.isDefault && <div className="w-2.5 h-2.5 bg-purple-600 rounded-full shadow-sm" />}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-100 transition-colors">
                  <FileText size={16} />
                </div>
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
