import React, { useState } from 'react';
import { PageCard, Button, DataTable, SearchInput, Pagination, IconButton } from './UI';
import { Send, Trash2, X } from 'lucide-react';

const MOCK_NOTIFICATIONS = [
  { id: 1, title: 'Welcome to Kick Skin!', body: 'Thank you for joining our community.', date: '2026-03-20 10:00' },
  { id: 2, title: 'New Feature Update', body: 'Check out the new Reels feature now available.', date: '2026-03-22 14:30' },
];

export const NotificationsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-700 uppercase tracking-wider">Notifications</h1>
        <Button variant="primary" onClick={() => setShowModal(true)} className="!text-xs uppercase font-bold tracking-wider">New Notification</Button>
      </div>

      <PageCard title="NOTIFICATIONS" noPadding>
        <div className="p-4 bg-blue-50 border-b border-blue-100 flex items-start gap-3">
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold mt-0.5 shrink-0">i</div>
          <div className="text-xs text-blue-700 leading-relaxed">
            *This is a common notification which will be pushed to all users and can be seen in the app.
          </div>
        </div>

        <div className="p-4 flex justify-between items-center border-b border-gray-100">
          <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Show 
            <select className="border border-gray-200 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-purple-500/20">
              <option>10</option>
            </select>
            entries
          </div>
          <SearchInput value={search} onChange={setSearch} />
        </div>

        <DataTable headers={['Notification', 'Date', 'Action']} footer={<Pagination current={1} total={MOCK_NOTIFICATIONS.length} onPageChange={() => {}} />}>
          {MOCK_NOTIFICATIONS.length > 0 ? (
            MOCK_NOTIFICATIONS.map(n => (
              <tr key={n.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <div className="text-xs font-extrabold text-gray-700">{n.title}</div>
                    <div className="text-[11px] text-gray-400 line-clamp-1">{n.body}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{n.date}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1">
                    <IconButton icon={Trash2} color="red" />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="px-4 py-20 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
                    <div className="text-4xl">∅</div>
                  </div>
                  <div className="text-sm font-medium text-gray-400">No data available in table</div>
                </div>
              </td>
            </tr>
          )}
        </DataTable>
      </PageCard>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Create Notification</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Title</label>
                <input type="text" placeholder="Enter notification title" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-purple-500/20 outline-none transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea rows={4} placeholder="Enter notification message" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none" />
              </div>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 flex items-start gap-3">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold mt-0.5 shrink-0">!</div>
                <div className="text-[10px] text-purple-700 leading-relaxed font-medium">
                  This notification will be sent immediately to all registered devices. This action cannot be undone.
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setShowModal(false)} className="!text-[11px] uppercase font-bold tracking-wider">Cancel</Button>
              <Button variant="purple" className="!text-[11px] uppercase font-bold tracking-wider flex items-center gap-2">
                <Send size={14} /> Send Notification
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
