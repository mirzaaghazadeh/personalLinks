import { GlobeIcon } from 'lucide-react';
import { Language } from '../types';

interface Props {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitcher({ currentLang, onLanguageChange }: Props) {
  return (
    <div className="fixed top-8 right-8 z-50">
      <div className="relative">
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg hover:bg-white/10 transition-all duration-300">
          <GlobeIcon className="w-5 h-5 text-gray-700" />
          <select
            value={currentLang}
            onChange={(e) => onLanguageChange(e.target.value as Language)}
            className="bg-transparent border-none outline-none text-gray-700 cursor-pointer font-medium"
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
          </select>
        </div>
      </div>
    </div>
  );
}