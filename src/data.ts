import { Profile, Translations } from './types';

export const profileData: Record<'en', Profile> = {
  en: {
    name: "Mirza Plus!",
    title: "",
    bio: "",
    status: "",
    available: true,
    social: {
      twitter: "https://twitter.com/mirzaaplus",
      github: "https://github.com/mirzaaghazadeh",
      linkedin: "https://www.linkedin.com/in/mirzaaghazadeh",
      instagram: "https://instagram.com/mirzaaplus",
      youtube: "https://www.youtube.com/@mirzaplus"
    },
    email: "hi@mirza.plus"
  }
};

export const translations: Record<'en', Translations> = {
  en: {
    contact: "Contact Me",
    available: "Available for Projects",
    unavailable: "Unavailable",
    language: "Language",
    email: "Let's Connect & Collaborate"
  }
};