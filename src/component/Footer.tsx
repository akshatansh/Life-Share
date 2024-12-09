import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span className="text-gray-600">by</span>
            <span className="font-semibold text-gray-900">Pintu Kumar</span>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} LifeShare. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}