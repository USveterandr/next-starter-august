'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function SignUpSuccessPage() {
  useEffect(() => {
    // In a real application, you would verify the user's email here
    // For now, we'll just simulate a successful registration
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
        <div>
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <svg className="h-10 w-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Account Created Successfully!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            Welcome to Meridian - The Premium Real Estate Investment Platform
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="rounded-md bg-blue-50 dark:bg-blue-900 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Please check your email to verify your account. You won&apos;t be able to access all features until verification is complete.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Next Steps</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-gold text-white text-xs">1</span>
                </div>
                <p className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                  Verify your email address by clicking the link we sent
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-gold text-white text-xs">2</span>
                </div>
                <p className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                  Complete your profile to get personalized property recommendations
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-gold text-white text-xs">3</span>
                </div>
                <p className="ml-3 text-sm text-gray-600 dark:text-gray-300">
                  Start exploring properties in the Dominican Republic and beyond
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/dashboard"
              className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/"
              className="flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}