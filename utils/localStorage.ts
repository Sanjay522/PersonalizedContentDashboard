import { UserPreferences } from '@/types/preference';

const PREFERENCES_KEY = 'user-preferences';

export const savePreferences = (prefs: UserPreferences) => {
  localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefs));
};

export const loadPreferences = (): UserPreferences | null => {
  const prefs = localStorage.getItem(PREFERENCES_KEY);
  return prefs ? JSON.parse(prefs) : null;
};
