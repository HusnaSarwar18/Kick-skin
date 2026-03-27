import React from 'react';
import { PageCard, Button, IconButton } from './UI';
import { Edit, Trash2 } from 'lucide-react';
import { MOCK_GIFTS } from '../mockData';

export const GiftsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-700 uppercase tracking-wider">Gifts</h1>
        <Button variant="primary" className="!text-xs uppercase font-bold tracking-wider">Add Gift</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {MOCK_GIFTS.map(gift => (
          <div key={gift.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center text-center gap-3 group relative hover:shadow-md transition-shadow">
            <div className="w-full aspect-square bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={gift.image} className="w-full h-full object-contain p-2" alt="" />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="text-sm font-bold text-gray-700">{gift.title}</div>
              <div className="flex items-center justify-center gap-1">
                <div className="w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center text-[8px] text-white font-bold">★</div>
                <div className="text-xs font-bold text-purple-600 tracking-tight">{gift.price} Coins</div>
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <IconButton icon={Edit} color="green" />
              <IconButton icon={Trash2} color="red" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
