'use client';

import { TrendingItem } from '@/types/preference';
import { motion } from 'framer-motion';

interface RecommendationFeedProps {
  recommendations: TrendingItem[];
}

const RecommendationFeed: React.FC<RecommendationFeedProps> = ({ recommendations }) => {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h2
        className="text-xl font-semibold mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        Recommendations
      </motion.h2>

      {recommendations.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          No recommendations available based on your preferences.
        </motion.p>
      ) : (
        recommendations.slice(0, 5).map((rec, index) => (
          <motion.div
            key={rec.id}
            className="p-4 rounded-lg shadow-sm hover:shadow-md transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-lg font-medium">{rec.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{rec.source}</p>
            <p className="text-gray-700">{rec.description}</p>
          </motion.div>
        ))
      )}
    </motion.div>
  );
};

export default RecommendationFeed;
