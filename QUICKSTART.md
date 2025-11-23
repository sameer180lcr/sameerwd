# ⚡ Quick Deploy to Render - 5 Minutes

## Prerequisites
- [ ] GitHub account (free)
- [ ] Render account (free) - signup at https://render.com

## 🚀 Deploy in 5 Steps

### 1️⃣ Build Your App (2 minutes)
```powershell
cd "c:\Users\xmtra\Desktop\New folder (4)"
npm run build
Copy-Item "dist\AI Browser Setup *.exe" "website\downloads\AI-Browser-Setup.exe"
```

### 2️⃣ Create GitHub Repo (1 minute)
1. Go to https://github.com/new
2. Name: `ai-browser-website`
3. Click **Create repository**

### 3️⃣ Push Code to GitHub (1 minute)
```powershell
cd website
git init
git add .
git commit -m "AI Browser landing page"
git remote add origin https://github.com/YOUR-USERNAME/ai-browser-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username!

### 4️⃣ Deploy on Render (1 minute)
1. Go to https://render.com
2. Login with GitHub
3. Click **New +** → **Web Service**
4. Select `ai-browser-website` repo
5. Fill in:
   - **Name**: `ai-browser-website`
   - **Build**: `npm install`
   - **Start**: `npm start`
6. Click **Create Web Service**

### 5️⃣ Done! 🎉
Wait 2-3 minutes. Your site will be live at:
```
https://ai-browser-website.onrender.com
```

---

## 🔗 Important Links

| What | URL |
|------|-----|
| Local Preview | http://localhost:3000 |
| GitHub | https://github.com |
| Render | https://render.com |
| Your Live Site | `https://YOUR-APP-NAME.onrender.com` |

---

## 📝 Notes

- **Free tier sleeps** after 15 min of inactivity
- **First request** after sleep takes ~30 seconds
- **Automatic SSL** - HTTPS included for free
- **Auto-deploy** - Push to GitHub = auto-update

---

## ✅ Checklist

Before deploying:
- [ ] App is built (`npm run build`)
- [ ] Installer copied to `website/downloads/`
- [ ] GitHub repo created
- [ ] Code pushed to GitHub
- [ ] Render account created
- [ ] Service deployed on Render

After deploying:
- [ ] Test live URL
- [ ] Download button works
- [ ] All sections visible
- [ ] Mobile responsive
- [ ] Share with users!

---

**Need detailed help?** See `DEPLOYMENT_SUMMARY.md`
