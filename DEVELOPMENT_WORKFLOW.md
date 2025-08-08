# Development Workflow

This document explains the development workflow for the simsondsouza.github.io portfolio project.

## Branch Structure

### Main Branch (`main`)
- **Purpose**: Production-ready code
- **Deployment**: Automatically deploys to GitHub Pages when code is pushed
- **Workflow**: `deploy.yml` - Builds and deploys to GitHub Pages

### Development Branch (`devel`)
- **Purpose**: Development and testing
- **Deployment**: No automatic deployment (only builds and tests)
- **Workflow**: `develop.yml` - Builds and tests the code

## Workflow Process

### 1. Development Phase (devel branch)
```bash
# Start development
git checkout devel
git pull origin devel

# Make your changes
# ... edit files ...

# Test locally
npm run dev
npm run build

# Commit and push to devel
git add .
git commit -m "Your commit message"
git push origin devel
```

**What happens:**
- GitHub Actions runs `develop.yml` workflow
- Builds the project
- Runs tests (if available)
- **No deployment** - just validation

### 2. Production Deployment (main branch)
```bash
# Create pull request from devel to main
# Go to: https://github.com/simsondsouza/simsondsouza.github.io/pull/new/devel

# After PR is approved and merged
git checkout main
git pull origin main
```

**What happens:**
- GitHub Actions runs `deploy.yml` workflow
- Builds the project
- Deploys to GitHub Pages at `https://simsondsouza.github.io`

## Key Benefits

1. **Safe Development**: Work on `devel` branch without affecting production
2. **Automatic Testing**: Every push to `devel` triggers build and test
3. **Controlled Deployment**: Only `main` branch deploys to production
4. **Code Review**: PR process ensures code quality before deployment

## Setup Script Fixes

The setup script (`setup.sh`) has been improved to:
- Handle yarn installation gracefully
- Use fallback to npm if yarn fails
- Provide better error messages
- Handle dependency conflicts with `--legacy-peer-deps`

## Recent Fixes

1. **Loading Component**: Fixed syntax error in `src/components/Loading.jsx`
2. **Setup Script**: Improved yarn installation handling
3. **GitHub Pages**: Fixed routing with HashRouter
4. **Asset Paths**: Updated to use relative paths for GitHub Pages

## Troubleshooting

### Setup Script Issues
If you encounter permission issues with yarn:
```bash
# The script will automatically fall back to npm
./setup.sh
```

### Build Issues
If build fails:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

### GitHub Pages Issues
If the site shows a blank page:
1. Check browser console for errors
2. Verify the build completed successfully
3. Check if assets are loading (Network tab)
4. Ensure HashRouter is being used

## Commands Reference

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Git workflow
git checkout devel   # Switch to development branch
git checkout main    # Switch to main branch
git pull origin devel # Pull latest devel changes
git pull origin main # Pull latest main changes

# Setup
./setup.sh          # Run setup script
```

## Next Steps

1. **Test the devel branch**: Push changes to `devel` and verify the workflow runs
2. **Create PR**: Create a pull request from `devel` to `main`
3. **Merge to main**: After testing, merge the PR to trigger deployment
4. **Verify deployment**: Check `https://simsondsouza.github.io` after merge
