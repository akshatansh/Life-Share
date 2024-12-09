import React from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold text-gray-900">LifeShare</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/donate">Donate</NavLink>
            <NavLink to="/find">Find Blood</NavLink>
            <NavLink to="/about">About</NavLink>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/donate">Donate</MobileNavLink>
            <MobileNavLink to="/find">Find Blood</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>
            <button className="w-full text-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
              Register Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-red-500 transition-colors font-medium"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 transition-colors"
    >
      {children}
    </Link>
  );
}