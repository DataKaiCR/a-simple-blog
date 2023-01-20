FROM node:17

# Working Directory
WORKDIR /app

# Copy package json files
COPY package*.json ./

# Install files
RUN npm install

# Copy source file
COPY . .

# Expose Blog Port
EXPOSE 5500

# Run
CMD ["npm", "run","devStart"]