"use client";

import { useState, useEffect } from "react";
import { categories } from "@/constants/categories";
import { savePreferences, loadPreferences } from "@/utils/localStorage";
import type { Category } from "@/types/preference";

export default function PreferencesForm() {
  const [selected, setSelected] = useState<Category[]>([]);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const prefs = loadPreferences();
    if (prefs) setSelected(prefs.categories);
  }, []);

  const toggleCategory = (category: Category) => {
    setSelected((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
    setIsSaved(false);
  };

  const handleSave = () => {
    savePreferences({ categories: selected });
    setIsSaved(true);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Select Your Categories</h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat as Category)}
            className={`px-4 py-2 rounded border transition ${
              selected.includes(cat as Category)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-800 border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition"
      >
        Save Preferences
      </button>

      {isSaved && (
        <p className="text-green-600 mt-3 font-medium">Preferences saved!</p>
      )}
    </div>
  );
}
