import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Share2, ExternalLink } from 'lucide-react';
import { Event } from '../types/event';

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Festival de Musique',
    description: 'Un festival de musique exceptionnel avec les meilleurs artistes. Venez profiter d\'une expérience musicale unique en plein air avec une programmation variée et des installations modernes.',
    shortDescription: 'Festival de musique en plein air',
    date: '2024-07-15',
    location: 'Paris',
    type: 'public',
    imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80'
  }
];

export function EventDetailPage() {
  const { id } = useParams();
  const event = MOCK_EVENTS.find(e => e.id === id);

  if (!event) {
    return <div className="text-center py-12">Événement non trouvé</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-96 object-cover"
        />
        
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              event.type === 'public' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
            }`}>
              {event.type === 'public' ? 'Public' : 'Privé'}
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{event.location}</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">À propos de l'événement</h2>
            <p className="text-gray-600 whitespace-pre-line">{event.description}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              S'inscrire à l'événement
            </button>
            
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Share2 className="h-4 w-4 mr-2" />
              Partager
            </button>

            {event.externalLink && (
              <a
                href={event.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Plus d'informations
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}