import {
  Heart,
  TrendingUp,
  DollarSign,
  Gamepad2,
  Music,
  Camera,
  BookOpen,
  Cpu,
  Briefcase,
  Home,
  User
} from 'lucide-react';


export interface UserPreferences {
  name: string;
  darkMode: boolean;
  favoriteCategories: Category[];
}

export interface CategoryInfo {
  id: Category;
  name: string;
  icon: React.FC<{ className?: string }>;
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'technology',
    name: 'Technology',
    icon: Cpu,
    color: 'bg-blue-500 text-white'
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: TrendingUp,
    color: 'bg-green-500 text-white'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: DollarSign,
    color: 'bg-yellow-500 text-white'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: Gamepad2,
    color: 'bg-pink-500 text-white'
  },
  {
    id: 'health',
    name: 'Health',
    icon: Heart,
    color: 'bg-red-500 text-white'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: Gamepad2,
    color: 'bg-purple-500 text-white'
  },
  {
    id: 'music',
    name: 'Music',
    icon: Music,
    color: 'bg-indigo-500 text-white'
  },
  {
    id: 'photography',
    name: 'Photography',
    icon: Camera,
    color: 'bg-pink-400 text-white'
  },
  {
    id: 'education',
    name: 'Education',
    icon: BookOpen,
    color: 'bg-emerald-500 text-white'
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: Cpu,
    color: 'bg-sky-500 text-white'
  },
  {
    id: 'career',
    name: 'Career',
    icon: Briefcase,
    color: 'bg-orange-500 text-white'
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    icon: Home,
    color: 'bg-rose-500 text-white'
  },
  {
    id: 'personal',
    name: 'Personal',
    icon: User,
    color: 'bg-zinc-500 text-white'
  }
];
