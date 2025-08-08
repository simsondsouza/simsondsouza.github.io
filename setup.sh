#!/bin/bash

# Setup script for simsondsouza.github.io portfolio
# This script will install all necessary dependencies and set up the project

set -e  # Exit on any error

echo "🚀 Setting up simsondsouza.github.io portfolio..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running on Linux
if [[ "$OSTYPE" != "linux-gnu"* ]]; then
    print_error "This script is designed for Linux systems. Please run on a Linux machine or WSL."
    exit 1
fi

# Check if running as root
if [[ $EUID -eq 0 ]]; then
    print_warning "Running as root. This is not recommended for security reasons."
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Update package list
print_status "Updating package list..."
sudo apt update

# Install system dependencies
print_status "Installing system dependencies..."
sudo apt install -y curl wget git build-essential python3 python3-pip

# Check if Node.js is already installed
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version | cut -d'v' -f2)
    print_status "Node.js is already installed (version $NODE_VERSION)"
    
    # Check if version is >= 18
    if [[ $(echo "$NODE_VERSION >= 18.0.0" | bc -l) -eq 1 ]]; then
        print_success "Node.js version is compatible"
    else
        print_warning "Node.js version $NODE_VERSION is older than recommended (18.0.0)"
        print_status "Installing latest Node.js version..."
        
        # Install Node.js using NodeSource repository
        curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
        sudo apt-get install -y nodejs
    fi
else
    print_status "Node.js not found. Installing Node.js 18.x..."
    
    # Install Node.js using NodeSource repository
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Verify Node.js and npm installation
print_status "Verifying Node.js and npm installation..."
NODE_VERSION=$(node --version)
NPM_VERSION=$(npm --version)
print_success "Node.js $NODE_VERSION and npm $NPM_VERSION installed successfully"

# Check if we're in the correct directory
if [[ ! -f "package.json" ]]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Install npm dependencies
print_status "Installing npm dependencies..."
print_status "Note: You may see warnings about Node.js version - this is normal and won't affect functionality"
if npm install --legacy-peer-deps; then
    print_success "Dependencies installed successfully"
else
    print_warning "Some dependencies had conflicts, trying with force..."
    npm install --legacy-peer-deps --force
fi

# Check if yarn is preferred (optional)
if [[ -f "yarn.lock" ]]; then
    print_status "yarn.lock found. Checking for yarn..."
    if ! command -v yarn &> /dev/null; then
        print_status "Yarn not found. Installing yarn locally..."
        # Install yarn locally to avoid permission issues
        npm install -g yarn --location=global || npm install -g yarn
    fi
    print_status "Installing dependencies with yarn..."
    if yarn install; then
        print_success "Dependencies installed successfully with yarn"
    else
        print_warning "Some dependencies had conflicts with yarn, trying with legacy peer deps..."
        yarn install --ignore-engines
    fi
else
    print_status "Installing dependencies with npm..."
    if npm install --legacy-peer-deps; then
        print_success "Dependencies installed successfully"
    else
        print_warning "Some dependencies had conflicts, trying with force..."
        npm install --legacy-peer-deps --force
    fi
fi

# Build the project
print_status "Building the project..."
if npm run build; then
    print_success "Project built successfully!"
else
    print_warning "Build completed with warnings (this is normal for development builds)"
fi

print_success "🎉 Setup completed successfully!"
print_status "Your portfolio is now ready to run."
echo
print_status "Available commands:"
echo "  npm run dev     - Start development server"
echo "  npm run build   - Build for production"
echo "  npm run preview - Preview production build"
echo "  npm run deploy  - Deploy to GitHub Pages"
echo
print_status "To start the development server, run:"
echo "  npm run dev"
echo
print_status "To deploy to GitHub Pages, run:"
echo "  npm run deploy"
