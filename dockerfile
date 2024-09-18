FROM node:lts
WORKDIR /app

# Copy in the package.json and install dependencies
COPY package*.json ./
COPY tsconfig.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
RUN npm install

# Copy in the source and build
COPY . .
RUN ["npm", "run", "build"]

# Run
EXPOSE 1234
CMD ["npm", "run", "start"]
