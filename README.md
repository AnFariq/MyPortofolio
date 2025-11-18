# Web3 Portfolio Website

A modern, futuristic portfolio website built with React and Vite, featuring Web3 aesthetics with glassmorphism effects, neon colors, and smooth animations.

## Features

- 🎨 **Web3 Design**: Dark theme with neon colors, glassmorphism effects, and particle animations
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance**: Optimized with Vite for fast loading
- 🎭 **Animations**: Smooth transitions and micro-interactions with Framer Motion
- 🔗 **Integrations**: GitHub API, Figma API ready
- 📧 **Contact**: Functional contact form with validation

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS with custom Web3 theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **3D**: React Three Fiber (optional)
- **Routing**: React Router

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

## Deployment

This project is optimized for Vercel deployment. Simply connect your GitHub repository to Vercel and it will deploy automatically.

## Customization

### GitHub Integration
Update your GitHub username in `src/components/GitHub.jsx`:
```javascript
const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=12')
```

### Figma Integration
Add your Figma token and file ID in `src/components/Figma.jsx`:
```javascript
const response = await fetch('https://api.figma.com/v1/files/YOUR_FILE_ID', {
  headers: {
    'X-Figma-Token': 'YOUR_FIGMA_TOKEN'
  }
})
```

### Contact Form
Update the email address in `src/components/Contact.jsx` to receive form submissions.

## Sections

1. **Hero**: Eye-catching introduction with call-to-action
2. **Services**: Showcase of offered services
3. **Portfolio**: Featured projects grid
4. **GitHub**: Live GitHub repository feed
5. **Figma**: Design portfolio showcase
6. **Contact**: Contact form and information
7. **Footer**: Social links and navigation

## Color Palette

- **Primary Dark**: `#0F0F23`
- **Secondary Dark**: `#0A0A15`
- **Card**: `#1A1A2E`
- **Neon Cyan**: `#00FFFF`
- **Neon Purple**: `#FF00FF`
- **Neon Pink**: `#FF1493`
- **Neon Blue**: `#0080FF`

## License

MIT License - feel free to use this template for your own portfolio!