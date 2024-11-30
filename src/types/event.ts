export interface Event {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  location: string;
  type: 'public' | 'private';
  imageUrl: string;
  externalLink?: string;
}

export type EventFormData = Omit<Event, 'id'>;