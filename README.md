# Nuxt 3 Fullstack POC 💡

A proof of concept using **Nuxt 3** as a fullstack framework, demonstrating:
- API routes with `defineEventHandler`
- Middleware (logging + auth)
- Database integration with **Prisma**
- Full local testing using **Postman**
- Modular and scalable backend structure

---

## 🚀 Features

- ✅ Nuxt 3 Hybrid Rendering
- ✅ RESTful API via `server/api`
- ✅ Prisma ORM with SQLite (configurable)
- ✅ Global + scoped middleware support
- ✅ Runtime config usage
- ✅ Auth-protected routes
- ✅ Fully testable via Postman or frontend form

---

## 🧱 Stack

- **Nuxt 3**
- **Prisma**
- **TypeScript**
- **H3**
- **Pinia (optional)**
- **Postman or Curl for API testing**

---

## 📦 Installation

1. **Clone the repo**:

```bash
git clone https://github.com/MrIsMailAmmor/nuxt-fullstack-poc.git
cd nuxt-fullstack-poc

```
2. Install dependencies:
```bash
pnpm install
# or
yarn install
# or
npm install

```
3. Setup environment:
```bash
Create a .env file:

DATABASE_URL="file:./dev.db"
```

🗄️ Prisma Setup
```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```

▶️ Running the Dev Server
```bash
npm run dev
```
Server runs at: http://localhost:3000


📬 Testing API
POST a contact message:
```bash
curl -X POST http://localhost:3000/api/contact ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Alex\",\"message\":\"Hi!\"}"
  ```
Or use Postman to test POST http://localhost:3000/api/contact

Ensure to include the Authorization: Bearer secret-token header for protected routes.


🔐 Auth Middleware
Routes can be protected using checkAuth():

await checkAuth(event) // Throws 401 if token is missing/invalid
Authorization Header expected:
```bash
Authorization: Bearer super-secret-key
  ```

🗃️ Project Structure
```bash
server/
│
├── api/
│   └── contact.ts      # GET and POST routes
│
├── middleware/
│   └── logger.ts       # Global request logger
│
├── utils/
│   └── auth.ts         # Auth middleware logic
│
├── plugins/
│   └── prisma.ts       # Optional plugin for global Prisma instance
  ```
🛠 Notes

Prisma uses SQLite for local development. You can switch to MySQL/Postgres by editing DATABASE_URL.

.env file should never be committed.

You can add new API routes inside server/api.

✅ To Do (Next Features)

 - Client-side form + composable

 - Server plugin for Prisma

 - Deployment setup (Netlify/Vercel)

 - Cookie/session-based auth

 - File uploads


📝 This project is inspired by [Steve McDougall’s article on Nuxt 3](https://juststeveking.com/articles/nuxt-and-why-you-should-be-using-it) on Nuxt 3, which highlights the fullstack capabilities of the framework.

HF !