import React, { useState } from 'react';
import { PageCard, Button, Toggle } from './UI';

const SETTINGS_TABS = [
  'App Settings', 'Limits', 'Livestream', 'GIPHY', 'SightEngine', 'Admob', 'Onboarding', 'User Levels', 'Report Reasons', 'Withdrawal Gateways', 'DeepAR Settings', 'Deeplink Settings', 'Privacy Policy', 'Terms Of Uses', 'Admin Settings'
];

const OldSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('App Settings');

  const renderField = (label: string, type: string = 'text', defaultValue: string = '', helper?: string) => (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</label>
      <input 
        type={type} 
        defaultValue={defaultValue} 
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-purple-500 outline-none bg-white transition-shadow focus:shadow-sm" 
      />
      {helper && <span className="text-[10px] text-gray-400 italic">{helper}</span>}
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-lg font-bold text-gray-700 uppercase tracking-wider">Settings</h1>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="lg:w-72 flex flex-col gap-1.5 sticky top-24">
          {SETTINGS_TABS.map(tab => (
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
                <div className="flex flex-col gap-10">
                  {/* App Settings Section */}
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                      <div className="w-1.5 h-4 bg-purple-600 rounded-full"></div>
                      <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-widest">App Settings</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {renderField('Currency', 'text', 'USD')}
                      {renderField('1 Coin Value', 'number', '0.01')}
                      {renderField('Min. Coins To Withdraw', 'number', '1000')}
                      {renderField('Help Email', 'email', 'support@kickskin.com')}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div>
                          <div className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">Compress Post/Story Videos</div>
                          <div className="text-[10px] text-gray-400 font-medium">Reduce file size before upload.</div>
                        </div>
                        <Toggle checked={true} />
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div>
                          <div className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">Allow Withdrawal Of Coins</div>
                          <div className="text-[10px] text-gray-400 font-medium">Enable/Disable withdrawal feature.</div>
                        </div>
                        <Toggle checked={true} />
                      </div>
                    </div>
                  </div>

                  {/* Reward Settings Section */}
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                      <div className="w-1.5 h-4 bg-purple-600 rounded-full"></div>
                      <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-widest">Reward Settings</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div>
                          <div className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">Registration Bonus Status</div>
                          <div className="text-[10px] text-gray-400 font-medium">Give coins to new users.</div>
                        </div>
                        <Toggle checked={true} />
                      </div>
                      {renderField('Registration Bonus Amount', 'number', '50')}
                    </div>
                  </div>

                  {/* Watermark Settings Section */}
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                      <div className="w-1.5 h-4 bg-purple-600 rounded-full"></div>
                      <h3 className="text-xs font-extrabold text-gray-700 uppercase tracking-widest">Watermark Settings</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div>
                          <div className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">Watermark Videos</div>
                          <div className="text-[10px] text-gray-400 font-medium">Add logo to downloaded videos.</div>
                        </div>
                        <Toggle checked={false} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Watermark Image</label>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-400 uppercase overflow-hidden">
                            <img src="/app-icon.png" className="w-full h-full object-cover" alt="Watermark" />
                          </div>
                          <Button variant="secondary" className="!text-[10px] !px-3 !py-1.5 uppercase font-bold">Upload New</Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-100">
                    <Button variant="purple" className="!px-10 !py-3 uppercase font-bold tracking-widest text-xs shadow-lg shadow-purple-200">Save All Settings</Button>
                  </div>
                </div>
              )}

              {activeTab === 'Limits' && (
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderField('Max Post Length', 'number', '500', 'Maximum characters allowed in a post')}
                    {renderField('Max Video Duration', 'number', '60', 'Maximum duration in seconds')}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderField('Min Withdrawal Amount', 'number', '10', 'Minimum USD to withdraw')}
                    {renderField('Coin Conversion Rate', 'number', '100', '1 USD = X Coins')}
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save Limits</Button>
                  </div>
                </div>
              )}

              {activeTab === 'Livestream' && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <div className="text-sm font-bold text-gray-700">Enable Livestream</div>
                      <div className="text-[11px] text-gray-400 font-medium">Allow users to go live in the application.</div>
                    </div>
                    <Toggle checked={true} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderField('Agora App ID', 'text', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')}
                    {renderField('Agora App Certificate', 'text', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')}
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save Livestream</Button>
                  </div>
                </div>
              )}

              {activeTab === 'GIPHY' && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <div className="text-sm font-bold text-gray-700">Enable GIPHY</div>
                      <div className="text-[11px] text-gray-400 font-medium">Allow users to search and use GIFs from GIPHY.</div>
                    </div>
                    <Toggle checked={true} />
                  </div>
                  {renderField('GIPHY API Key', 'text', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')}
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save GIPHY</Button>
                  </div>
                </div>
              )}

              {activeTab === 'SightEngine' && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <div className="text-sm font-bold text-gray-700">Enable Content Moderation</div>
                      <div className="text-[11px] text-gray-400 font-medium">Automatically moderate images and videos using SightEngine.</div>
                    </div>
                    <Toggle checked={false} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderField('API User', 'text', 'xxxxxxxxxx')}
                    {renderField('API Secret', 'text', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')}
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save SightEngine</Button>
                  </div>
                </div>
              )}

              {activeTab === 'Admob' && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 mb-2">
                    <div>
                      <div className="text-sm font-bold text-gray-700">Enable Ads</div>
                      <div className="text-[11px] text-gray-400 font-medium">Show Google Admob ads in the application.</div>
                    </div>
                    <Toggle checked={true} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderField('Android App ID', 'text', 'ca-app-pub-xxxxxxxxxxxxxxxx~xxxxxxxxxx')}
                    {renderField('iOS App ID', 'text', 'ca-app-pub-xxxxxxxxxxxxxxxx~xxxxxxxxxx')}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderField('Banner Ad Unit ID', 'text', 'ca-app-pub-xxxxxxxxxxxxxxxx/xxxxxxxxxx')}
                    {renderField('Interstitial Ad Unit ID', 'text', 'ca-app-pub-xxxxxxxxxxxxxxxx/xxxxxxxxxx')}
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save Admob</Button>
                  </div>
                </div>
              )}

              {activeTab === 'Onboarding' && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <div className="text-sm font-bold text-gray-700">Show Onboarding</div>
                      <div className="text-[11px] text-gray-400 font-medium">Show onboarding screens to new users.</div>
                    </div>
                    <Toggle checked={true} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderField('Onboarding Title 1', 'text', 'Welcome to Kick Skin')}
                    {renderField('Onboarding Title 2', 'text', 'Connect with Friends')}
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save Onboarding</Button>
                  </div>
                </div>
              )}

              {activeTab === 'User Levels' && (
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {renderField('Level 1 Coins', 'number', '0')}
                    {renderField('Level 2 Coins', 'number', '1000')}
                    {renderField('Level 3 Coins', 'number', '5000')}
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save Levels</Button>
                  </div>
                </div>
              )}

              {activeTab === 'Report Reasons' && (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    {['Spam', 'Harassment', 'Inappropriate Content', 'Hate Speech'].map((reason, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="text-xs font-bold text-gray-400 w-6">0{i+1}</span>
                        <input defaultValue={reason} className="flex-1 bg-transparent border-none outline-none text-sm font-medium text-gray-700" />
                        <Button variant="secondary" className="!text-[10px] !px-2 !py-1">Remove</Button>
                      </div>
                    ))}
                    <Button variant="secondary" className="!text-xs uppercase font-bold tracking-wider w-fit">Add New Reason</Button>
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save Reasons</Button>
                  </div>
                </div>
              )}

              {activeTab === 'Withdrawal Gateways' && (
                <div className="flex flex-col gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs italic">PP</div>
                        <div>
                          <div className="text-sm font-bold text-gray-700">PayPal</div>
                          <div className="text-[11px] text-gray-400 font-medium">Global payment gateway.</div>
                        </div>
                      </div>
                      <Toggle checked={true} />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xs">ST</div>
                        <div>
                          <div className="text-sm font-bold text-gray-700">Stripe</div>
                          <div className="text-[11px] text-gray-400 font-medium">Credit/Debit card payments.</div>
                        </div>
                      </div>
                      <Toggle checked={false} />
                    </div>
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save Gateways</Button>
                  </div>
                </div>
              )}

              {activeTab === 'DeepAR Settings' && (
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <div className="text-sm font-bold text-gray-700">Enable AR Filters</div>
                      <div className="text-[11px] text-gray-400 font-medium">Allow users to use AR filters in camera.</div>
                    </div>
                    <Toggle checked={true} />
                  </div>
                  {renderField('DeepAR License Key', 'text', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')}
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save DeepAR</Button>
                  </div>
                </div>
              )}

              {activeTab === 'Deeplink Settings' && (
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderField('App Domain', 'text', 'kickskin.com')}
                    {renderField('Deep Link Prefix', 'text', 'kickskin://')}
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save Deeplink</Button>
                  </div>
                </div>
              )}

              {activeTab === 'Privacy Policy' && (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Policy Content (HTML)</label>
                    <textarea 
                      rows={12}
                      defaultValue="<h1>Privacy Policy</h1><p>Your privacy is important to us...</p>"
                      className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-purple-500 outline-none bg-white transition-shadow focus:shadow-sm font-mono"
                    />
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save Privacy Policy</Button>
                  </div>
                </div>
              )}

              {activeTab === 'Terms Of Uses' && (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Terms Content (HTML)</label>
                    <textarea 
                      rows={12}
                      defaultValue="<h1>Terms of Use</h1><p>By using this app, you agree to...</p>"
                      className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-purple-500 outline-none bg-white transition-shadow focus:shadow-sm font-mono"
                    />
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Save Terms</Button>
                  </div>
                </div>
              )}

              {activeTab === 'Admin Settings' && (
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderField('Admin Username', 'text', 'admin')}
                    {renderField('Admin Password', 'password', '********')}
                  </div>
                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <Button variant="purple" className="!px-8 !py-2.5 uppercase font-bold tracking-widest text-xs">Update Admin</Button>
                  </div>
                </div>
              )}
            </div>
          </PageCard>
        </div>
      </div>
    </div>
  );
};

export { SettingsPage } from './SettingsPageRedesigned';
