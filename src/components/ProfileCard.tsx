import { Twitter, Github, Linkedin, Instagram, Mail, Youtube } from 'lucide-react';
import { Profile, Translations } from '../types';
import { HandwrittenText } from './HandwrittenText';

interface Props {
  profile: Profile;
  translations: Translations;
  dir: 'ltr' | 'rtl';
}

const socialInfo = {
  youtube: {
    title: 'YouTube',
    subtitle: 'Video Content',
    gradient: 'from-red-500/10 to-red-600/10',
    hoverGradient: 'group-hover:from-red-500/40 group-hover:to-red-600/40',
    width: 'col-span-2 lg:col-span-12'
  },
  instagram: { 
    title: 'Instagram', 
    subtitle: 'Visual Journey', 
    gradient: 'from-pink-500/10 to-purple-500/10',
    hoverGradient: 'group-hover:from-pink-500/40 group-hover:to-purple-500/40',
    width: 'col-span-1 lg:col-span-6'
  },
  twitter: { 
    title: 'Twitter', 
    subtitle: 'Latest Updates', 
    gradient: 'from-blue-400/10 to-blue-600/10',
    hoverGradient: 'group-hover:from-blue-400/40 group-hover:to-blue-600/40',
    width: 'col-span-1 lg:col-span-6'
  },
  github: { 
    title: 'GitHub', 
    subtitle: 'Code & Projects', 
    gradient: 'from-gray-600/10 to-gray-800/10',
    hoverGradient: 'group-hover:from-gray-600/40 group-hover:to-gray-800/40',
    width: 'col-span-1 lg:col-span-6'
  },
  linkedin: { 
    title: 'LinkedIn', 
    subtitle: 'Professional Network', 
    gradient: 'from-blue-600/10 to-blue-800/10',
    hoverGradient: 'group-hover:from-blue-600/40 group-hover:to-blue-800/40',
    width: 'col-span-1 lg:col-span-6'
  }
};

const socialOrder = ['youtube', 'instagram', 'twitter', 'github', 'linkedin'];

export function ProfileCard({ profile, translations, dir }: Props) {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative glass-effect p-12 rounded-2xl shadow-2xl">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/20 pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-center relative">
          <div className="relative mx-auto lg:mx-0">
            <div className="relative w-[280px] h-[280px]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" style={{ filter: 'blur(40px)' }} />
              <img
                src="https://mirza.plus/avatar.jpg"
                alt={profile.name}
                className="relative w-full h-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col items-center lg:items-start gap-4 mb-8">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <HandwrittenText text={profile.name} className="text-gray-800" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-200/20 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {translations.available}
                </span>
              </div>
            </div>

            <h2 className="text-xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent font-medium mb-8 text-center lg:text-left">
              {profile.title}
            </h2>


            <div className="relative w-full mb-12">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-purple-400/10" style={{ filter: 'blur(20px)' }} />
              <div className="relative flex items-center gap-4 px-5 py-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="p-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">{translations.email}</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-gray-900 hover:text-gray-600 transition-colors font-medium"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>

            </div>
            </div>
            <div className="h-px w-24 mx-auto lg:mx-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 mb-10" />


            <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 mb-10">
              {socialOrder.map(platform => {
                const url = profile.social[platform];
                const Icon = {
                  twitter: Twitter,
                  github: Github,
                  linkedin: Linkedin,
                  instagram: Instagram,
                  youtube: Youtube
                }[platform];
                const info = socialInfo[platform as keyof typeof socialInfo];

                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative ${info.width}`}
                    aria-label={`Visit ${platform} profile`}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 ${info.hoverGradient}`} style={{ filter: 'blur(20px)' }} />
                    <div className="relative p-4 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 overflow-hidden border border-white/10">
                      <div className="flex flex-col items-center text-center">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner mb-3 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-gray-700" />
                        </div>
                        <h3 className="text-sm text-gray-800 font-semibold mb-0.5">{info.title}</h3>
                        <p className="text-xs text-gray-600">{info.subtitle}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

      

            <div className="text-center lg:text-center mt-12">
              <div className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 backdrop-blur-sm border border-purple-200/10">
                <p className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Oh! I'm Navid—how could I forget?
                </p>
              </div>
            </div>
      </div>
    </div>
  );
}