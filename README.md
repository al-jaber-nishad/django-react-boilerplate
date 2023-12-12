# Django React Boilerplate

This project provides a boilerplate for a Django and React web application, containerized with Docker for local development and production deployment.

## Project Structure

The project is organized into the following components:

- **frontend**: Contains the React frontend code.
- **backend**: Contains the Django backend code.
- **docker**: Includes Dockerfiles for building frontend and backend Docker images.
- **docker-compose.yml**: Defines the services and configuration for running the application with Docker Compose.

## Features

- **Dockerized Development**: Easily set up a local development environment using Docker.
- **Multistage Build**: Utilizes Docker multistage builds for efficient image sizes.
- **Separate Configuration**: Allows separate configuration for local development and production using environment variables.
- **Docker Hot Reloading**: Facilitates hot reloading during local development for both frontend and backend.
- **Logging Configuration**: Configures logging for backend and frontend containers.
- **Database Backup**: Implements a mechanism for exporting the database for backup purposes.
- **Docker Tool**: Provides a simple bash script for common Docker commands.

## Getting Started

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/django-react-boilerplate.git
   cd django-react-boilerplate
   ```

2. Create a `.env` file in the `backend` directory for Django settings.

4. Run the following command to start the application:

   ```bash
   docker-compose up
   ```

   This will build and start the Docker containers for the backend and frontend.

5. Access the application in your browser:

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:8000](http://localhost:8000)

### Docker Tool

A simple Docker tool script is provided for common tasks. Use the following commands:

- **Build Image**:

  ```bash
  ./docker-tool build <image_name> <dockerfile_path>
  ```

- **Run Container**:

  ```bash
  ./docker-tool run <host_port> <container_name> <image_name>
  ```

- **Stop Container**:

  ```bash
  ./docker-tool stop <container_name>
  ```

### Future Scope
1. Add a different database container. In this project SQLite3 has been used thats why there isn't any other dedicated container for the database.
