import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart } from 'lucide-react';
import { DonationForm } from '../components/donate/DonationForm';
import { Card } from '../components/common/Card';

export function Donate() {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Donate Blood, Save Lives</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your donation can save up to three lives. Schedule your donation appointment today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6">
            <Clock className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">Quick Process</h3>
            <p className="text-gray-600 text-center">The donation process takes only 30-45 minutes</p>
          </Card>
          <Card className="p-6">
            <Calendar className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">Flexible Schedule</h3>
            <p className="text-gray-600 text-center">Choose a time that works best for you</p>
          </Card>
          <Card className="p-6">
            <Heart className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">Save Lives</h3>
            <p className="text-gray-600 text-center">Make a difference in your community</p>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto">
          <div className="bg-red-500 p-4">
            <h2 className="text-2xl font-bold text-white text-center">Schedule Your Donation</h2>
          </div>
          <DonationForm />
        </Card>
      </motion.div>
    </div>
  );
}