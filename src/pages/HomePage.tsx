import React from 'react';
import { ArrowRight, Calendar, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Découvrez et Créez des Événements Exceptionnels
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Votre plateforme pour organiser et participer à des événements uniques
            </p>
            <Link
              to="/events"
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Découvrir les événements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Gestion Simplifiée</h3>
              <p className="text-gray-600">
                Créez et gérez vos événements en quelques clics
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pour Tous</h3>
              <p className="text-gray-600">
                Des événements publics et privés adaptés à vos besoins
              </p>
            </div>
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Partout</h3>
              <p className="text-gray-600">
                Trouvez des événements près de chez vous
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}