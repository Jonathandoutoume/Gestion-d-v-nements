import React, { useState } from 'react';
import { EventCard } from '../components/EventCard';
import { Search, Filter } from 'lucide-react';
import { Event } from '../types/event';

const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Festival Gabao',
    description: 'Le plus grand festival de musique urbaine et traditionnelle du Gabon, mettant en vedette les talents locaux et internationaux.',
    shortDescription: 'Festival de musique urbaine et traditionnelle',
    date: '2024-07-15',
    location: 'Libreville',
    type: 'public',
    imageUrl: '/src/assets/images/festival-gabao.jpg'
  },
  {
    id: '2',
    title: 'Fête du Masque Punu',
    description: 'Célébration traditionnelle des masques Punu, avec danses rituelles et expositions culturelles.',
    shortDescription: 'Festival des masques traditionnels',
    date: '2024-08-20',
    location: 'Port-Gentil',
    type: 'private',
    imageUrl: '/src/assets/images/masque-punu.jpg'
  },
  {
    id: '3',
    title: 'Festival International de la Culture',
    description: 'Un rassemblement des cultures africaines présentant art, danse, musique et gastronomie.',
    shortDescription: 'Célébration multiculturelle africaine',
    date: '2024-09-10',
    location: 'Franceville',
    type: 'public',
    imageUrl: '/src/assets/images/festival-culture.jpg'
  },
  {
    id: '4',
    title: 'Fête du Bwiti',
    description: 'Cérémonie traditionnelle célébrant les rituels ancestraux du Bwiti.',
    shortDescription: 'Célébration spirituelle traditionnelle',
    date: '2024-10-05',
    location: 'Libreville',
    type: 'public',
    imageUrl: '/src/assets/images/bwiti.jpg'
  },
  {
    id: '5',
    title: 'Festival Culinaire de l\'Ogooué',
    description: 'Découverte des saveurs traditionnelles gabonaises et démonstrations culinaires.',
    shortDescription: 'Festival gastronomique traditionnel',
    date: '2024-09-25',
    location: 'Oyem',
    type: 'private',
    imageUrl: '/src/assets/images/festival-culinaire.jpg'
  },
  {
    id: '6',
    title: 'Festival des Danses Traditionnelles',
    description: 'Compétition et exhibition des danses traditionnelles des différentes ethnies du Gabon.',
    shortDescription: 'Célébration des danses ethniques',
    date: '2024-11-15',
    location: 'Moanda',
    type: 'public',
    imageUrl: '/src/assets/images/danses-traditionnelles.jpg'
  },
  {
    id: '7',
    title: 'Symposium des Arts du Gabon',
    description: 'Exposition et vente d\'œuvres d\'art traditionnelles et contemporaines gabonaises.',
    shortDescription: 'Exposition d\'art gabonais',
    date: '2024-10-30',
    location: 'Lambaréné',
    type: 'private',
    imageUrl: '/src/assets/images/symposium-arts-gabon.jpg'
  },
  {
    id: '8',
    title: 'Festival du Cinéma Africain',
    description: 'Projection de films et documentaires célébrant la richesse du cinéma africain.',
    shortDescription: 'Festival du 7ème art africain',
    date: '2024-12-05',
    location: 'Mouila',
    type: 'public',
    imageUrl: '/src/assets/images/festival-cinema-africain.jpg'
  },
  {
    id: '9',
    title: 'Fête de l\'Akoma Mba',
    description: 'Célébration de l\'épopée traditionnelle Fang avec contes, chants et danses.',
    shortDescription: 'Festival des traditions Fang',
    date: '2024-11-20',
    location: 'Tchibanga',
    type: 'public',
    imageUrl: '/src/assets/images/fete-akoma-mba.jpg'
  },
  {
    id: '10',
    title: 'Festival des Peuples de l\'Ogooué',
    description: 'Rassemblement célébrant les traditions et cultures des peuples vivant le long du fleuve Ogooué.',
    shortDescription: 'Célébration des peuples fluviaux',
    date: '2024-09-15',
    location: 'Makokou',
    type: 'private',
    imageUrl: '/src/assets/images/festival-peuples-ogouee.jpg'
  }
];

export function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'public' | 'private'>('all');

  const filteredEvents = MOCK_EVENTS.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Événements</h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher un événement..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as 'all' | 'public' | 'private')}
            >
              <option value="all">Tous les types</option>
              <option value="public">Public</option>
              <option value="private">Privé</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}