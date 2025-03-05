export type Language = 'en';

export interface Profile {
  name: string;
  title: string;
  bio: string;
  status: string;
  available: boolean;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    instagram: string;
    youtube: string;
  };
  email: string;
}

export interface Translations {
  contact: string;
  available: string;
  unavailable: string;
  language: string;
  email: string;
}