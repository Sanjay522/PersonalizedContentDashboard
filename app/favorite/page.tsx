'use client';

import { useEffect, useState } from 'react';
import { NewsItem } from '@/store/slice/apiSlice';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Favorites = () => {
  const [favorites, setFavorites] = useState<NewsItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch (err) {
        console.error("Failed to parse favorites:", err);
      }
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4">Your Favorites</h2>

      {favorites.length === 0 ? (
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          No favorites yet. Go add some from the news feed!
        </motion.p>
      ) : (
        <div className="space-y-3">
          {favorites.map((item, index) => (
            <motion.div
              key={item.id}
              className="p-4 bg-white rounded-lg shadow relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Heart className="absolute top-2 right-2 text-red-500" fill="red" />
              <h3 className="font-bold text-lg">{item.username}</h3>
              <p>{item.content}</p>
              <span className="text-sm text-gray-500">{item.timestamp}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Favorites;
