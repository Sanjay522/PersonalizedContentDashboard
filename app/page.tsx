'use client';

import { usePreferences } from '@/hooks/userPreferences';
import {
  useGetNewsQuery,
  useGetRecommendationsQuery,
  useGetSocialPostsQuery,
} from '@/store/slice/apiSlice';
import NewsFeed from '@/component/NewsFeed';
import RecommendationFeed from '@/component/RecommendationFeed';
import SocialFeed from '@/component/SocialFeed';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardPage() {
  const preferences = usePreferences();

  const { data: news = [], isLoading: newsLoading } = useGetNewsQuery();
  const { data: recommendations = [], isLoading: recLoading } = useGetRecommendationsQuery();
  const { data: socialPosts = [], isLoading: socialLoading } = useGetSocialPostsQuery();

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm.toLowerCase());
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  if (!preferences || newsLoading || recLoading || socialLoading) {
    return (
      <div className="flex justify-center items-center h-full text-gray-600 text-lg">
        Loading content...
      </div>
    );
  }

  const filterItems = (items: any[]) =>
    items.filter((item) => {
      const text = item.title || item.username || '';
      return (
        preferences.categories?.includes(item.category) &&
        text.toLowerCase().includes(debouncedSearch)
      );
    });

  const filteredNews = filterItems(news);
  const filteredRecommendations = filterItems(recommendations);
  const filteredSocialPosts = filterItems(socialPosts);

  return (
    <motion.div
      className="space-y-6 bg-gray-100 text-gray-900"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-semibold mb-4">Your Dashboard</h1>

      <input
        type="text"
        placeholder="Search news, movies, or posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-xl px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <AnimatePresence mode="wait">
        <motion.section
          key="news"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <NewsFeed news={filteredNews} />
        </motion.section>

        <motion.div
          className="flex flex-row gap-6 mt-4"
          key="row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.section
            key="recommendations"
            className="w-1/2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <RecommendationFeed recommendations={filteredRecommendations} />
          </motion.section>

          <motion.section
            key="social"
            className="w-1/2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SocialFeed posts={filteredSocialPosts} />
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
