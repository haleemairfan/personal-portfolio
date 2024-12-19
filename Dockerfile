# Use an Nginx base image
FROM nginx:stable-alpine

# Copy React build files into the Nginx HTML directory
COPY build /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
