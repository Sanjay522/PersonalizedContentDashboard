'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { toggleTheme } from '@/store/slice/preferencesSlice';
import PreferencesForm from '@/component/PreferencesForm';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.preferences.theme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      <div>
        <p>
          Current Theme: <strong>{theme}</strong>
        </p>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Toggle Theme
        </button>

        {/* Animated form container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <PreferencesForm />
        </motion.div>
      </div>
    </motion.div>
  );
}
