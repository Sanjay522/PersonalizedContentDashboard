'use client';

import { FC, useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';
import { Heart } from 'lucide-react';
import { NewsItem } from '@/store/slice/apiSlice';

interface Props {
  news: NewsItem[];
}

const NewsFeed: FC<Props> = ({ news }) => {
  const [items, setItems] = useState(news);
  const [favorites, setFavorites] = useState<NewsItem[]>([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (item: NewsItem) => {
    let updatedFavorites: NewsItem[];

    if (favorites.some(fav => fav.id === item.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
    } else {
      updatedFavorites = [...favorites, item];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const isFavorite = (id: number) => {
    return favorites.some((fav) => fav.id === id);
  };

  // Pagination logic
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIdx, startIdx + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">News</h2>
      {items.length === 0 ? (
        <p>No news available</p>
      ) : (
        <>
          <Reorder.Group
            axis="y"
            values={currentItems}
            onReorder={(newItems) => {
              // Update the full items array with reordered currentItems
              const newFullItems = [...items];
              newFullItems.splice(startIdx, itemsPerPage, ...newItems);
              setItems(newFullItems);
            }}
            className="space-y-3"
          >
            {currentItems.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                className="p-4 bg-white rounded-lg shadow relative cursor-grab"
                whileDrag={{ scale: 1.03 }}
              >
                <button
                  onClick={() => toggleFavorite(item)}
                  className="absolute top-2 right-2 text-red-500 hover:scale-110 transition-transform"
                  aria-label="Toggle Favorite"
                >
                  <Heart
                    size={20}
                    fill={isFavorite(item.id) ? 'red' : 'none'}
                    strokeWidth={2}
                  />
                </button>

                <h3 className="font-bold text-lg">{item.username}</h3>
                <p>{item.content}</p>
                <span className="text-sm text-gray-500">{item.timestamp}</span>
              </Reorder.Item>
            ))}
          </Reorder.Group>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsFeed;
