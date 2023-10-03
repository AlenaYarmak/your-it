FROM node:18

# Set working directory in the container
WORKDIR /app

# Copy the Node.js app to the container
COPY . .

# Install the Node.js app dependencies
RUN npm install

# Expose port 3000 for the Node.js app
EXPOSE 3000

# The command to run the Node.js app
CMD [ "node", "server.js" ]
