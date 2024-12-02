# Use an Nginx base image
FROM nginx:stable-alpine

# Copy React build files into the Nginx HTML directory
COPY build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
