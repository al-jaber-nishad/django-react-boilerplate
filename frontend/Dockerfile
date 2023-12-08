# Stage 1: Build React app
FROM node:14 as react-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build

# Stage 2: Final image
FROM nginx:alpine
COPY --from=react-builder /app/build /usr/share/nginx/html
