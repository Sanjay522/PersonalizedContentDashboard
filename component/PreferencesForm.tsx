"use client";

import { useState, useEffect } from "react";
import { categories } from "@/constants/categories";
import { savePreferences, loadPreferences } from "@/utils/localStorage";
import { motion, AnimatePresence } from "framer-motion";



export default function PreferencesForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const prefs = loadPreferences();
    if (prefs) setSelected(prefs.categories);
  }, []);

  const toggleCategory = (id: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((c) => c !== id)
        : [...prevSelected, id]
    );
    setIsSaved(false);
  };

  const handleSave = () => {
    savePreferences({ categories: selected });
    setIsSaved(true);
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 rounded shadow-md bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Select Your Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {categories.map((category) => {
          const isSelected = selected.includes(category.id);
          const IconComponent = category.icon;
          return (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded border transition-all ${
                isSelected
                  ? `${category.color} text-white border-transparent shadow`
                  : `bg-gray-100 text-gray-800 border-gray-300`
              }`}
            >
              <IconComponent className="w-5 h-5" />
              {category.name}
            </motion.button>
          );
        })}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSave}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition"
      >
        Save Preferences
      </motion.button>

      <AnimatePresence>
        {isSaved && (
          <motion.p
            className="text-green-600 mt-3 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Preferences saved!
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
