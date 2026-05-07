# 🌞 ScholarArchive Online Book Borrowing Platform

# 🌐 Live Demo
### 🔗 Visit Now:
👉 https://rakibulhasanridoy-online-book-borro.vercel.app/

---

## 🛍️ Project Overview

**ScholarArchive** is a modern online book borrowing platform built with Next.js. Users can explore a curated collection of books across categories like Science, Technology, and Story — browse featured titles, view detailed book pages, and manage their personal library profile.
The platform includes Google OAuth and email/password authentication via Better Auth, protected private routes, dynamic book pages, a responsive UI designed for all devices, and a MongoDB-powered backend for persistent data storage.

---

## 🎯 Purpose

The goal of this project is to build a full-stack modern digital library experience with secure authentication, protected routing, dynamic book rendering using Next.js App Router, and a clean scholar-themed UI — enabling users to discover, explore, and borrow books seamlessly across all devices.

---

## ✨ Key Features

### 🧭 Navbar & Layout
- Logo + navigation links (Home, All Books, My Profile)
- Conditional UI based on authentication:
  - Logged in → Avatar + Logout button
  - Logged out → Login / Register buttons

---

### 🏠 Home Page
- 🌅 Hero section with summer sale banners
- 🔥 Popular Products section 

---

### 📦 Product System
- JSON-based product data (12 products)
- Dynamic product rendering
- Product Details page with full information

---

### 🔒 Protected Product Details Page
- Only accessible after login
- Unauthorized users are redirected to Signup page
- After signup → redirect back to login page
- After login → redirected back to Home page

---

# 🔐 Authentication (BetterAuth)
## Login Page
- Email & Password login
- Google Social Login
- Redirect to Home after login
- Error handling with toast notifications
- Link to Register page

## Register Page
- Name, Email, Photo URL, Password form
- Google Social Login
- Redirect to Login after registration
- Error handling with toast notifications
- Link to Login page

---

## 👤 My Profile
- Displays user info:
  - Name
  - Email
  - Profile photo
- Update profile feature:
  - Update Name
  - Update Image URL

---

## ✏️ Update Profile Feature
- Separate update page
- Uses BetterAuth user update API
- Saves updated profile instantly

---

## 📱 Fully Responsive Design
- Mobile 📱
- Tablet 📟
- Desktop 💻

---

## ⚙️ Extra Features
- Environment variables for secure config
- Smooth navigation with Next.js App Router
- Toast notifications for feedback

---

## 📁 Project File Structure

```
ScholarArchive/
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── public/
│   ├── Data.json
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── allbooks/
│   │   │   └── page.jsx
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...nextauth]/
│   │   │           └── route.js
│   │   ├── books/
│   │   │   └── [id]/
│   │   │       └── page.js
│   │   ├── login/
│   │   │   └── page.js
│   │   ├── profile/
│   │   │   ├── page.js
│   │   │   └── update/
│   │   │       └── page.js
│   │   ├── register/
│   │   │   └── page.js
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── Components/
│   │   ├── AllBooks.jsx
│   │   ├── Authors.jsx
│   │   ├── Banner.jsx
│   │   ├── Body.jsx
│   │   ├── BookDetail.jsx
│   │   ├── Footer.jsx
│   │   ├── Login.jsx
│   │   ├── Membership.jsx
│   │   ├── Navbar.jsx
│   │   ├── Profile.jsx
│   │   ├── Register.jsx
│   │   ├── TopGeneration.jsx
│   │   └── UpdateProfile.jsx
│   └── lib/
│       ├── auth-client.js
│       ├── auth.js
│       └── useAnimateOnScroll.js
```

---

## 📝 File Descriptions

### 🔧 Root Configuration Files
- `next.config.mjs` – Next.js configuration
- `eslint.config.mjs` – ESLint rules
- `jsconfig.json` – JavaScript/Path aliases
- `postcss.config.mjs` – CSS processing
- `package.json` – Project dependencies

### 📂 Public Directory
- `Data.json` – Product data (JSON format)
- `Assets/` – Static images and media files

### 🎨 App Directory (`src/app/`)
- `layout.js` – Root layout wrapper
- `page.js` – Home page
- `globals.css` – Global styles
- `loading.jsx` – Loading skeleton/spinner
- **API Routes** (`api/auth/[...all]/`) – BetterAuth endpoints
- **Pages:**
  - `login/` – Login page
  - `signup/` – Sign up page
  - `my-profile/` – User profile page
  - `products/` – Products listing & filtering by category/price
  - `products/product/[id]/` – Individual product details (protected)

### 🧩 Components (`src/Components/`)
- `Navbar.jsx` – Header navigation
- `Banner.jsx` – Hero/promotional banners
- `Products.jsx` – Product grid component
- `Brands.jsx` – Brand showcase
- `Care.jsx` – Care/tips section
- `Footer.jsx` – Footer component
- `Toastify.jsx` – Toast notification setup

### 📚 Library (`src/lib/`)
- `auth.js` – BetterAuth server-side configuration
- `auth-client.js` – BetterAuth client-side setup
- `db.js` – Database configuration
- Clean UI with Tailwind CSS
- Custom loading states
- 404 Not Found page

---

## 🧰 Tech Stack

- ⚛️ Next.js (App Router)
- 🎨 Tailwind CSS
- 🧩 DaisyUI
- 🔐 BetterAuth
- 💡 JavaScript (ES6+)
- 🔔 React Toastify
- 📦 Static JSON Data
- 🎨 Animated.CSS

---

## 📁 Project Structure



---

## 🔐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL= https://rakibulhasanridoy-online-book-borro.vercel.app/
BETTER_AUTH_SECRET=my_secret_key
GOOGLE_CLIENT_ID=my_google_client_id
GOOGLE_CLIENT_SECRET=my_google_client_secret
```
---

# 🚀 Getting Started

## 1️⃣ Clone the Repository
```js
git clone https://github.com/rakibulhasanridoy/online-book-borrowing-platform.git
cd online-book-borrowing-platform
```

## 2️⃣ Install Dependencies
```js
npm install
```

## 3️⃣ Run Development Server
```js
npm run dev
```

## 4️⃣ Open in Browser
```js
http://localhost:3000
```

---
# 👨‍💻 Author

**Rakibul Hasan Ridoy**  
ScholarArchive  Assignment Project  
Built with ❤️ using Next.js
