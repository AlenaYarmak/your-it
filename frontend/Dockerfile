FROM nginx:alpine

# Copy static files to Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Default command for Nginx
CMD ["nginx", "-g", "daemon off;"]
