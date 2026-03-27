import React, { useMemo, useState } from 'react';
import {
  Badge,
  Button,
  DataTable,
  IconButton,
  PageCard,
  Pagination,
  SearchInput,
  Toggle,
} from './UI';
import { Edit, Eye, EyeOff, Plus, Trash2 } from 'lucide-react';

const SETTINGS_TABS = [
  'App Settings',
  'Limits',
  'Livestream',
  'GIPHY',
  'SightEngine',
  'Admob',
  'Onboarding',
  'User Levels',
  'Report Reasons',
  'Withdrawal Gateways',
  'DeepAR Settings',
  'Deeplink Settings',
  'Privacy Policy',
  'Terms Of Uses',
  'Admin Settings',
];

function FieldCard({
  label,
  type = 'text',
  value,
  placeholder,
  helper,
  right,
}: {
  label: string;
  type?: string;
  value?: string | number;
  placeholder?: string;
  helper?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 bg-gray-50 rounded-xl border border-gray-100 p-4">
      <div className="flex items-center justify-between gap-3">
        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</label>
        {right}
      </div>
      <input
        type={type}
        defaultValue={value as any}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-purple-500 outline-none bg-white transition-shadow focus:shadow-sm"
      />
      {helper ? <span className="text-[10px] text-gray-400 italic">{helper}</span> : null}
    </div>
  );
}

function ToggleCard({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description?: string;
  checked: boolean;
  onChange?: (val: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
      <div>
        <div className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">{title}</div>
        {description ? <div className="text-[10px] text-gray-400 font-medium">{description}</div> : null}
      </div>
      <Toggle checked={checked} onChange={onChange} />
    </div>
  );
}

function UploadBox({
  label,
  previewUrl,
  onFilePicked,
}: {
  label: string;
  previewUrl?: string;
  onFilePicked?: (file: File | null) => void;
}) {
  const [localPreview, setLocalPreview] = useState<string | undefined>(previewUrl);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-400 uppercase overflow-hidden">
          {localPreview ? <img src={localPreview} className="w-full h-full object-cover" alt="" /> : null}
        </div>
        <div className="flex flex-col gap-2">
          <label className="block">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                const f = e.target.files?.[0] ?? null;
                onFilePicked?.(f);
                if (!f) return setLocalPreview(undefined);
                const reader = new FileReader();
                reader.onload = () => setLocalPreview(String(reader.result));
                reader.readAsDataURL(f);
              }}
            />
            <span className="inline-flex items-center px-3 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-[10px] font-bold uppercase tracking-wider cursor-pointer select-none">
              Choose File
            </span>
          </label>
          <div className="text-[10px] text-gray-400 italic">No file chosen</div>
        </div>
      </div>
    </div>
  );
}

function SettingsPaginationFooter({ total, pageSize = 10 }: { total: number; pageSize?: number }) {
  // Lightweight footer that matches the "Showing X to Y of Z entries" line.
  const shownTo = Math.min(pageSize, total);
  return (
    <div className="px-6 py-4 border-t border-gray-100 bg-white">
      <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 uppercase tracking-wider">
        <div>
          Showing 1 to {shownTo} of {total} entries
        </div>
      </div>
    </div>
  );
}

