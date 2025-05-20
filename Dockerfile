# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy full project
COPY . .

# Expose port if needed
EXPOSE 3000

# Command to run app
CMD ["node", "index.js"]
