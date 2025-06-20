# Use official Node.js LTS version image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project
COPY . .

# Expose backend port
EXPOSE 5000

# Run the app
CMD ["npm", "run", "dev"]