export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<string>('App Settings');

  // App Settings state (mocked for UI only)
  const [watermarkEnabled, setWatermarkEnabled] = useState(false);
  const [compressEnabled, setCompressEnabled] = useState(true);
  const [withdrawEnabled, setWithdrawEnabled] = useState(true);
  const [registrationBonusEnabled, setRegistrationBonusEnabled] = useState(true);
  const [registrationBonusAmount, setRegistrationBonusAmount] = useState('50');

  // Password visibility state (Admin Settings)
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);

  // Table data (mocked)
  const mockOnboarding = useMemo(
    () => [
      {
        id: '1',
        sortable: true,
        position: 1,
        image: '/app-icon.png',
        details: 'Find Your Dream Home',
      },
      {
        id: '2',
        sortable: true,
        position: 2,
        image: '/app-icon.png',
        details: 'Buy, Sell & Rent with Ease',
      },
    ],
    [],
  );

  const mockUserLevels = useMemo(
    () => [
      { id: '1', level: 1, coins: 10 },
      { id: '2', level: 2, coins: 30 },
      { id: '3', level: 3, coins: 70 },
      { id: '4', level: 4, coins: 100 },
      { id: '5', level: 5, coins: 300 },
      { id: '6', level: 6, coins: 700 },
      { id: '7', level: 7, coins: 1200 },
      { id: '8', level: 8, coins: 2000 },
      { id: '9', level: 9, coins: 3000 },
      { id: '10', level: 10, coins: 5500 },
    ],
    [],
  );

  const mockReportReasons = useMemo(
    () => [
      { id: '1', title: 'Copyright infringement' },
      { id: '2', title: 'Abusive Content' },
    ],
    [],
  );

  const mockWithdrawalGateways = useMemo(
    () => [
      { id: '1', title: 'PhonePay' },
      { id: '2', title: 'PayPa' },
      { id: '3', title: 'Paytm' },
    ],
    [],
  );

  const mockDeepARFilters = useMemo(
    () => [
      { id: '1', image: '/app-icon.png', title: 'Filter Title', file: 'Filter.mp4' },
      { id: '2', image: '/app-icon.png', title: 'Mask', file: 'Mask.m3u8' },
      { id: '3', image: '/app-icon.png', title: 'Structure', file: 'Structure.mp4' },
      { id: '4', image: '/app-icon.png', title: 'Snail', file: 'Snail.mp4' },
    ],
    [],
  );

  const renderTopTabs = () => (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      <div className="lg:w-72 flex flex-col gap-1.5 sticky top-24">
        {SETTINGS_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 text-left text-xs font-bold uppercase tracking-wide rounded-xl transition-all duration-200 ${
              activeTab === tab
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 translate-x-1'
                : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100 hover:border-purple-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 w-full">
        <PageCard title={activeTab.toUpperCase()} noPadding>
          <div className="p-6">
            {activeTab === 'App Settings' && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                  <div className="text-sm font-medium text-gray-400 leading-relaxed">
                    Make sure to set your currency and coin values correctly so the app behaves as expected across devices.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FieldCard label="Currency" value="USD" />
                  <FieldCard label="1 Coin Value" value="0.01" />
                  <FieldCard label="Min. Coin To Withdraw" value="1000" />
                  <FieldCard label="Help Email" type="email" value="support@kickskin.com" />
                  <ToggleCard
                    title="Compress Post/Story Videos"
                    description="Reduce file size before upload."
                    checked={compressEnabled}
                    onChange={setCompressEnabled}
                  />
                  <ToggleCard
                    title="Allow Withdrawn Of Coins"
                    description="Enable/Disable withdrawal feature."
                    checked={withdrawEnabled}
                    onChange={setWithdrawEnabled}
                  />
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <div className="w-1.5 h-4 bg-purple-600 rounded-full" />
                    <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-widest">Reward Settings</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ToggleCard
                      title="Registration Bonus Status"
                      description="Give coins to new users."
                      checked={registrationBonusEnabled}
                      onChange={setRegistrationBonusEnabled}
                    />
                    <div className="flex flex-col gap-1.5 bg-gray-50 rounded-xl border border-gray-100 p-4">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        Registration Bonus Amount (Coins)
                      </label>
                      <input
                        type="number"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-purple-500 outline-none bg-white transition-shadow focus:shadow-sm"
                        value={registrationBonusAmount}
                        onChange={(e) => setRegistrationBonusAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <div className="w-1.5 h-4 bg-purple-600 rounded-full" />
                    <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-widest">Watermark Settings</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ToggleCard
                      title="Watermark Videos"
                      description="Add logo to downloaded videos."
                      checked={watermarkEnabled}
                      onChange={setWatermarkEnabled}
                    />
                    <UploadBox label="Watermark Image" previewUrl="/app-icon.png" />
                  </div>
                </div>

                <div className="flex justify-start pt-2">
                  <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs shadow-lg shadow-purple-200">
                    Save
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'Limits' && (
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FieldCard label="Max. Post Upload/Day" value="99" />
                  <FieldCard label="Max. Series/Day" value="10" />
                  <FieldCard label="Max. Comments/Day" value="500" />
                  <FieldCard label="Max. Comment Reply/Day" value="500" />
                  <FieldCard label="Max. Post Pins" value="30" />
                  <FieldCard label="Max. Comment Pins" value="100" />
                  <FieldCard label="Max. Images Per Post" value="5" />
                  <FieldCard label="Max. User Links" value="10" />
                </div>
                <div className="flex justify-start pt-2 border-t border-gray-100">
                  <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                    Save
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'Livestream' && (
              <div className="flex flex-col gap-8">
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-widest">Rules</div>
                  <div className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                    Set minimum thresholds for viewers and followers. If a value is 0, that rule is treated as disabled.
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FieldCard label="Min. Followers needed to go Live" value="0" />
                  <FieldCard label="Min. Views required to continue Live" value="0" />
                  <FieldCard label="Time Out Minutes (if not get min. viewers)" value="5" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ToggleCard title="PK Battles" description="" checked={true} onChange={() => {}} />
                  <ToggleCard title="Deo Live Stream Status" description="" checked={false} onChange={() => {}} />
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                    <div className="w-1.5 h-4 bg-purple-600 rounded-full" />
                    <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-widest">Zego Cloud Settings</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FieldCard label="Zego Cloud App ID" value="2083978705" />
                    <FieldCard label="Zego Cloud App Sign" value="394c74c7fbd7b23f..." />
                  </div>
                </div>

                <div className="flex justify-start pt-2 border-t border-gray-100">
                  <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                    Save
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'GIPHY' && (
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ToggleCard title="GIF Supported" description="Allow users to use GIFs in chat." checked={true} onChange={() => {}} />
                  <FieldCard label="GIPHY API Key" value="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" />
                </div>
                <div className="flex justify-start pt-2 border-t border-gray-100">
                  <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                    Save
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'SightEngine' && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <ToggleCard title="Content Moderation" description="Automatically moderate images and videos using SightEngine." checked={false} onChange={() => {}} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FieldCard label="API User" value="1427853046" />
                  <FieldCard label="API Secret" value="WRP9.../wweu" />
                  <FieldCard label="Image Workflow ID" value="..." />
                  <FieldCard label="Video Workflow ID" value="..." />
                </div>

                <div className="flex justify-start pt-2 border-t border-gray-100">
                  <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                    Save
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'Admob' && (
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-gray-700">Android</div>
                      <Toggle checked={true} onChange={() => {}} />
                    </div>
                    <FieldCard label="Banner Ad Unit" value="" />
                    <FieldCard label="Interstitial Ad Unit" value="" />
                  </div>

                  <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-gray-700">iOS</div>
                      <Toggle checked={false} onChange={() => {}} />
                    </div>
                    <FieldCard label="Banner Ad Unit" value="" />
                    <FieldCard label="Interstitial Ad Unit" value="" />
                  </div>
                </div>

                <div className="flex justify-start pt-2 border-t border-gray-100">
                  <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                    Save
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'Onboarding' && (
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Onboarding</h2>
                  <div className="flex gap-3 items-center">
                    <SearchInput value="" onChange={() => {}} />
                    <Button variant="primary" className="!text-xs uppercase font-bold tracking-wider">
                      <span className="inline-flex items-center gap-2">
                        <Plus size={14} />
                        Add Onboarding
                      </span>
                    </Button>
                  </div>
                </div>

                <DataTable
                  headers={['Sortable', 'Position', 'Image', 'Details', 'Action']}
                  footer={<SettingsPaginationFooter total={mockOnboarding.length} />}
                >
                  {mockOnboarding.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <Toggle checked={item.sortable} onChange={() => {}} />
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-700">{item.position}</td>
                      <td className="px-6 py-4">
                        <img src={item.image} className="w-10 h-10 rounded object-cover border border-gray-100" alt="" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs font-bold text-gray-700">{item.details}</div>
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
              </div>
            )}

            {activeTab === 'User Levels' && (
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Show
                    <select className="border border-gray-200 rounded-lg px-2 py-1 focus:ring-2 focus:ring-purple-500/20 outline-none">
                      <option>10</option>
                    </select>
                    entries
                  </div>
                  <SearchInput value="" onChange={() => {}} />
                </div>

                <DataTable headers={['Level', 'Coins Collection', 'Action']} footer={<SettingsPaginationFooter total={mockUserLevels.length} />}>
                  {mockUserLevels.map((lvl) => (
                    <tr key={lvl.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-gray-700">{lvl.level}</td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-700">{lvl.coins}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-1 justify-end">
                          <IconButton icon={Eye} color="blue" />
                          <IconButton icon={Edit} color="green" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </DataTable>
              </div>
            )}

            {activeTab === 'Report Reasons' && (
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <SearchInput value="" onChange={() => {}} />
                  <Button variant="primary" className="!text-xs uppercase font-bold tracking-wider">
                    <span className="inline-flex items-center gap-2">
                      <Plus size={14} />
                      Add Report Reason
                    </span>
                  </Button>
                </div>

                <DataTable headers={['Title', 'Action']} footer={<SettingsPaginationFooter total={mockReportReasons.length} />}>
                  {mockReportReasons.map((r) => (
                    <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-xs font-bold text-gray-700">{r.title}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-1 justify-end">
                          <IconButton icon={Eye} color="blue" />
                          <IconButton icon={Edit} color="green" />
                          <IconButton icon={Trash2} color="red" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </DataTable>
              </div>
            )}

            {activeTab === 'Withdrawal Gateways' && (
              <div className="flex flex-col gap-6">
                <div className="flex justify-end pb-2 border-b border-gray-100">
                  <Button variant="primary" className="!text-xs uppercase font-bold tracking-wider">
                    <span className="inline-flex items-center gap-2">
                      <Plus size={14} />
                      Add Withdrawal Gateway
                    </span>
                  </Button>
                </div>

                <DataTable headers={['Title', 'Action']} footer={<SettingsPaginationFooter total={mockWithdrawalGateways.length} />}>
                  {mockWithdrawalGateways.map((g) => (
                    <tr key={g.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-700">{g.title}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-1 justify-end">
                          <IconButton icon={Eye} color="blue" />
                          <IconButton icon={Edit} color="green" />
                          <IconButton icon={Trash2} color="red" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </DataTable>
              </div>
            )}

            {activeTab === 'DeepAR Settings' && (
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div>
                    <div className="text-sm font-bold text-gray-700">Use DeepAR Camera (On-Simple Camera)</div>
                    <div className="text-[11px] text-gray-400 font-medium">Enable DeepAR camera integration for AR experiences.</div>
                  </div>
                  <Toggle checked={true} onChange={() => {}} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FieldCard label="DeepAR Android Key" value="" />
                  <FieldCard label="DeepAR IOS Keys" value="" />
                </div>

                <div className="flex justify-start pt-2 border-t border-gray-100">
                  <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                    Save
                  </Button>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3 flex-1">
                      <div className="w-1.5 h-4 bg-purple-600 rounded-full" />
                      <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-widest">DeepAR Filters</h3>
                    </div>
                    <div className="flex gap-3 items-center">
                      <SearchInput value="" onChange={() => {}} />
                      <Button variant="primary" className="!text-xs uppercase font-bold tracking-wider">
                        <span className="inline-flex items-center gap-2">
                          <Plus size={14} />
                          Add Filter
                        </span>
                      </Button>
                    </div>
                  </div>

                  <DataTable
                    headers={['Image', 'Title', 'File', 'Action']}
                    footer={<SettingsPaginationFooter total={mockDeepARFilters.length} />}
                  >
                    {mockDeepARFilters.map((f) => (
                      <tr key={f.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <img src={f.image} className="w-10 h-10 rounded object-cover border border-gray-100" alt="" />
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-xs font-bold text-gray-700">{f.title}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-[10px] font-bold text-gray-500 bg-gray-50 border border-gray-100 rounded px-2 py-1 inline-block">
                            {f.file}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-1 justify-end">
                            <IconButton icon={Eye} color="blue" />
                            <IconButton icon={Edit} color="green" />
                            <IconButton icon={Trash2} color="red" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </DataTable>
                </div>
              </div>
            )}

            {activeTab === 'Deeplink Settings' && (
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Deep Linking</h3>
                  <div className="flex gap-2">
                    <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                      Save
                    </Button>
                    <Button variant="success" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                      Check validation
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FieldCard label="URI Schema" value="kickskin://..." />
                  <FieldCard label="Play Store Download Link" value="https://..." />
                  <FieldCard label="App Store Download Link" value="https://..." />
                </div>

                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4 bg-gray-50 rounded-xl border border-gray-100 p-4">
                      <div className="text-xs font-extrabold text-gray-700 uppercase tracking-widest">Android</div>
                      <FieldCard label="Package Name" value="com.kickskin.app" />
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">SHA 256 Keys</label>
                        <textarea
                          rows={3}
                          defaultValue={'""\n""'}
                          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-purple-500 outline-none bg-white transition-shadow focus:shadow-sm font-mono"
                        />
                      </div>
                      <div className="flex justify-start gap-2">
                        <Button variant="secondary" className="!px-4 !py-2 uppercase font-bold tracking-widest text-xs">
                          + Add SHA
                        </Button>
                      </div>
                      <div className="flex gap-3 pt-1">
                        <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                          Save
                        </Button>
                        <Button variant="success" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                          Check validation
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 bg-gray-50 rounded-xl border border-gray-100 p-4">
                      <div className="text-xs font-extrabold text-gray-700 uppercase tracking-widest">iOS</div>
                      <FieldCard label="Bundle Id / Package Name" value="com.kickskin.app" />
                      <FieldCard label="Team Id" value="XXXXXXXXXX" />
                      <div className="flex gap-3 pt-1">
                        <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                          Save
                        </Button>
                        <Button variant="success" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                          Check validation
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Privacy Policy' && (
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center gap-3">
                  <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">Privacy Policy</div>
                  <Button variant="outline" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                    View
                  </Button>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100">
                    {['B', 'I', 'U', '•', '1.', '#', 'Link'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        className="w-9 h-8 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-[10px] font-bold text-gray-600"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <textarea
                    rows={14}
                    defaultValue={'<p><b>Privacy Policy</b></p>\n<p>We respect your privacy and protect user data for Kick Skin services.</p>'}
                    className="w-full px-4 py-3 text-sm focus:ring-1 focus:ring-purple-500 outline-none bg-white transition-shadow focus:shadow-sm font-mono"
                  />
                </div>

                <div className="flex justify-start pt-2 border-t border-gray-100">
                  <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                    Save
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'Terms Of Uses' && (
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center gap-3">
                  <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">Terms Of Uses</div>
                  <Button variant="outline" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                    View
                  </Button>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100">
                    {['B', 'I', 'U', '•', '1.', '#', 'Link'].map((t) => (
                      <button
                        key={t}
                        type="button"
                        className="w-9 h-8 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-[10px] font-bold text-gray-600"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <textarea
                    rows={14}
                    defaultValue={'<p><b>Terms of Use</b></p>\n<p>Placeholder terms text matching the screenshot layout.</p>'}
                    className="w-full px-4 py-3 text-sm focus:ring-1 focus:ring-purple-500 outline-none bg-white transition-shadow focus:shadow-sm font-mono"
                  />
                </div>

                <div className="flex justify-start pt-2 border-t border-gray-100">
                  <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                    Save
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'Admin Settings' && (
              <div className="flex flex-col gap-8">
                <div className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col gap-6">
                  <div className="flex justify-between items-center gap-4">
                    <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">Admin Settings</div>
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">
                      Save
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4">
                      <FieldCard label="Title" value="Kick Skin" />
                      <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                        <UploadBox label="Favicon" previewUrl="/app-icon.png" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                          <UploadBox label="Logo (Dark)" previewUrl="/app-icon.png" />
                        </div>
                        <div className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                          <UploadBox label="Logo (Light)" previewUrl="/app-icon.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-6 bg-white rounded-xl border border-gray-100 p-6">
                  <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">Password</div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Old Password</label>
                      <div className="relative">
                        <input
                          type={oldPasswordVisible ? 'text' : 'password'}
                          defaultValue=""
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-purple-500 outline-none bg-white transition-shadow focus:shadow-sm pr-10"
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          onClick={() => setOldPasswordVisible((v) => !v)}
                        >
                          {oldPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">New Password</label>
                      <div className="relative">
                        <input
                          type={newPasswordVisible ? 'text' : 'password'}
                          defaultValue=""
                          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-purple-500 outline-none bg-white transition-shadow focus:shadow-sm pr-10"
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          onClick={() => setNewPasswordVisible((v) => !v)}
                        >
                          {newPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start pt-2 border-t border-gray-100">
                    <Button variant="purple" className="!px-6 !py-2 uppercase font-bold tracking-widest text-xs">
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </PageCard>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg font-bold text-gray-700 uppercase tracking-wider">Settings</h1>
      {renderTopTabs()}
    </div>
  );
};

