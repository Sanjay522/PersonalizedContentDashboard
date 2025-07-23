// app/dashboard/page.tsx
'use client';

import { usePreferences } from '@/hooks/userPreferences';
import { mockNews } from '@/data/moskNews';
import { mockRecommendations } from '@/data/mockRecommendations';
import { mockSocialPosts } from '@/data/mockSocials';
import NewsFeed from '@/component/NewsFeed';
import RecommendationFeed from '@/component/RecommendationFeed';
import SocialFeed from '@/component/SocialFeed';
import { constants } from 'buffer';

export default function DashboardPage() {
  const preferences = usePreferences();



  if (!preferences) {
    return <p>Loading preferences...</p>;
  }

  console.log(mockRecommendations)
  const filteredNews = mockNews.filter(item =>
    preferences.categories.includes(item.category)
  );

  const filteredRecommendations = mockRecommendations.filter(item =>
    preferences.categories.includes(item.category)
  );


  const filteredSocial = mockSocialPosts.filter(item =>
    preferences.categories.includes(item.category)
  );

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">Your Dashboard</h1>
      <NewsFeed news={filteredNews} />
      <RecommendationFeed recommendations={filteredRecommendations} />
      <SocialFeed posts={filteredSocial} />
    </div>
  );
}
