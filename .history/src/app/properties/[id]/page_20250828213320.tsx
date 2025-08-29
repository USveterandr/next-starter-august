'use client';

import Link from 'next/link';
import { useState } from 'react';

// Mock property data
const property = {
  id: 1,
  title: "Luxury Villa in Punta Cana",
  location: "Punta Cana, Dominican Republic",
  price: "$1,250,000",
  type: "Villa",
  bedrooms: 5,
  bathrooms: 4,
  area: "450 sqm",
  yearBuilt: 2020,
  parking: 3,
  description: "This stunning luxury villa is located in the exclusive area of Punta Cana, offering breathtaking ocean views and direct beach access. The property features 5 spacious bedrooms, a modern kitchen with high-end appliances, a private pool, and a landscaped garden. Perfect for families or as an investment property.",
  features: [
    "Ocean View",
    "Private Pool",
    "Garden",
    "Garage",
    "Air Conditioning",
    "Modern Kitchen",
    "Balcony",
    "Security System"
  ],
  agent: {
    name: "Maria Rodriguez",
    phone: "+1 (809) 123-4567",
    email: "maria.rodriguez@meridian.com",
    image: "/agent.jpg"
  }
};

export default function PropertyDetailPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 rounded-full bg-blue-100"></div>
                  <div className="absolute inset-1 rounded-full bg-gray-300"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-2 bg-gold rounded-sm"></div>
                </div>
                <span className="ml-2 text-xl font-bold gold-text">Meridian</span>
              </div>
              <nav className="ml-6 flex space-x-8">
                <Link href="/dashboard" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/properties" className="border-gold text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Properties
                </Link>
                <Link href="/messages" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Messages
                </Link>
                <Link href="/search" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Search
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <button className="bg-gray-100 dark:bg-gray-700 p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="flex text-sm rounded-full focus:outline-none">
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-gold flex items-center justify-center text-white font-medium">
                      JD
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gold dark:text-gray-400 dark:hover:text-white">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <Link href="/properties" className="ml-1 text-sm font-medium text-gray-700 hover:text-gold dark:text-gray-400 dark:hover:text-white md:ml-2">
                  Properties
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-2">
                  {property.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Images */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 border-2 border-dashed w-full h-96 flex items-center justify-center">
                <span className="text-gray-500">Main Property Image</span>
              </div>
              
              <div className="grid grid-cols-4 gap-2 p-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-gray-200 border-2 border-dashed rounded w-full h-24 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Image {item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Agent */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden sticky top-8">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{property.price}</h3>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="text-gray-400 hover:text-red-500 focus:outline-none"
                  >
                    {isFavorite ? (
                      <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mt-1">{property.location}</p>
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Bedrooms</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{property.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Bathrooms</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{property.bathrooms}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Area</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{property.area}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                  >
                    Schedule a Tour
                  </button>
                  
                  <button
                    type="button"
                    className="w-full mt-3 inline-flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                  >
                    Contact Agent
                  </button>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 p-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Contact Agent</h4>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Agent</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-sm font-medium text-gray-900 dark:text-white">{property.agent.name}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Real Estate Agent</p>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {property.agent.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <svg className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {property.agent.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Property Details */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-gold text-gold'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'features'
                    ? 'border-gold text-gold'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab('location')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'location'
                    ? 'border-gold text-gold'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                Location
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Description</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {property.description}
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-6">Property Details</h3>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                    <span className="text-gray-600 dark:text-gray-400">Property Type</span>
                    <span className="font-medium text-gray-900 dark:text-white">{property.type}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                    <span className="text-gray-600 dark:text-gray-400">Year Built</span>
                    <span className="font-medium text-gray-900 dark:text-white">{property.yearBuilt}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                    <span className="text-gray-600 dark:text-gray-400">Bedrooms</span>
                    <span className="font-medium text-gray-900 dark:text-white">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                    <span className="text-gray-600 dark:text-gray-400">Bathrooms</span>
                    <span className="font-medium text-gray-900 dark:text-white">{property.bathrooms}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                    <span className="text-gray-600 dark:text-gray-400">Area</span>
                    <span className="font-medium text-gray-900 dark:text-white">{property.area}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-2">
                    <span className="text-gray-600 dark:text-gray-400">Parking Spaces</span>
                    <span className="font-medium text-gray-900 dark:text-white">{property.parking}</span>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'features' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Features & Amenities</h3>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2 text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'location' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {property.location}
                </p>
                
                <div className="mt-6 bg-gray-200 border-2 border-dashed rounded-lg w-full h-64 flex items-center justify-center">
                  <span className="text-gray-500">Map View</span>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-md font-medium text-gray-900 dark:text-white">Nearby Places</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <svg className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Beach - 200 meters
                    </li>
                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <svg className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Golf Course - 1.5 km
                    </li>
                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <svg className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Shopping Center - 3 km
                    </li>
                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <svg className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      International Airport - 15 km
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}