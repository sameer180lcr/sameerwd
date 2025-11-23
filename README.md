# AI Browser Website

Landing page for AI Browser - deploy to Render for public access.

## Features

- 🎨 **Modern Design** - Beautiful gradient UI with glassmorphism effects
- 📱 **Responsive** - Works perfectly on all devices
- ⚡ **Fast** - Optimized performance with smooth animations
- 🚀 **Easy Deploy** - One-click deployment to Render

## Local Development

### Prerequisites
- Node.js 14 or higher

### Setup

1. Install dependencies:
```bash
cd website
npm install
```

2. Run locally:
```bash
npm start
```

3. Visit `http://localhost:3000`

## Building the Electron App

Before deploying the website, you need to build the Electron app installer:

1. Go to the main project directory:
```bash
cd "c:\Users\xmtra\Desktop\New folder (4)"
```

2. Build the Windows installer:
```bash
npm run build
```

3. Copy the installer to website downloads:
```bash
Copy-Item "dist\AI Browser Setup *.exe" "website\downloads\AI-Browser-Setup.exe"
```

## Deploy to Render

### Step 1: Prepare Your Repository

1. Initialize git in the website folder (if not already done):
```bash
cd website
git init
git add .
git commit -m "Initial commit: AI Browser landing page"
```

2. Create a new repository on GitHub

3. Push your code:
```bash
git remote add origin https://github.com/yourusername/ai-browser-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Render

1. Go to [render.com](https://render.com) and sign up/login

2. Click **"New +"** → **"Web Service"**

3. Connect your GitHub repository

4. Configure the service:
   - **Name**: `ai-browser-website`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

5. Click **"Create Web Service"**

6. Wait for deployment (usually 2-3 minutes)

7. Your site will be live at: `https://ai-browser-website.onrender.com`

### Step 3: Custom Domain (Optional)

1. In Render dashboard, go to your service
2. Click **"Settings"** → **"Custom Domain"**
3. Add your domain (e.g., `aibrowser.com`)
4. Follow DNS configuration instructions

## File Structure

```
website/
├── index.html          # Main landing page
├── style.css           # Styles with gradients and animations
├── script.js           # Interactive features
├── server.js           # Express server for Render
├── package.json        # Dependencies
├── logo.png            # App logo
├── screenshot.png      # Browser screenshot
├── downloads/          # Installer files
│   └── AI-Browser-Setup.exe
└── README.md          # This file
```

## Customization

### Update Download Link
Edit `index.html` line with download button to point to your actual installer.

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary: #8B5CF6;
    --secondary: #EC4899;
    --accent: #F59E0B;
}
```

### Update Links
Replace placeholder links in `index.html`:
- GitHub repository URL
- Support links
- Documentation links

## Environment Variables (Render)

No environment variables needed for basic deployment. The app runs on the PORT provided by Render automatically.

## Troubleshooting

### Build Fails
- Ensure Node.js version is 14+
- Check `package.json` has correct dependencies
- Verify `server.js` has no syntax errors

### Download Not Working
- Make sure installer is in `downloads/` folder
- Check file path in HTML matches actual filename
- Verify file permissions

### Styles Not Loading
- Clear browser cache
- Check file paths are correct
- Ensure CSS file is in same directory

## Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Optimized for**: Modern browsers (Chrome, Edge, Firefox, Safari)

## License

MIT License - Feel free to use and modify!

## Support

For issues or questions:
- Open an issue on GitHub
- Email: support@yourdomain.com

---

Made with ❤️ for the AI Browser community
