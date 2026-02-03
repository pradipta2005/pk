# Deployment Guide for "Golden Intelligence" Portfolio

Your ultra-premium portfolio is built with Next.js 15+ and is ready for deployment. The recommended platform for Next.js is **Vercel** (creators of Next.js), but Netlify is also a great choice.

## ✅ Build Verification
The project has been successfully built locally with `npm run build`. 
- **Font Strategy**: We switched to standard CSS imports for Google Fonts to ensure reliability during the build process.
- **Type Safety**: All strict TypeScript errors in components like `ColorBends`, `Preloader`, and `layout` have been resolved.

---

## 🚀 Option 1: Deploy to Vercel (Recommended)
Vercel provides the best performance and easiest setup for Next.js applications.

1. **Push your code to GitHub/GitLab/Bitbucket**.
2. Go to [Vercel.com](https://vercel.com) and Sign Up/Log In.
3. Click **"Add New..."** > **"Project"**.
4. Import your **portfolio** repository.
5. Vercel will auto-detect the framework (**Next.js**).
   - **Build Command**: `next build` (default)
   - **Install Command**: `npm install` (default)
   - **Output Directory**: `.next` (default)
6. Click **Deploy**.

*Your site should be live in ~1 minute.*

---

## 🌐 Option 2: Deploy to Netlify
1. **Push your code to a Git provider**.
2. Go to [Netlify.com](https://www.netlify.com) and Sign Up/Log In.
3. Click **"Add new site"** > **"Import from specific repository"**.
4. Select your repository.
5. **Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (Netlify usually detects Next.js automatically and installs the `@netlify/plugin-nextjs`).
6. Click **Deploy site**.

---

## ⚡ Performance Notes
- **Fonts**: The fonts are now loaded via Global CSS to prevent timeouts.
- **Images**: Ensure all assets in `public/` are optimized. The build process has already optimized internal assets.

## 🛠 Troubleshooting
If you encounter errors during deployment:
1. **Check Build Logs**: Look for red error messages in the Vercel/Netlify dashboard.
2. **Environment Variables**: If you add API keys later, remember to add them in the "Environment Variables" section of your dashboard.
