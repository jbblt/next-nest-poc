![Jean-Baptiste Pixel Portrait](./assets/jean-baptiste-balmont-pixel.png)

🔗 [LinkedIn – Jean-Baptiste Balmont](https://www.linkedin.com/in/jean-baptiste-balmont/)  
🧑‍💻 [GitHub – next-nest-portfolio](https://github.com/jbblt/next-nest-portfolio)

---

# 🧠 Fullstack Portfolio – Next.js & NestJS

This portfolio project showcases my fullstack skillset with a clean architecture:  
**Next.js (App Router)** on the frontend, **NestJS + GraphQL + Prisma + Supabase** on the backend.

---

## 📁 Project Structure

```
next-nest-portfolio/
├── frontend/     ← Next.js (App Router)
├── backend/      ← NestJS (GraphQL + Prisma + Supabase)
```

### Submodules
- 🔹 [Frontend (Next.js)](https://github.com/jbblt/next-nest-portfolio-frontend)
- 🔹 [Backend (NestJS)](https://github.com/jbblt/next-nest-portfolio-backend)

---

## 🚀 Tech Stack

| Layer       | Stack                                                  |
|-------------|--------------------------------------------------------|
| Frontend    | Next.js (App Router), TypeScript, React-Hook-Form      |
| Backend     | NestJS, GraphQL, Prisma, JWT                           |
| Database    | Supabase PostgreSQL                                    |
| Styling     | `styled-components` → soon migrated to `SCSS Modules` |
| Authentication | `next-auth`, JWT token sync with backend           |
| Charts      | `echarts`, dynamic data visualizations                 |
| Deployment  | Vercel (frontend), Render (backend)                    |
| Tooling     | ESLint v9, Prettier, GitHub Submodules                 |

---

## 🔍 Notable Technical Work

### ✅ Frontend (Next.js App Router)
- App structured with `app/` directory using server/client components
- Public landing page + protected dashboard routes
- Custom auth middleware to redirect unauthenticated users
- Token-based GraphQL fetch with `Authorization: Bearer <token>`
- Task dashboard using `react-hook-form` for task submission
- Dark UI theme in progress (Tokyo-style)
- Pixel-art avatar in the header for retro-futuristic branding

### ✅ Backend (NestJS)
- GraphQL API with secured mutations via custom `GqlAuthGuard`
- JWT token generation and validation
- `ensureUser(email)` mutation to link frontend auth with backend user
- Prisma setup with Supabase, enums for task status
- Clean modular config with domain-specific `.env` support (`openai`, `supabase`, etc.)

### ✅ DevOps & Tooling
- Monorepo with Git submodules
- Vercel previews per frontend PR
- Render deployment scripts
- ESLint & Prettier formatting
- Separation of responsibilities by workspace (frontend/backend)

---

## 🧩 Feature Roadmap

### 🧱 Core Architecture
- [x] Git submodules for monorepo
- [x] Separate deployment (Vercel + Render)
- [ ] Replace `styled-components` with `SCSS Modules`
- [ ] Add language/theme switcher (light/dark)

### 🔐 Authentication
- [x] Email/password login with `next-auth`
- [x] JWT token sync with backend
- [x] `ensureUser(email)` mutation
- [ ] Role-based access control (Admin / Visitor)

### 📊 Tasks & Dashboard
- [x] Full CRUD for tasks via GraphQL
- [x] SSR task rendering
- [ ] Optimistic UI on mutation
- [ ] WebSocket: GraphQL Subscriptions for live updates
- [ ] AI data analysis (summarization / action plan)
- [ ] Add charts with `echarts` to visualize task insights

### 🌐 API & Data
- [ ] `api-expert` route in backend to simulate real-world data ingestion
- [ ] Load and display external datasets via GraphQL (pagination ready)
- [ ] Use AI (OpenAI or custom API) to analyze large dataset

### 📦 Rendering Showcase
- [ ] `/ssg` → Static Site Generation
- [ ] `/ssr` → Server-Side Rendering
- [ ] `/isr` → Incremental Static Regeneration

---

## 🧪 Getting Started

```bash
# Clone the monorepo with submodules
git clone --recurse-submodules git@github-perso:jbblt/next-nest-portfolio.git

# Install and start the backend
cd backend
npm install
npm run start:dev

# Install and start the frontend
cd ../frontend
npm install
npm run dev
```

---

## ✅ Todo Highlights

- [ ] Migrate UI to SCSS modules
- [ ] Add real-time updates via WebSocket
- [ ] Create `/api-expert` backend endpoint
- [ ] Implement charts with echarts
- [ ] Integrate AI API to analyze tasks or user data
- [ ] Improve animations and responsive design
