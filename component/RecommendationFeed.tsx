'use client';

import { RecommendationItem } from '@/types/content';

interface RecommendationFeedProps {
  recommendations: RecommendationItem[];
}

const RecommendationFeed: React.FC<RecommendationFeedProps> = ({ recommendations }) => {
console.log(recommendations)

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available based on your preferences.</p>
      ) : (
        recommendations.map((rec) => (
          <div
            key={rec.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-medium">{rec.title}</h3>
            <p className="text-sm text-gray-600 mb-1">{rec.source}</p>
            <p className="text-gray-700">{rec.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationFeed;
