FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the backend in dev mode
CMD ["npm", "run", "dev"]
