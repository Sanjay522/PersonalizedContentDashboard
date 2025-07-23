import { useEffect, useState } from 'react';
import { UserPreferences } from '@/types/preference';
import { loadPreferences } from '@/utils/localStorage';

export const usePreferences = () => {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);

  useEffect(() => {
    const prefs = loadPreferences();
    setPreferences(prefs);
  }, []);

  return preferences;
};
