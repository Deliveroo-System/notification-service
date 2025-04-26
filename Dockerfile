# Use official lightweight Node.js 18 image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for optimal layer caching
COPY package*.json ./

# Install dependencies (production only for final image)
RUN npm ci --only=production

# Copy application files
COPY . .

# Expose the app port (from your error logs)
EXPOSE 5056

# Define runtime command (matches your package.json)
CMD ["npm", "start"]