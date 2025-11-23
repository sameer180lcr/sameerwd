# Deploy AI Browser Website to Render

## Quick Start Guide

### 1. Build Your Electron App

First, build the Windows installer:

```powershell
# From the main project directory
cd "c:\Users\xmtra\Desktop\New folder (4)"
npm run build
```

This creates the installer in the `dist` folder.

### 2. Copy Installer to Website

```powershell
# Copy the built installer to website downloads folder
Copy-Item "dist\AI Browser Setup *.exe" "website\downloads\AI-Browser-Setup.exe"
```

### 3. Test Website Locally

```powershell
cd website
npm install
npm start
```

Visit `http://localhost:3000` to preview the website.

### 4. Deploy to Render

#### Option A: Using GitHub (Recommended)

1. **Create a GitHub repository**:
   ```powershell
   cd website
   git init
   git add .
   git commit -m "Initial commit: AI Browser landing page"
   ```

2. **Create a new repo on GitHub**: https://github.com/new

3. **Push your code**:
   ```powershell
   git remote add origin https://github.com/YOUR-USERNAME/ai-browser-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Render**:
   - Go to https://render.com
   - Sign up/Login (you can use GitHub)
   - Click **"New +"** → **"Web Service"**
   - Select your repository
   - Configure:
     - **Name**: `ai-browser-website` (or your choice)
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Select **Free**
   - Click **"Create Web Service"**

5. **Wait for deployment** (2-3 minutes)

6. **Your site is live!** 🎉
   - URL will be: `https://ai-browser-website.onrender.com`
   - Or your custom name: `https://YOUR-NAME.onrender.com`

#### Option B: Manual Deploy (Alternative)

If you prefer not to use GitHub, you can also deploy manually:

1. Create a ZIP of the website folder
2. Use Render's manual deploy option
3. Upload the ZIP file

## Important Notes

### Free Tier Limitations
- **Sleep after inactivity**: Free tier sleeps after 15 minutes of inactivity
- **Cold starts**: First request after sleep takes ~30 seconds
- **Monthly hours**: 750 hours/month of uptime
- **Bandwidth**: 100GB/month

### Upgrading to Paid
If you need:
- Always-on service
- Faster response times
- More bandwidth
- Custom domains

Consider upgrading to Render's paid plans ($7/month starter).

## Custom Domain Setup

1. In Render dashboard, go to your service
2. Click **Settings** → **Custom Domain**
3. Add your domain (e.g., `www.aibrowser.com`)
4. Update your DNS:
   - Add a CNAME record pointing to the Render URL
   - Or A record to Render's IP
5. Wait for DNS propagation (5 minutes - 48 hours)

## Updating Your Website

### After Code Changes

```powershell
git add .
git commit -m "Update website"
git push
```

Render will automatically redeploy!

### Updating the App Download

When you release a new version:

```powershell
# Build new version
npm run build

# Copy to website
Copy-Item "dist\AI Browser Setup *.exe" "website\downloads\AI-Browser-Setup.exe"

# Commit and push
cd website
git add downloads/
git commit -m "Update app to v1.1.0"
git push
```

## Environment Variables

No environment variables needed! The server automatically uses Render's PORT.

## Monitoring

- **Logs**: Available in Render dashboard
- **Metrics**: CPU, memory, response time
- **Alerts**: Set up email notifications for errors

## Troubleshooting

### "Application Failed to Start"
- Check build logs in Render dashboard
- Ensure `package.json` has correct dependencies
- Verify Node.js version compatibility

### Download Link Broken
- Make sure installer file exists in `downloads/` folder
- Check file name matches in HTML
- Verify file was committed to git

### Slow Load Times
- First load after sleep is slow (cold start)
- Consider paid plan for always-on
- Optimize images (compress logo, screenshot)

## Cost Optimization

Free tier is perfect for:
- Personal projects
- Portfolio sites
- Open source projects
- Low traffic sites

Upgrade when you have:
- Consistent traffic
- Need 24/7 availability
- Commercial use

## Support

- **Render Docs**: https://render.com/docs
- **Render Community**: https://community.render.com
- **AI Browser Issues**: Create issue on GitHub

---

🚀 **Ready to Deploy?** Follow Step 4 above!
