'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SearchPage() {
  const [searchType, setSearchType] = useState('properties'); // 'properties' or 'requirements'
  const [propertyFilters, setPropertyFilters] = useState({
    location: '',
    propertyType: 'all',
    listingType: 'all',
    priceMin: '',
    priceMax: '',
    bedrooms: 'all',
    bathrooms: 'all',
    features: [] as string[]
  });
  
  const [requirementFilters, setRequirementFilters] = useState({
    location: '',
    propertyType: 'all',
    listingType: 'all',
    budgetMin: '',
    budgetMax: '',
    bedrooms: 'all',
    bathrooms: 'all',
    features: [] as string[]
  });

  const handlePropertyFilterChange = (name: string, value: string | string[]) => {
    setPropertyFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRequirementFilterChange = (name: string, value: string | string[]) => {
    setRequirementFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleFeature = (feature: string, isProperty: boolean = true) => {
    if (isProperty) {
      setPropertyFilters(prev => {
        const newFeatures = prev.features.includes(feature)
          ? prev.features.filter(f => f !== feature)
          : [...prev.features, feature];
        return { ...prev, features: newFeatures };
      });
    } else {
      setRequirementFilters(prev => {
        const newFeatures = prev.features.includes(feature)
          ? prev.features.filter(f => f !== feature)
          : [...prev.features, feature];
        return { ...prev, features: newFeatures };
      });
    }
  };

  const allFeatures = [
    'Air Conditioning',
    'Heating',
    'Fireplace',
    'Pool',
    'Balcony',
    'Washer/Dryer',
    'Dishwasher',
    'Gym',
    'Security System',
    'Garden',
    'Parking'
  ];

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
                <Link href="/properties" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Properties
                </Link>
                <Link href="/messages" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Messages
                </Link>
                <Link href="/search" className="border-gold text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Search</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Find your perfect property or post your requirements
          </p>
        </div>

        {/* Search Type Toggle */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setSearchType('properties')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  searchType === 'properties'
                    ? 'border-gold text-gold'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                Search Properties
              </button>
              <button
                onClick={() => setSearchType('requirements')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  searchType === 'requirements'
                    ? 'border-gold text-gold'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
              >
                Post Requirements
              </button>
            </nav>
          </div>
        </div>

        {/* Search Properties Form */}
        {searchType === 'properties' && (
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Search Properties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={propertyFilters.location}
                    onChange={(e) => handlePropertyFilterChange('location', e.target.value)}
                    className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="City, region, or specific address"
                  />
                </div>
                
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    value={propertyFilters.propertyType}
                    onChange={(e) => handlePropertyFilterChange('propertyType', e.target.value)}
                    className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">All Types</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Condo">Condo</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Villa">Villa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Land">Land</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="listingType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Listing Type
                  </label>
                  <select
                    id="listingType"
                    value={propertyFilters.listingType}
                    onChange={(e) => handlePropertyFilterChange('listingType', e.target.value)}
                    className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">For Sale or Rent</option>
                    <option value="Sale">For Sale</option>
                    <option value="Rent">For Rent</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="priceMin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Min Price (USD)
                    </label>
                    <input
                      type="number"
                      id="priceMin"
                      value={propertyFilters.priceMin}
                      onChange={(e) => handlePropertyFilterChange('priceMin', e.target.value)}
                      className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      placeholder="e.g., 100000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="priceMax" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Max Price (USD)
                    </label>
                    <input
                      type="number"
                      id="priceMax"
                      value={propertyFilters.priceMax}
                      onChange={(e) => handlePropertyFilterChange('priceMax', e.target.value)}
                      className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      placeholder="e.g., 500000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Bedrooms
                  </label>
                  <select
                    id="bedrooms"
                    value={propertyFilters.bedrooms}
                    onChange={(e) => handlePropertyFilterChange('bedrooms', e.target.value)}
                    className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Bathrooms
                  </label>
                  <select
                    id="bathrooms"
                    value={propertyFilters.bathrooms}
                    onChange={(e) => handlePropertyFilterChange('bathrooms', e.target.value)}
                    className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Features & Amenities
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {allFeatures.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <input
                        id={`prop-${feature}`}
                        type="checkbox"
                        checked={propertyFilters.features.includes(feature)}
                        onChange={() => toggleFeature(feature, true)}
                        className="h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
                      />
                      <label htmlFor={`prop-${feature}`} className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                >
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Post Requirements Form */}
        {searchType === 'requirements' && (
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Post Your Requirements</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Tell us what you're looking for and we'll notify you when matching properties are listed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="req-location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Preferred Location
                  </label>
                  <input
                    type="text"
                    id="req-location"
                    value={requirementFilters.location}
                    onChange={(e) => handleRequirementFilterChange('location', e.target.value)}
                    className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    placeholder="City, region, or specific area"
                  />
                </div>
                
                <div>
                  <label htmlFor="req-propertyType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Property Type
                  </label>
                  <select
                    id="req-propertyType"
                    value={requirementFilters.propertyType}
                    onChange={(e) => handleRequirementFilterChange('propertyType', e.target.value)}
                    className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">Any Type</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Condo">Condo</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Villa">Villa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Land">Land</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="req-listingType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Listing Type
                  </label>
                  <select
                    id="req-listingType"
                    value={requirementFilters.listingType}
                    onChange={(e) => handleRequirementFilterChange('listingType', e.target.value)}
                    className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">For Sale or Rent</option>
                    <option value="Sale">For Sale</option>
                    <option value="Rent">For Rent</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budgetMin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Min Budget (USD)
                    </label>
                    <input
                      type="number"
                      id="budgetMin"
                      value={requirementFilters.budgetMin}
                      onChange={(e) => handleRequirementFilterChange('budgetMin', e.target.value)}
                      className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      placeholder="e.g., 100000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="budgetMax" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Max Budget (USD)
                    </label>
                    <input
                      type="number"
                      id="budgetMax"
                      value={requirementFilters.budgetMax}
                      onChange={(e) => handleRequirementFilterChange('budgetMax', e.target.value)}
                      className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      placeholder="e.g., 500000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="req-bedrooms" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Bedrooms
                  </label>
                  <select
                    id="req-bedrooms"
                    value={requirementFilters.bedrooms}
                    onChange={(e) => handleRequirementFilterChange('bedrooms', e.target.value)}
                    className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="req-bathrooms" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Bathrooms
                  </label>
                  <select
                    id="req-bathrooms"
                    value={requirementFilters.bathrooms}
                    onChange={(e) => handleRequirementFilterChange('bathrooms', e.target.value)}
                    className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Desired Features & Amenities
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {allFeatures.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <input
                        id={`req-${feature}`}
                        type="checkbox"
                        checked={requirementFilters.features.includes(feature)}
                        onChange={() => toggleFeature(feature, false)}
                        className="h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
                      />
                      <label htmlFor={`req-${feature}`} className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                >
                  Post Requirements
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}