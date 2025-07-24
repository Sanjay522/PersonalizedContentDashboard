'use client';

import { SocialPost } from '@/types/content';
import { motion } from 'framer-motion';

interface SocialFeedProps {
  posts: SocialPost[];
}

const SocialFeed: React.FC<SocialFeedProps> = ({ posts }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-2">Social Feed</h2>
      {posts.length === 0 ? (
        <p>No social posts available for your preferences.</p>
      ) : (
        posts
          .slice(0, 5)
          .map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.timestamp}</p>
                </div>
              </div>
              <p className="text-gray-800">{post.content}</p>
            </motion.div>
          ))
      )}
    </div>
  );
};

export default SocialFeed;
