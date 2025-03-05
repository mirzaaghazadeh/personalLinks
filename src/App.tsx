import { useState } from 'react';
import { ProfileCard } from './components/ProfileCard';
import { profileData, translations } from './data';

function App() {
  return (
    <div className="min-h-screen gradient-bg py-10 px-6">
      <div className="relative">
        <ProfileCard
          profile={profileData.en}
          translations={translations.en}
          dir="ltr"
        />
      </div>
    </div>
  );
}

export default App;