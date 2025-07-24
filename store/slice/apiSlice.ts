// src/features/api/api.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface NewsItem {
  id: number;
  username: string;
  content: string;
  timestamp: string;
  category: string;
}

export interface RecommendationItem {
  id: number;
  title: string;
  description: string;
  source: string;
  category: string;
}

export interface SocialPost {
  id: number;
  username: string;
  content: string;
  timestamp: string;
  category: string;
}

// 🔥 Trending Item interface
export interface TrendingItem {
  id: number;
  title: string;
  description: string;
  category: string;
}

// 🔷 Create API
export const contentApi = createApi({
  reducerPath: 'contentApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsItem[], void>({
      query: () => 'data/newsData.json',
    }),
    getRecommendations: builder.query<RecommendationItem[], void>({
      query: () => 'data/recommendationData.json',
    }),
    getSocialPosts: builder.query<SocialPost[], void>({
      query: () => 'data/socialData.json',
    }),

    // 🔥 Add trending endpoint
    getTrending: builder.query<TrendingItem[], void>({
      query: () => 'data/trendingData.json',
    }),
  }),
});

// 🚀 Auto-generated hooks
export const {
  useGetNewsQuery,
  useGetRecommendationsQuery,
  useGetSocialPostsQuery,
  useGetTrendingQuery, // <-- Add this hook to use in your TrendingPage
} = contentApi;
