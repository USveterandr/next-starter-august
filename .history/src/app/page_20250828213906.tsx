'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Logo - Globe with Dominican Republic in gold */}
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full bg-blue-100"></div>
              {/* Simplified world map representation */}
              <div className="absolute inset-1 rounded-full bg-gray-300"></div>
              {/* Dominican Republic in gold */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-3 bg-gold rounded-sm"></div>
            </div>
            <h1 className="text-2xl font-bold gold-text">Meridian</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/properties" className="text-gray-600 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors">
              Properties
            </Link>
            <Link href="/agents" className="text-gray-600 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors">
              Agents
            </Link>
            <Link href="/invest" className="text-gray-600 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors">
              Invest
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors">
              EN/ES
            </button>
            <Link href="/login" className="px-4 py-2 text-gray-700 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors">
              Login
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-gold text-white rounded-md hover:bg-gold-dark transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Real Estate Investment Platform
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Connecting property owners with buyers, renters, and investors in the Dominican Republic and beyond.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/properties" className="px-8 py-3 bg-gold text-white text-center rounded-md hover:bg-gold-dark transition-colors font-medium">
                Browse Properties
              </Link>
              <Link href="/list-property" className="px-8 py-3 border-2 border-gold text-gold text-center rounded-md hover:bg-gold hover:text-white transition-colors font-medium">
                List Your Property
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                <span className="text-gray-500">Property Search Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Meridian?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-sm">
              <div className="text-gold text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-3">Premium Listings</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access exclusive properties in the Dominican Republic and USA with detailed information and high-quality photos.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-sm">
              <div className="text-gold text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-3">Direct Communication</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect directly with property owners, agents, lawyers, and notaries through our secure messaging system.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-sm">
              <div className="text-gold text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold mb-3">Smart Notifications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get real-time alerts for new listings that match your preferences and investment criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Meridian Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center mb-10 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">List Your Property</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                Create detailed listings with photos, features, and location details
              </p>
            </div>
            <div className="text-center mb-10 md:mb-0">
              <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Find Your Match</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                Search with advanced filters or post your requirements to find perfect matches
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Connect & Transact</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                Communicate directly with all parties and complete transactions securely
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 rounded-full bg-blue-100"></div>
                  <div className="absolute inset-1 rounded-full bg-gray-300"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-2 bg-gold rounded-sm"></div>
                </div>
                <h2 className="text-xl font-bold gold-text">Meridian</h2>
              </div>
              <p className="text-gray-400">
                The definitive real estate platform for the Dominican Republic and beyond.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Owners</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/list-property" className="hover:text-gold transition-colors">List Property</Link></li>
                <li><Link href="/property-management" className="hover:text-gold transition-colors">Manage Listings</Link></li>
                <li><Link href="/owner-dashboard" className="hover:text-gold transition-colors">Owner Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Buyers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/properties" className="hover:text-gold transition-colors">Browse Properties</Link></li>
                <li><Link href="/search" className="hover:text-gold transition-colors">Advanced Search</Link></li>
                <li><Link href="/post-requirements" className="hover:text-gold transition-colors">Post Requirements</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Meridian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}