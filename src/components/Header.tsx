import React from 'react';
import { Calendar, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">EventHub</span>
          </Link>
          
          <div className="hidden sm:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Accueil</Link>
            <Link to="/events" className="text-gray-700 hover:text-indigo-600">Événements</Link>
            <Link to="/create-event" className="text-gray-700 hover:text-indigo-600">Créer un événement</Link>
          </div>
          
          <button className="sm:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </header>
  );
}