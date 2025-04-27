#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to copy env file
copy_env_file() {
    local source=$1
    local destination=$2
    
    if [ -f "$destination" ]; then
        echo -e "${YELLOW}Warning: $destination already exists. Skipping...${NC}"
    else
        cp "$source" "$destination"
        echo -e "${GREEN}Created $destination${NC}"
    fi
}

# Create necessary directories
mkdir -p apps/onboarding
mkdir -p apps/web
mkdir -p apps/dashboard
mkdir -p packages/api

# Copy environment files
echo -e "${GREEN}Setting up environment files...${NC}"

# Root env
copy_env_file "config/env/root.env.example" ".env"

# Apps
copy_env_file "config/env/onboarding.env.example" "apps/onboarding/.env"
copy_env_file "config/env/web.env.example" "apps/web/.env"
copy_env_file "config/env/dashboard.env.example" "apps/dashboard/.env"

# Packages
copy_env_file "config/env/api.env.example" "packages/api/.env"

echo -e "${GREEN}Environment setup complete!${NC}"
echo -e "${YELLOW}Please update the .env files with your actual values.${NC}"
echo -e "${YELLOW}Remember to never commit .env files to version control.${NC}" 