'use client';

import { useState } from 'react';
import Link from 'next/link';

// Mock data for conversations
const conversations = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Real Estate Agent",
    lastMessage: "Hi John, I've reviewed the property documents and everything looks good. Would you like to schedule a viewing?",
    timestamp: "2 hours ago",
    unread: true,
    avatar: "/avatar1.jpg"
  },
  {
    id: 2,
    name: "Carlos Mendez",
    role: "Property Owner",
    lastMessage: "Thanks for your interest in my villa. I'm available for a viewing this weekend if you're interested.",
    timestamp: "1 day ago",
    unread: false,
    avatar: "/avatar2.jpg"
  },
  {
    id: 3,
    name: "Ana Martinez",
    role: "Buyer",
    lastMessage: "I'm interested in the apartment in Santiago. Can you provide more photos?",
    timestamp: "2 days ago",
    unread: true,
    avatar: "/avatar3.jpg"
  },
  {
    id: 4,
    name: "Roberto Sanchez",
    role: "Lawyer",
    lastMessage: "I've completed the preliminary legal review of the property. We can proceed with the contract drafting.",
    timestamp: "3 days ago",
    unread: false,
    avatar: "/avatar4.jpg"
  }
];

// Mock data for messages in the selected conversation
const messages = [
  {
    id: 1,
    sender: "Maria Rodriguez",
    content: "Hi John, I'm interested in the property you listed in Punta Cana. Can you tell me more about it?",
    timestamp: "10:30 AM",
    isOwn: false
  },
  {
    id: 2,
    sender: "You",
    content: "Hi Maria, thanks for your interest! It's a beautiful 5-bedroom villa with ocean views. What specific information would you like to know?",
    timestamp: "10:35 AM",
    isOwn: true
  },
  {
    id: 3,
    sender: "Maria Rodriguez",
    content: "I'd love to know more about the amenities and if there's a pool. Also, what's the asking price?",
    timestamp: "10:40 AM",
    isOwn: false
  },
  {
    id: 4,
    sender: "You",
    content: "Yes, there's a private pool and the villa features air conditioning, a modern kitchen, and a garden. The asking price is $1,250,000.",
    timestamp: "10:45 AM",
    isOwn: true
  },
  {
    id: 5,
    sender: "Maria Rodriguez",
    content: "That sounds great! Would it be possible to schedule a viewing next week?",
    timestamp: "10:50 AM",
    isOwn: false
  }
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // In a real app, you would send the message to your backend
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

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
                <Link href="/messages" className="border-gold text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
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
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Messages</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Communicate with property owners, buyers, agents, and other professionals
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="flex h-[calc(100vh-200px)]">
            {/* Conversations List */}
            <div className="w-1/3 border-r border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Conversations</h2>
              </div>
              <div className="overflow-y-auto h-[calc(100%-60px)]">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
                      selectedConversation === conversation.id ? 'bg-gray-50 dark:bg-gray-700' : ''
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">Avatar</span>
                        </div>
                      </div>
                      <div className="ml-3 flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {conversation.name}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {conversation.timestamp}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {conversation.role}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread && (
                            <span className="flex-shrink-0 ml-2 inline-block h-2 w-2 rounded-full bg-gold"></span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="w-2/3 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Avatar</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Maria Rodriguez
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Real Estate Agent
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                          message.isOwn
                            ? 'bg-gold text-white rounded-br-none'
                            : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <div
                          className={`text-xs mt-1 ${
                            message.isOwn ? 'text-gold-light' : 'text-gray-500 dark:text-gray-400'
                          }`}
                        >
                          {message.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                    className="flex-1 rounded-l-md border-gray-300 dark:border-gray-600 shadow-sm focus:ring-gold focus:border-gold dark:bg-gray-700 dark:text-white"
                    placeholder="Type your message..."
                  />
                  <button
                    onClick={handleSendMessage}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}