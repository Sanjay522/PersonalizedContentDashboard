📚 Personalized Content Dashboard
A fully responsive and user-focused content dashboard built with Next.js, TypeScript, Redux Toolkit, and Tailwind CSS. It allows users to select their preferred content categories and view a personalized feed based on their interests.

🚀 Features
🔧 User Preferences – Select and save your favorite categories

📰 Personalized Feed – Dynamic feed generation based on selected interests

⚡ Trending Section – Highlights popular or recommended content

💾 Persistent State – User preferences stored using Redux

🎨 Modern UI – Responsive design with Tailwind CSS

✅ Type Safety – Full TypeScript support

🔍 ESLint + Prettier – Code quality and formatting enforced

🌐 Vercel Deployed – Optimized for production

📁 Project Structure
graphql
Copy
Edit
📦 project-root
├── app
│   ├── page.tsx              # Main dashboard page
│   └── layout.tsx            # App layout
├── components
│   ├── PreferencesForm.tsx   # Form to select user preferences
│   ├── PersonalizedFeed.tsx  # Content feed based on selected preferences
│   └── TrendingSection.tsx   # Static trending content section
├── constants
│   └── categories.ts         # Available category list
├── data
│   └── trending.json         # Trending data
├── redux
│   ├── store.ts              # Redux store config
│   └── preferencesSlice.ts   # Preferences reducer and actions
├── styles
│   └── globals.css           # Global styles
├── public
│   └── ...                   # Static assets (if any)
├── eslint.config.ts         # ESLint config using FlatConfig
├── tailwind.config.ts       # Tailwind configuration
└── README.md                 # Project documentation
🛠️ Tech Stack
Framework: Next.js

Language: TypeScript

Styling: Tailwind CSS

State Management: Redux Toolkit

Linting: ESLint (Flat Config)

Deployment: Vercel

🧑‍💻 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/personalized-dashboard.git
cd personalized-dashboard
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run Locally
bash
Copy
Edit
npm run dev
Visit http://localhost:3000

4. Build for Production
bash
Copy
Edit
npm run build
npm start
⚙️ Customization
To update categories → edit constants/categories.ts

To update trending data → modify data/trending.json

🌐 Live Demo
https://your-vercel-project.vercel.app

🙌 Author
Sanjay Sadanand Gupta

GitHub: @your-username

LinkedIn: Your Profile

