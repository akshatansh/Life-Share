import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Phone } from 'lucide-react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';

export function About() {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About LifeShare</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're on a mission to make blood donation accessible to everyone and save lives through our community of donors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Blood donation center"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2020, LifeShare has been at the forefront of revolutionizing blood donation. 
              We believe that every person should have access to safe blood when they need it most.
            </p>
            <p className="text-gray-600">
              Through our network of dedicated donors and partnerships with leading healthcare facilities, 
              we've helped save thousands of lives across the country.
            </p>
            <Button variant="primary">Join Our Mission</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <Card className="p-6">
            <Heart className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">100K+</h3>
            <p className="text-gray-600 text-center">Lives Saved</p>
          </Card>
          <Card className="p-6">
            <Users className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">50K+</h3>
            <p className="text-gray-600 text-center">Active Donors</p>
          </Card>
          <Card className="p-6">
            <Award className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">200+</h3>
            <p className="text-gray-600 text-center">Partner Hospitals</p>
          </Card>
          <Card className="p-6">
            <Phone className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-2">24/7</h3>
            <p className="text-gray-600 text-center">Support Available</p>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-gray-600 mb-6">
            Whether you're a donor, volunteer, or healthcare partner, there are many ways to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary">Become a Donor</Button>
            <Button variant="outline">Partner With Us</Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}