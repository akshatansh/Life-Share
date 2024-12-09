import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock } from 'lucide-react';
import { BloodRequestForm } from '../components/find/BloodRequestForm';
import { Card } from '../components/common/Card';

export function Find() {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Blood Donors</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Submit your blood requirement details and we'll help you find matching donors in your area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6">
            <Search className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">Quick Search</h3>
            <p className="text-gray-600 text-center">Find matching donors instantly</p>
          </Card>
          <Card className="p-6">
            <MapPin className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">Local Network</h3>
            <p className="text-gray-600 text-center">Connect with donors in your area</p>
          </Card>
          <Card className="p-6">
            <Clock className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-center">Emergency assistance available</p>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto">
          <div className="bg-red-500 p-4">
            <h2 className="text-2xl font-bold text-white text-center">Submit Blood Request</h2>
          </div>
          <BloodRequestForm />
        </Card>
      </motion.div>
    </div>
  );
}