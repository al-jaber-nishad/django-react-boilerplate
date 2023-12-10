# Stage 1
FROM node:14.21-slim as react-builder
WORKDIR /app
COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/
RUN npm install
COPY . /app

# Stage 2
FROM node:14.21-slim as development
WORKDIR /app
COPY --from=react-builder /app /app
EXPOSE 3000
CMD ["npm", "start"]
