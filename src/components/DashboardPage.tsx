import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PageCard, Badge } from './UI';
import { Users, FileText, Flag, DollarSign, Link, Download, Share2, MoreVertical } from 'lucide-react';

const data = [
  { name: 'Mar 26', dau: 40, newUsers: 5, newPosts: 2 },
  { name: '02 Mar', dau: 30, newUsers: 8, newPosts: 3 },
  { name: '04 Mar', dau: 25, newUsers: 4, newPosts: 1 },
  { name: '06 Mar', dau: 35, newUsers: 6, newPosts: 12 },
  { name: '08 Mar', dau: 32, newUsers: 5, newPosts: 4 },
  { name: '10 Mar', dau: 28, newUsers: 3, newPosts: 2 },
  { name: '12 Mar', dau: 30, newUsers: 7, newPosts: 8 },
  { name: '14 Mar', dau: 25, newUsers: 4, newPosts: 15 },
  { name: '16 Mar', dau: 33, newUsers: 6, newPosts: 3 },
  { name: '18 Mar', dau: 28, newUsers: 5, newPosts: 2 },
  { name: '20 Mar', dau: 55, newUsers: 4, newPosts: 1 },
  { name: '22 Mar', dau: 45, newUsers: 3, newPosts: 2 },
  { name: '24 Mar', dau: 35, newUsers: 8, newPosts: 5 },
  { name: '26 Mar', dau: 60, newUsers: 12, newPosts: 3 },
  { name: '28 Mar', dau: 30, newUsers: 5, newPosts: 2 },
  { name: '30 Mar', dau: 10, newUsers: 2, newPosts: 1 },
];

const StatCard = ({ title, value, icon: Icon, color, subStats }: { title: string; value: string; icon: any; color: 'purple' | 'blue' | 'green' | 'red' | 'yellow' | 'orange'; subStats: { label: string; count: number; color: any }[] }) => {
  const colorMap = {
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', iconBg: 'bg-purple-600' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', iconBg: 'bg-blue-600' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', iconBg: 'bg-green-600' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-100', iconBg: 'bg-red-600' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-100', iconBg: 'bg-yellow-600' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', iconBg: 'bg-orange-600' },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col gap-4 transition-all hover:shadow-md">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{title}</h3>
            <Link size={10} className="text-purple-400" />
          </div>
          <div className="text-3xl font-black text-gray-800 tracking-tight">{value}</div>
        </div>
        <div className={`w-10 h-10 ${colorMap[color].iconBg} rounded-xl flex items-center justify-center text-white shadow-lg shadow-${color}-100`}>
          <Icon size={20} strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-50">
        {subStats.map(s => (
          <div key={s.label} className={`flex items-center gap-1.5 px-2 py-1 rounded-md ${colorMap[s.color as keyof typeof colorMap]?.bg || 'bg-gray-50'} border ${colorMap[s.color as keyof typeof colorMap]?.border || 'border-gray-100'}`}>
            <span className={`text-[10px] font-extrabold ${colorMap[s.color as keyof typeof colorMap]?.text || 'text-gray-600'}`}>{s.count}</span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <PageCard title="ANALYTICS" action={
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <select className="text-[10px] font-bold uppercase tracking-wider border border-gray-200 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all">
              <option>March</option>
            </select>
            <select className="text-[10px] font-bold uppercase tracking-wider border border-gray-200 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all">
              <option>2026</option>
            </select>
          </div>
          <div className="flex items-center gap-1 border-l border-gray-100 pl-4">
            <button className="p-1.5 text-gray-400 hover:text-purple-600 transition-colors"><Download size={16} /></button>
            <button className="p-1.5 text-gray-400 hover:text-purple-600 transition-colors"><Share2 size={16} /></button>
            <button className="p-1.5 text-gray-400 hover:text-purple-600 transition-colors"><MoreVertical size={16} /></button>
          </div>
        </div>
      }>
        <div className="h-[380px] w-full mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorDau" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorNewUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorNewPosts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 600 }} dx={-10} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px' }}
              />
              <Legend verticalAlign="top" align="left" height={50} iconType="circle" wrapperStyle={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', paddingBottom: '20px' }} />
              <Area type="monotone" dataKey="dau" name="DAU" stroke="#7c3aed" fillOpacity={1} fill="url(#colorDau)" strokeWidth={3} />
              <Area type="monotone" dataKey="newUsers" name="New Users" stroke="#10b981" fillOpacity={1} fill="url(#colorNewUsers)" strokeWidth={3} />
              <Area type="monotone" dataKey="newPosts" name="New Posts" stroke="#f59e0b" fillOpacity={1} fill="url(#colorNewPosts)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </PageCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Registered Users"
          value="4,640"
          icon={Users}
          color="purple"
          subStats={[
            { label: 'Freezed', count: 3, color: 'red' },
            { label: 'Moderators', count: 2, color: 'green' },
            { label: 'Dummy', count: 1, color: 'blue' },
          ]}
        />
        <StatCard
          title="Posts"
          value="33,296"
          icon={FileText}
          color="blue"
          subStats={[
            { label: 'Reels', count: 3106, color: 'purple' },
            { label: 'Videos', count: 1751, color: 'blue' },
            { label: 'Image', count: 2028, color: 'green' },
            { label: 'Text', count: 26411, color: 'yellow' },
          ]}
        />
        <StatCard
          title="Reports"
          value="12"
          icon={Flag}
          color="red"
          subStats={[
            { label: 'User Reports', count: 8, color: 'red' },
            { label: 'Post Reports', count: 4, color: 'orange' },
          ]}
        />
        <StatCard
          title="Withdrawals"
          value="3"
          icon={DollarSign}
          color="green"
          subStats={[
            { label: 'Pending', count: 1, color: 'yellow' },
            { label: 'Completed', count: 1, color: 'green' },
            { label: 'Rejected', count: 1, color: 'red' },
          ]}
        />
      </div>
    </div>
  );
};
