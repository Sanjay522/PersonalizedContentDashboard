// components/NewsFeed.tsx
import { FC } from 'react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
}

interface Props {
  news: NewsItem[];
}

const NewsFeed: FC<Props> = ({ news }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">News</h2>
      <div className="space-y-3">
        {news.map(item => (
          <div key={item.id} className="p-4 border rounded-lg shadow">
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
