'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Logo - Globe with Dominican Republic in gold */}
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30"></div>
              {/* Simplified world map representation */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"></div>
              {/* Dominican Republic in gold with subtle shadow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-4 bg-gold rounded-sm shadow-lg"></div>
            </div>
            <h1 className="text-2xl font-bold gold-text tracking-tight">Meridian</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/properties" className="text-gray-700 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors font-medium">
              Properties
            </Link>
            <Link href="/agents" className="text-gray-700 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors font-medium">
              Agents
            </Link>
            <Link href="/invest" className="text-gray-700 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors font-medium">
              Invest
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors font-medium">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors font-medium">
              EN/ES
            </button>
            <Link href="/login" className="px-4 py-2 text-gray-700 hover:text-gold dark:text-gray-300 dark:hover:text-gold transition-colors font-medium">
              Login
            </Link>
            <Link href="/signup" className="px-5 py-2 bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Real Estate <span className="gold-text">Investment</span> Platform
              </h1>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gold rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg">
              Connecting property owners with buyers, renters, and investors in the Dominican Republic and beyond.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/properties" className="px-8 py-4 bg-gold text-white text-center rounded-lg hover:bg-gold-dark transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300">
                Browse Properties
              </Link>
              <Link href="/list-property" className="px-8 py-4 border-2 border-gold text-gold text-center rounded-lg hover:bg-gold hover:text-white transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300">
                List Your Property
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Enhanced property visualization */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 w-full h-96 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="relative inline-block">
                      <div className="w-32 h-32 bg-gradient-to-br from-gold/20 to-gold/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gold/20 rounded-full"></div>
                      <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gold/30 rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Luxury Property Showcase</h3>
                    <p className="text-gray-600 dark:text-gray-300">Discover premium listings in the Dominican Republic</p>
                  </div>
                </div>
                {/* Floating elements for visual interest */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg"></div>
                <div className="absolute bottom-6 right-6 w-24 h-24 bg-gold/10 backdrop-blur-sm rounded-2xl shadow-lg"></div>
              </div>
              {/* Floating stats cards */}
              <div className="absolute -bottom-8 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 w-40 hidden lg:block">
                <div className="text-2xl font-bold gold-text">1,250+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Properties Listed</div>
              </div>
              <div className="absolute -top-8 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 w-40 hidden lg:block">
                <div className="text-2xl font-bold gold-text">890+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Meridian?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We provide the ultimate real estate experience with cutting-edge technology and personalized service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <div className="text-gold text-3xl">🏠</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Premium Listings</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Access exclusive properties in the Dominican Republic and USA with detailed information and high-quality photos.
              </p>
              <Link href="/properties" className="text-gold font-medium flex items-center hover:underline">
                Explore listings
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <div className="text-gold text-3xl">💬</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Direct Communication</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Connect directly with property owners, agents, lawyers, and notaries through our secure messaging system.
              </p>
              <Link href="/messages" className="text-gold font-medium flex items-center hover:underline">
                Start messaging
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <div className="text-gold text-3xl">🔔</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Smart Notifications</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get real-time alerts for new listings that match your preferences and investment criteria.
              </p>
              <Link href="/search" className="text-gold font-medium flex items-center hover:underline">
                Set preferences
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Meridian Works</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our streamlined process makes buying, selling, and investing in real estate simple and efficient.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
            <div className="text-center mb-16 md:mb-0 relative">
              <div className="w-24 h-24 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">List Your Property</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                Create detailed listings with photos, features, and location details
              </p>
              <div className="absolute top-12 -right-8 w-16 h-1 bg-gold/30 hidden md:block"></div>
            </div>
            <div className="text-center mb-16 md:mb-0 relative">
              <div className="w-24 h-24 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">Find Your Match</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                Search with advanced filters or post your requirements to find perfect matches
              </p>
              <div className="absolute top-12 -right-8 w-16 h-1 bg-gold/30 hidden md:block"></div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg relative z-10">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Connect & Transact</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                Communicate directly with all parties and complete transactions securely
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link href="/signup" className="inline-block px-8 py-4 bg-gold text-white rounded-lg hover:bg-gold-dark transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Hear from property owners and investors who have found success with Meridian.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-bold mr-4">
                  MR
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Maria Rodriguez</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Property Owner</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Meridian helped me sell my villa in Punta Cana within two weeks. The platform's reach and professional presentation made all the difference."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-bold mr-4">
                  CJ
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Carlos Johnson</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Investor</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "As an international investor, Meridian gave me complete confidence in my purchase. The detailed property information and communication tools were invaluable."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl shadow-sm md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-white font-bold mr-4">
                  ST
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Sofia Torres</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Real Estate Agent</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "Meridian has transformed how I work with clients. The platform's tools make it easy to showcase properties and connect with serious buyers."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-600"></div>
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-3 bg-gold rounded-sm"></div>
                </div>
                <h2 className="text-2xl font-bold gold-text">Meridian</h2>
              </div>
              <p className="text-gray-400 max-w-md mb-8">
                The definitive real estate platform for the Dominican Republic and beyond. Connecting property owners with buyers, renters, and investors.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gold transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">For Owners</h3>
              <ul className="space-y-3">
                <li><Link href="/list-property" className="text-gray-400 hover:text-gold transition-colors">List Property</Link></li>
                <li><Link href="/property-management" className="text-gray-400 hover:text-gold transition-colors">Manage Listings</Link></li>
                <li><Link href="/owner-dashboard" className="text-gray-400 hover:text-gold transition-colors">Owner Dashboard</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-gold transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">For Buyers</h3>
              <ul className="space-y-3">
                <li><Link href="/properties" className="text-gray-400 hover:text-gold transition-colors">Browse Properties</Link></li>
                <li><Link href="/search" className="text-gray-400 hover:text-gold transition-colors">Advanced Search</Link></li>
                <li><Link href="/post-requirements" className="text-gray-400 hover:text-gold transition-colors">Post Requirements</Link></li>
                <li><Link href="/mortgage-calculator" className="text-gray-400 hover:text-gold transition-colors">Mortgage Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-gold transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Meridian. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}