# Use the official Node.js image as a base for the build stage
FROM node:18 AS builder

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Set the working directory in the container
WORKDIR /app

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a lighter image for the production stage
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy only the built files and necessary dependencies from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./
COPY --from=builder /app/public ./public

# Install production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]
