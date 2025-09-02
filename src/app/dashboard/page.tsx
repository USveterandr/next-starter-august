'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // Expense state and management
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 1200, description: 'Monthly Mortgage', date: '2023-10-01', category: 'mortgage' },
    { id: 2, amount: 350, description: 'Car Payment', date: '2023-10-05', category: 'Car Loan' },
  ]);

  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);
  const [newExpense, setNewExpense] = useState({ amount: '', description: '', date: '', category: 'Food' });

  const expenseCategories = [
    'Food', 'Transport', 'Utilities', 'Entertainment', 'Healthcare', 
    'Shopping', 'Education', 'Travel', 'Other', 'mortgage', 'Car Loan', 
    'Car Insurance', 'Bank Loan', 'Credit Card payment'
  ];

  const handleAddExpense = () => {
    if (newExpense.amount && newExpense.description && newExpense.date && newExpense.category) {
      const expenseToAdd = {
        id: expenses.length > 0 ? Math.max(...expenses.map(e => e.id)) + 1 : 1,
        amount: parseFloat(newExpense.amount),
        description: newExpense.description,
        date: newExpense.date,
        category: newExpense.category,
      };
      setExpenses([...expenses, expenseToAdd]);
      setNewExpense({ amount: '', description: '', date: '', category: 'Food' }); // Reset form
      setShowAddExpenseForm(false); // Hide form
    }
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Mock data for dashboard
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Property Owner",
    profileCompletion: 85,
    propertiesListed: 3,
    propertiesSold: 1,
    inquiries: 12
  };

  const recentProperties = [
    {
      id: 1,
      title: "Luxury Villa in Punta Cana",
      location: "Punta Cana, Dominican Republic",
      price: "$1,250,000",
      status: "Active",
      views: 124,
      inquiries: 8
    },
    {
      id: 2,
      title: "Beachfront Condo in Boca Chica",
      location: "Boca Chica, Dominican Republic",
      price: "$350,000",
      status: "Pending",
      views: 89,
      inquiries: 5
    },
    {
      id: 3,
      title: "Mountain View Apartment in Santiago",
      location: "Santiago, Dominican Republic",
      price: "$180,000",
      status: "Sold",
      views: 210,
      inquiries: 15
    }
  ];

  const recentSearches = [
    {
      id: 1,
      query: "3 bedroom villa in Punta Cana",
      date: "2023-06-15",
      results: 12
    },
    {
      id: 2,
      query: "Beachfront property in Bavaro",
      date: "2023-06-10",
      results: 8
    }
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
                <Link href="/dashboard" className="border-gold text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/expenses" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Expenses
                </Link>
                <Link href="/properties" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
                      {userData.name.charAt(0)}
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
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Welcome back, {userData.name}
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <nav className="-mb-px flex space-x-8">
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
              onClick={() => setActiveTab('expenses')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'expenses'
                  ? 'border-gold text-gold'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              Expenses
            </button>
            <button
              onClick={() => setActiveTab('properties')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'properties'
                  ? 'border-gold text-gold'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              My Properties
            </button>
            <button
              onClick={() => setActiveTab('searches')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'searches'
                  ? 'border-gold text-gold'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              Saved Searches
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-gold text-gold'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              Settings
            </button>
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-gold rounded-md p-3">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Properties Listed</dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900 dark:text-white">{userData.propertiesListed}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-gold rounded-md p-3">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Properties Sold</dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900 dark:text-white">{userData.propertiesSold}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-gold rounded-md p-3">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Inquiries</dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900 dark:text-white">{userData.inquiries}</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-gold rounded-md p-3">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Profile Completion</dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900 dark:text-white">{userData.profileCompletion}%</div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Completion */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg mb-8">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Complete your profile</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
                  <p>
                    Complete your profile to get personalized property recommendations and improve your visibility to potential buyers.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-gold h-2.5 rounded-full" style={{ width: `${userData.profileCompletion}%` }}></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <span>0%</span>
                    <span>{userData.profileCompletion}%</span>
                    <span>100%</span>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                  >
                    Complete Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Properties Tab */}
        {activeTab === 'properties' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">My Properties</h2>
              <Link
                href="/list-property"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
              >
                Add New Property
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentProperties.map((property) => (
                  <li key={property.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gold truncate">
                          {property.title}
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            property.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : property.status === 'Pending' 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : 'bg-gray-100 text-gray-800'
                          }`}>
                            {property.status}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <div className="mr-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {property.location}
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                            </svg>
                            {property.price}
                          </div>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                          <div className="flex mr-4">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            {property.views} views
                          </div>
                          <div className="flex">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                            </svg>
                            {property.inquiries} inquiries
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Saved Searches Tab */}
        {activeTab === 'searches' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Saved Searches</h2>
              <Link
                href="/search"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
              >
                New Search
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentSearches.map((search) => (
                  <li key={search.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gold truncate">
                          {search.query}
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {search.date}
                          </div>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                          <div className="flex">
                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                            </svg>
                            {search.results} results
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Expenses Tab */}
        {activeTab === 'expenses' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">My Expenses</h2>
              <button
                onClick={() => setShowAddExpenseForm(!showAddExpenseForm)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
              >
                {showAddExpenseForm ? 'Cancel' : 'Add Expense'}
              </button>
            </div>

            {showAddExpenseForm && (
              <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-8">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Add New Expense</h3>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Amount ($)
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          id="amount"
                          name="amount"
                          value={newExpense.amount}
                          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                          className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Category
                      </label>
                      <div className="mt-1">
                        <select
                          id="category"
                          name="category"
                          value={newExpense.category}
                          onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                          className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                        >
                          {expenseCategories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Description
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="description"
                          name="description"
                          value={newExpense.description}
                          onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                          className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                          placeholder="What is this expense for?"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Date
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={newExpense.date}
                          onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                          className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={handleAddExpense}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                    >
                      Add Expense
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {expenses.length > 0 ? (
                  expenses.map((expense) => (
                    <li key={expense.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="min-w-0 flex-1 flex items-center">
                            <div className="flex-shrink-0 bg-gold rounded-md p-3">
                              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="min-w-0 flex-1 px-4">
                              <p className="text-sm font-medium text-gold truncate">${expense.amount.toFixed(2)} - {expense.description}</p>
                              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                <span className="inline-flex items-center">
                                  <svg className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                  </svg>
                                  {expense.date}
                                </span>
                                <span className="mx-2">•</span>
                                <span className="inline-flex items-center">
                                  <svg className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                                  {expense.category}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <button
                              onClick={() => handleDeleteExpense(expense.id)}
                              className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 focus:outline-none"
                            >
                              <span className="sr-only">Delete</span>
                              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <li>
                    <div className="px-4 py-4 sm:px-6 text-center text-sm text-gray-500 dark:text-gray-400">
                      No expenses recorded yet.
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Account Settings</h2>
            
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Profile Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
                  Update your personal information and preferences.
                </p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        defaultValue={userData.name.split(' ')[0]}
                        className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        defaultValue={userData.name.split(' ')[1] || ''}
                        className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        defaultValue={userData.email}
                        className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Role
                    </label>
                    <div className="mt-1">
                      <select
                        id="role"
                        name="role"
                        defaultValue={userData.role}
                        className="shadow-sm focus:ring-gold focus:border-gold block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      >
                        <option>Property Owner</option>
                        <option>Buyer</option>
                        <option>Renter</option>
                        <option>Investor</option>
                        <option>Real Estate Agent</option>
                        <option>Lawyer</option>
                        <option>Notary Public</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
