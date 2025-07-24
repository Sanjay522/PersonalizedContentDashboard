'use client';

import { useGetTrendingQuery } from '@/store/slice/apiSlice';


const TrendingPage = () => {
  const { data: trendingItems = [], isLoading, error } = useGetTrendingQuery();

  if (isLoading) return <p>Loading trending items...</p>;
  if (error) return <p>Failed to load trending data</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">🔥 Trending Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingItems.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white  rounded-lg shadow transition hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:black">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPage;
