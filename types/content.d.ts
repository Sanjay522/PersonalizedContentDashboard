// types/content.d.ts

export interface RecommendationItem {
  id: string;
  type: 'movie' | 'music' | 'book'; // You can expand types as needed
  title: string;
  description: string;
  imageUrl: string;
}

export interface SocialPost {
  id: string;
  username: string;
  platform: 'Twitter' | 'Instagram' | 'Facebook' | 'LinkedIn'; // Expand if needed
  content: string;
  avatarUrl: string;
}
