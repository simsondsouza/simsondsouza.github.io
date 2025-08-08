# Portfolio Setup Guide

This guide will help you set up the simsondsouza.github.io portfolio project on a fresh Linux system.

## Quick Setup

### Option 1: Automated Setup (Recommended)

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/simsondsouza/simsondsouza.github.io.git
   cd simsondsouza.github.io
   ```

2. **Run the setup script**:
   ```bash
   ./setup.sh
   ```

   This script will:
   - Install all system dependencies
   - Install Node.js 18.x and npm
   - Install project dependencies
   - Build the project

### Option 2: Manual Setup

1. **Install system dependencies**:
   ```bash
   sudo apt update
   sudo apt install -y curl wget git build-essential python3 python3-pip
   ```

2. **Install Node.js 18.x**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Verify installation**:
   ```bash
   node --version  # Should be v18.x.x or higher
   npm --version   # Should be 8.x.x or higher
   ```

4. **Install project dependencies**:
   ```bash
   npm install
   ```

5. **Build the project**:
   ```bash
   npm run build
   ```

## Available Commands

After setup, you can use these commands:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## Troubleshooting

### Node.js/npm not found
If you get "command not found" errors for Node.js or npm:
1. Make sure you've run the setup script: `./setup.sh`
2. Or manually install Node.js following Option 2 above

### Permission denied
If you get permission errors:
1. Make sure the setup script is executable: `chmod +x setup.sh`
2. Run with sudo if needed: `sudo ./setup.sh`

### Build errors
If the build fails:
1. Make sure all dependencies are installed: `npm install`
2. Check if you're in the correct directory (should contain `package.json`)
3. Try clearing npm cache: `npm cache clean --force`

## System Requirements

- Linux (Ubuntu/Debian recommended)
- Git
- Internet connection for downloading dependencies
- At least 2GB free disk space

## Dependencies

### System Dependencies (requirements.txt)
- curl
- wget
- git
- build-essential
- python3
- python3-pip

### Node.js Dependencies (package.json)
- React 18.3.1
- Vite 3.1.0
- Framer Motion 7.3.5
- React Icons 4.12.0
- And more (see package.json for complete list)
