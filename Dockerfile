# Set base Node.js image
FROM node:alpine as builder

# Set working directory
WORKDIR /app

# Copy dependency files, then install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and project files, then build
COPY . ./
RUN npm run build

# Set base nginx image
FROM nginx:alpine

# Configure nginx, and copy build from previous stage
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start nginx proxy
CMD ["nginx", "-g", "daemon off;"]