# Stage 1: Build React app
FROM node:14 as react-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build

# Stage 2: Development image with hot reloading
FROM node:14 
WORKDIR /app
COPY --from=react-builder /app /app
EXPOSE 3000
CMD ["npm", "start"]
