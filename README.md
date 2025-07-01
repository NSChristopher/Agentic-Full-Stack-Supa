# Frontend Template (Supabase Edition)

A modern, production-ready frontend template featuring React 18, Vite, Tailwind CSS, and ShadCN UI, fully integrated with Supabase for authentication, database, API, and edge functions (including image storage). Build your CRUD application with best practices, beautiful UI, and a serverless backend powered by Supabase.

## 📦 Tech Stack

| Layer               | Technology                        | Purpose                                     |
| ------------------- | --------------------------------- | ------------------------------------------- |
| **Frontend**        | React 18 + TypeScript + Vite      | Modern React with fast development          |
| **Styling**         | Tailwind CSS + ShadCN UI          | Utility-first CSS with beautiful components |
| **Icons & UI**      | Lucide React + Sonner             | Icons and toast notifications               |
| **Backend**         | Supabase (DB, API, Auth, Storage) | Serverless backend, authentication, storage |
| **API Client**      | Supabase JS Client                | Database/API/auth client                    |
| **Dev Environment** | GitHub Codespaces + Devcontainer  | Consistent development environment          |

## ✨ Features

- 🔐 **Complete Authentication**: Register, login, logout with Supabase Auth
- 📝 **CRUD Operations**: Full create, read, update, delete for posts (Supabase DB)
- 🖼️ **Image Storage**: Upload and serve images via Supabase Edge Functions/Storage
- 🎨 **Beautiful UI**: Tailwind CSS with ShadCN components
- 🔒 **Protected Routes**: Frontend route protection with Supabase session
- 📱 **Responsive Design**: Mobile-first approach
- 🚀 **Fast Development**: Hot reload for frontend
- 🛡️ **Type Safety**: Full TypeScript support
- 🍞 **Toast Notifications**: User feedback with Sonner
- 🎯 **Modern Icons**: Lucide React icon library

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Git installed
- [Supabase account & project](https://supabase.com/)

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   ```bash
   cp .env.example .env
   # Edit .env with your Supabase project URL and anon/public key
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Frontend: http://localhost:3000

## 📁 Project Structure

```
├── .devcontainer/             # GitHub Codespaces configuration
│   └── devcontainer.json
├── frontend/                  # React application
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/           # ShadCN UI components
│   │   ├── pages/
│   │   │   ├── Home.tsx      # Landing page
│   │   │   ├── Login.tsx     # Login page
│   │   │   ├── Register.tsx  # Registration page
│   │   │   └── Dashboard.tsx # Protected dashboard
│   │   ├── hooks/
│   │   │   ├── useAuth.tsx   # Authentication hook (Supabase)
│   │   │   └── usePosts.ts   # Posts management hook (Supabase)
│   │   ├── lib/
│   │   │   ├── api.ts        # Supabase client configuration
│   │   │   └── utils.ts      # Utility functions
│   │   ├── types/
│   │   │   └── index.ts      # TypeScript definitions
│   │   ├── App.tsx           # Main app component
│   │   ├── main.tsx          # React entry point
│   │   └── index.css         # Global styles
│   ├── package.json
│   ├── tailwind.config.js    # Tailwind configuration
│   └── vite.config.ts        # Vite configuration
├── documentation/             # Project documentation, guidelines, planning, templates
│   ├── planning/
│   ├── guidelines/
│   ├── templates/
│   └── docs/
├── package.json              # Root package.json
├── .env.example              # Environment variables template
└── README.md                 # This file
```

## 🔌 API & Database

All authentication, database, and storage operations are handled via [Supabase](https://supabase.com/):

- **Auth:** Supabase Auth (email/password, OAuth, magic links, etc.)
- **Database:** Supabase Postgres (tables, policies, RLS)
- **API:** Supabase auto-generated REST & GraphQL endpoints, or use the Supabase JS client
- **Storage:** Supabase Storage for file/image uploads
- **Edge Functions:** For custom logic, image processing, etc.

See the `documentation/templates/` folder for schema and policy examples.

## 🛠️ Development Scripts

```bash
# Install all dependencies
npm install

# Start frontend (Vite dev server)
npm run dev

# Build frontend
npm run build
```

## 🎨 Customization

### Adding New Database Models

1. **Update your Supabase project:**

   - Use the Supabase dashboard to create new tables, columns, and relationships.
   - Define Row Level Security (RLS) policies for access control.

2. **Update your frontend:**
   - Add new hooks, types, and UI as needed to interact with your new tables via the Supabase JS client.

See `documentation/templates/database-schema-template.md` for schema examples.

### Styling and Theming

- Modify `frontend/tailwind.config.js` for theme customization
- Update CSS variables in `frontend/src/index.css`
- Customize ShadCN components in `frontend/src/components/ui/`

### Environment Configuration

Create a `.env` file in the root directory:

```env
# Supabase
SUPABASE_ACCESS_TOKEN=your-supabase-access-token
```

## 🚢 Deployment

### Frontend

1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables for your Supabase project

### Backend

- No backend to deploy! All logic, authentication, and storage is handled by Supabase.

## 📚 Documentation

- [React 18 Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

## 🙋‍♂️ Support

If you have any questions or run into issues, please:

1. Check the [documentation](documentation/)
2. Search existing issues
3. Create a new issue with detailed information

---

**Happy coding!** 🚀
